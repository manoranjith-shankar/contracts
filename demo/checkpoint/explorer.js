var readlineSync = require('readline-sync');
var BigNumber = require('bignumber.js')

var contracts = require("../helpers/contract_addresses");
let tickerRegistryAddress = contracts.tickerRegistryAddress();
let securityTokenRegistryAddress = contracts.securityTokenRegistryAddress();
let cappedSTOFactoryAddress = contracts.cappedSTOFactoryAddress();

let tickerRegistryABI;
let securityTokenRegistryABI;
let securityTokenABI;
let cappedSTOABI;
let generalTransferManagerABI;
try{
  tickerRegistryABI         = JSON.parse(require('fs').readFileSync('./build/contracts/TickerRegistry.json').toString()).abi;
  securityTokenRegistryABI  = JSON.parse(require('fs').readFileSync('./build/contracts/SecurityTokenRegistry.json').toString()).abi;
  securityTokenABI          = JSON.parse(require('fs').readFileSync('./build/contracts/SecurityToken.json').toString()).abi;
  cappedSTOABI              = JSON.parse(require('fs').readFileSync('./build/contracts/CappedSTO.json').toString()).abi;
  generalTransferManagerABI = JSON.parse(require('fs').readFileSync('./build/contracts/GeneralTransferManager.json').toString()).abi;
}catch(err){
  console.log('\x1b[31m%s\x1b[0m',"Couldn't find contracts' artifacts. Make sure you ran truffle compile first");
  return;
}



const Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

let tokenSymbol;
let securityToken;

async function executeApp() {

  accounts = await web3.eth.getAccounts();
  Issuer = accounts[0];

  setup();

};

async function setup(){
  try {
    tickerRegistry = new web3.eth.Contract(tickerRegistryABI,tickerRegistryAddress);
    tickerRegistry.setProvider(web3.currentProvider);
    securityTokenRegistry = new web3.eth.Contract(securityTokenRegistryABI,securityTokenRegistryAddress);
    securityTokenRegistry.setProvider(web3.currentProvider);
  }catch(err){
    console.log(err)
    console.log('\x1b[31m%s\x1b[0m',"There was a problem getting the contracts. Make sure they are deployed to the selected network.");
    return;
  }

  start_explorer();

}

async function start_explorer(){

  let tokenDeployed = false;
  let tokenDeployedAddress;
  tokenSymbol =  readlineSync.question('Enter the token symbol: ');
  // Let's check if token has already been deployed, if it has, skip to STO
  await securityTokenRegistry.methods.getSecurityTokenAddress(tokenSymbol).call({from: Issuer}, function(error, result){
    if(result != "0x0000000000000000000000000000000000000000"){
      securityToken = new web3.eth.Contract(securityTokenABI,result);
    }
  });

  // Get the GTM
  await securityToken.methods.getModule(2, 0).call({ from: Issuer }, function (error, result) {
    generalTransferManagerAddress = result[1];
  });
  generalTransferManager = new web3.eth.Contract(generalTransferManagerABI, generalTransferManagerAddress);
  generalTransferManager.setProvider(web3.currentProvider);

  let options = ['Transfer tokens', 'Explore account at checkpoint','Create checkpoint'];
  let index = readlineSync.keyInSelect(options, 'What do you want to do?');
  console.log("Selected:",options[index]);
  switch(index){
    case 0:
      let _to =  readlineSync.question('Enter beneficiary of tranfer: ');
      let _amount =  readlineSync.question('Enter amount of tokens to transfer: ');
      await transferTokens(_to,_amount);
    break;
    case 1:
      let _address =  readlineSync.question('Enter address to explore: ');
      let _checkpoint =  readlineSync.question('At checkpoint: ');
      await exploreAddress(_address,_checkpoint);
    break;
    case 2:
      //Create new checkpoint
      await securityToken.methods.createCheckpoint().send({ from: Issuer});
    break;
  }

}

async function exploreAddress(address, checkpoint){
  let balance = await securityToken.methods.balanceOf(address).call({from: Issuer});
  balance = web3.utils.fromWei(balance,"ether");
  console.log("Balance of",address,"is:",balance,"(Using balanceOf)");

  let balanceAt = await securityToken.methods.balanceOfAt(address,checkpoint).call({from: Issuer});
  balanceAt = web3.utils.fromWei(balanceAt,"ether");
  console.log("Balance of",address,"is:",balance,"(Using balanceOfAt - checkpoint",checkpoint,")");
}


async function transferTokens(address, amount){

  let whitelistTransaction = await generalTransferManager.methods.modifyWhitelist(address,Math.floor(Date.now()/1000),Math.floor(Date.now()/1000),Math.floor(Date.now()/1000 + 31536000)).send({ from: Issuer, gas:2500000});

  try{
    await securityToken.methods.transfer(address,web3.utils.toWei(amount,"ether")).send({ from: Issuer, gas:250000})
    .on('transactionHash', function(hash){
      console.log(`
        Your transaction is being processed. Please wait...
        TxHash: ${hash}\n`
      );
    })
    .on('receipt', function(receipt){
      console.log(`
        Congratulations! The transaction was successfully completed.

        Account ${receipt.events.Transfer.returnValues.from}
        transfered ${web3.utils.fromWei(receipt.events.Transfer.returnValues.value,"ether")} tokens
        to account ${receipt.events.Transfer.returnValues.to}

        Review it on Etherscan.
        TxHash: ${receipt.transactionHash}\n`
      );
    });

  }catch (err){
    console.log(err);
    console.log("There was an error processing the transfer transaction. \n The most probable cause for this error is one of the involved accounts not being in the whitelist or under a lockup period.")
    return;
  }
}

executeApp();
