// scripts/deploy.ts
import { ethers } from "hardhat";
import { parseEther } from "ethers";

async function main() {
  console.log("Starting deployment process...");

  // Deploy the LockingFactoryImplementation first
  console.log("Deploying LockingFactoryImplementation...");
  const LockingFactoryImplementationFactory = await ethers.getContractFactory("LockingFactoryImplementation");
  const lockingFactoryImplementation = await LockingFactoryImplementationFactory.deploy();
  await lockingFactoryImplementation.waitForDeployment();
  
  const lockingFactoryImplementationAddress = await lockingFactoryImplementation.getAddress();
  console.log(`LockingFactoryImplementation deployed to: ${lockingFactoryImplementationAddress}`);

  // Deploy the ProxyRegistry with the implementation address
  console.log("Deploying ProxyRegistry with implementation address...");
  const ProxyRegistryFactory = await ethers.getContractFactory("ProxyRegistry");
  const proxyRegistry = await ProxyRegistryFactory.deploy(lockingFactoryImplementationAddress);
  await proxyRegistry.waitForDeployment();
  
  const proxyRegistryAddress = await proxyRegistry.getAddress();
  console.log(`ProxyRegistry deployed to: ${proxyRegistryAddress}`);

  // For demonstration, create a factory for a demo token and user
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();

  // Deploy a mock ERC20 token for testing
  console.log("Deploying Mock ERC20 Token...");
  const MockERC20Factory = await ethers.getContractFactory("MockERC20");
  const mockToken = await MockERC20Factory.deploy("Staking Token", "STK", parseEther("1000000"));
  await mockToken.waitForDeployment();
  
  const mockTokenAddress = await mockToken.getAddress();
  console.log(`Mock ERC20 Token deployed to: ${mockTokenAddress}`);

  // Mint tokens to the deployer
  console.log("Minting tokens to deployer...");
  const mintAmount = parseEther("50000");
  await mockToken.mint(deployerAddress, mintAmount);
  console.log(`Minted ${mintAmount} tokens to ${deployerAddress}`);

  // Create a factory using the registry
  console.log("Creating factory through ProxyRegistry...");
  const createFactoryTx = await proxyRegistry.createFactory(mockTokenAddress, deployerAddress);
  const receipt = await createFactoryTx.wait();

  // Get factory address from event
  let factoryAddress: string | undefined;
  if (receipt && receipt.logs) {
    const abi = ["event FactoryDeployed(address indexed creator, address indexed token, address factory)"];
    const iface = new ethers.Interface(abi);
    
    for (const log of receipt.logs) {
      try {
        const parsedLog = iface.parseLog({
          topics: log.topics as string[],
          data: log.data
        });
        
        if (parsedLog && parsedLog.name === "FactoryDeployed") {
          factoryAddress = parsedLog.args.factory;
          console.log(`Factory created at: ${factoryAddress}`);
          break;
        }
      } catch (e) {
        // This log was not the event we were looking for
        continue;
      }
    }
    
    // Set allowance for the factory proxy - should be removed when integrated with ST-20
    if (factoryAddress) {
      console.log("Setting allowance for the factory...");
      const allowanceAmount = parseEther("10000");
      await mockToken.approve(factoryAddress, allowanceAmount);
      console.log(`Approved ${allowanceAmount} tokens for the factory at ${factoryAddress}`);
    }
  } else {
    console.log("Could not find factory deployment event");
  }

  // Log deployment summary
  console.log("\nDeployment Summary:");
  console.log("--------------------");
  console.log(`LockingFactoryImplementation: ${lockingFactoryImplementationAddress}`);
  console.log(`ProxyRegistry: ${proxyRegistryAddress}`);
  console.log(`Mock ERC20 Token: ${mockTokenAddress}`);
  if (factoryAddress) {
    console.log(`Factory created at: ${factoryAddress}`);
    console.log(`Minted ${mintAmount} tokens to deployer: ${deployerAddress}`);
    console.log(`Approved ${parseEther("10000")} tokens for the factory`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });