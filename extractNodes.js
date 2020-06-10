var Web3 = require('web3');



const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/9495682e7219424db269385b50725240'))
//TRANSACTION FOR CONTRACT CREATION: 0x24335c13fe6da3dcda7c58579e9805f6df7f9f30ca70a9ca5cb1ebff54411a6f
// CONTRATC ADDRESS : 0x35703E4009a30f7dFC2C520C3592A666d1CA0353
//CONTRACT  BLOCK NUMBER : 2850352

//const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'))

//CONTRACT BLOCK NUMBER -8047405
//8051567



function getHash(num){
web3.eth.getBlock(num,function(err,res){
if (err){
    console.log(err);
}
else{
    //console.log('GOT IT');
    //console.log(res)
    transaction_list =res.transactions
    if(transaction_list.length!=0){
        console.log('FOUND IT')
        console.log("TOTAL TRANSACTIONS: "+transaction_list.length)
        console.log("BLOCK NUMBER: "+res.number)
        console.log("TRANSACTION_LIST: "+transaction_list+"\n")
        value = res.hash + "\n";
        console.log("BLOCK HASH: "+value+"\n")
        //hash_list.push(res.hash)

    }
    else{
        return 0
    }
  }
})
}


function getTransactionHash(num){
web3.eth.getTransaction(num,function(err,res){
if (err){
    console.log(err);
}
else{
    console.log('GOT IT');
    console.log(res)
    //value = res.hash + "\n";
    //console.log(value)
    //hash_list.push(res.hash)
}
})
}


function getRec(num){
web3.eth.getTransactionReceipt(num,function(err,res){
if (err){
    console.log(err);
}
else{
    console.log('GOT IT');
    console.log(res)
    //value = res.hash + "\n";
    //console.log(value)
    //hash_list.push(res.hash)
}
})
}

console.log("STARTING CODE");
function check(){
    for(i=5000;i<6000;i++){
    getHash(i)
    console.log("\n")
}
}
check()
//getHash(5644)
//web3.eth.getTransactionReceipt('0xd4796b706170ef2f26936f2f859d8b5519f5b6c38c2a5715e31976d328b5e6bd').then(console.log);
//getRec('0x24335c13fe6da3dcda7c58579e9805f6df7f9f30ca70a9ca5cb1ebff54411a6f')
//getHash(2850352)
//getTransactionHash('0xd4796b706170ef2f26936f2f859d8b5519f5b6c38c2a5715e31976d328b5e6bd')
//getTransactionHash('0xdf7ed0531022eca804fedde14f2c9ee32773cd9781069a02a2682408013e5b7b')



