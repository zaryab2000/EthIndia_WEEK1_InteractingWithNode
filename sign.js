var Web3 = require('web3');
var fs = require("fs");

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'))
// var web3 = new Web3();
//f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13
//console.log("version :", web3.version);
//console.log(web3.eth.blocknumber)

data = "Hello World Zaryab"
result = web3.eth.accounts.sign(data, 'f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13')
console.log(result)

//web3.eth.getBlock(1).then(console.log)
console.log('===============================================')
function getHash(num){
web3.eth.getBlock(num,function(err,res){
if (err){
    console.log(err);
}
else{
    console.log('GOT IT');
    //console.log(res)
    value = res.hash + "\n";
    //console.log(res.hash)
    fs.appendFile('hashes.txt', value, function(err) {
   if (err) {
      return console.error(err);
    }
    });

    //hash_list.push(res.hash)
}
})
}
console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.

for(i=0; i<128; i++){
    getHash(i)
}


