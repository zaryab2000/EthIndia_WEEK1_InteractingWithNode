var Web3 = require('web3');
var fs = require("fs");

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'))
// var web3 = new Web3();
var key = "f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13"
//console.log("version :", web3.version);
//console.log(web3.eth.blocknumber)


function getBalance(){
    web3.eth.getBalance('0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7', function(err, res){
        if(err){
            console.log(err)
        }
        else{
            console.log("AVAILABLE BALANCE "+res)
        }
    })

}
function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
var rawTransaction = ({
          from: '0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7',
          to:'0xbf93E9687d3B38a879a8826FDaA218AEf82E2b50',
          value: '1000000000000000',
          "gas": 200000,
          "chainId": 5,
 })
function sendGeth(){
    web3.eth.sendTransaction(transaction,function(error, result){
        if (error){
            console.log(error)
        }
        else{
            waitForReceipt(result,function(){
                console.log(result)
            })
        }
    })


}

function send(){
    web3.eth.accounts.signTransaction(rawTransaction,key ).then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
      .then(receipt => console.log("Transaction receipt: ", receipt))  .catch(err => console.error(err));
}
send()
//sendGeth()
//getBalance()


