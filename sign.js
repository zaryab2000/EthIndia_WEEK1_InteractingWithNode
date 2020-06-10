var Web3 = require('web3');
var fs = require("fs");

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'))
// var web3 = new Web3();
//f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13
//console.log("version :", web3.version);
//console.log(web3.eth.blocknumber)

function getBalance(){
    web3.eth.getBalance('0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7', function(err, res){
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    })

}

getBalance()

data = "Hello World Zaryab"
result = web3.eth.accounts.sign(data, 'f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13')
console.log(result)


