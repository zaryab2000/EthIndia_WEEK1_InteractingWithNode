var Web3 = require('web3');


//const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'))
// FOUND IT
// BLOCK NUMBER: 16860
// TRANSACTION_LIST: 0x9116cccbe14007fb218e0e185cd6f52d56f6fa5a32d97b68927db2a72cd97b14

// BLOCK HASH: 0x714e148ec136e4986a4bb78faa15c4aa98734dd2583117deef3ee62bb1416617
// CONTRACT ADDRESS: 0x89020C106697feB386fEC16ebEB3fc9aE64EC16d

//=++++++====+++++++++++++++++++++++++++++++

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/94f3b90dd670408eb58ce81e121100d9'))
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
    //console.log(transaction_list[1])
     if(transaction_list.length!=0){
        console.log('FOUND IT')
       // console.log("TOTAL TRANSACTIONS: "+transaction_list.length)
        console.log("BLOCK NUMBER: "+res.number)
        console.log("TRANSACTION_LIST: "+transaction_list+"\n")
       for(i=0;i<transaction_list.length;i++){
            getRec(transaction_list[i])
        }

           //value = res.hash + "\n";
        //console.log("BLOCK HASH: "+value+"\n")
        //hash_list.push(res.hash)

    }
    
    else{
        return
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
   // console.log('GOT IT');
    var receipt = res
    var blockHash = res.blockHash
    var address = receipt.contractAddress
    //console.log(res)
    if(address){
        console.log('BLOCK HASH: '+blockHash)
         console.log("CONTRACT ADDRESS: "+address)

    }
    else{
        return 0
    }
    console.log("\n")
}
})
}


console.log("STARTING CODE");
function check(){
    var start = 21000
    var end = 22000

    for(i=start;i<end;i++){
    getHash(i)
    console.log("\n")
}
}
check()
// function getRecp(num){
// web3.eth.getTransactionReceipt(num,function(err,res){
// if (err){
//     console.log(err);
// }
// else{
//     console.log('GOT IT');
//     console.log(res)
// }
// })
// }




// RESULTS TOP
// {{
// // FOUND FIRST CONTRACT

// // Transaction Hash:
// // 0x7a7414513d022d97c9c9208747d7f61cbd68f7d4a84dc922c3b866c67636e56a
// // Status:
// // Success
// // Block:16811 
// // 2836504 Block Confirmations
// // Timestamp: 493 days 15 hrs ago (Feb-03-2019 01:55:43 PM +UTC)
// // From: 0x8882042b8e93c85312f623f058ef252c8025a7ae
// // To:[Contract 0x89020c106697feb386fec16ebeb3fc9ae64ec16dCreated]
// // Value:
// // 0 Ether ($0.00)
// // Transaction Fee:
// // 0.00249372 Ether

// }}
// {{
// // FOUND IT 2 BEST

// // Transaction Hash:
// // 0x54ad70894edf7a04c591cd4e0f36d3a5f6e91f7c686e37e6f91161668ec120c6
// // Status:
// // Success
// // Block:
// // 12841 2840490 Block Confirmations
// // Timestamp:
// // 494 days 8 hrs ago (Feb-02-2019 09:23:13 PM +UTC)
// // From:
// // 0xfb37c82bca4d6f331aa391f247fcf5c0359da755
// // To:
// // [Contract 0xc0ffeeacbf2611e748f08294d90bcea6c6e16ad1Created]
// // Value:
// // 1 Ether ($0.00)
// // Transaction Fee:
// // 0.01615748 Ether
// }}

// {{

// Transaction Hash:
// 0x99b7cb14d98011c605208f208feaf633159c13a56e913cdc704e14ef694e665b
// Status:
// Success
// Block:
// 13518 2839833 Block Confirmations
// Timestamp:
// 494 days 5 hrs ago (Feb-03-2019 12:12:28 AM +UTC)
// From:
// 0x5409ed021d9299bf6814279a6a1411a7e866a631
// To:
// [Contract 0x48bacb9266a570d521063ef5dd96e61686dbe788Created]
// Value:
// 0 Ether ($0.00)
// Transaction Fee:

// }}
// {{

// Transaction Hash:
// 0x6974f745a004f030bebb1c01d4595edbda2fafcf01c0bfbd5d335711e2a7b04e
// Status:
// Success
// Block:
// 13536 2839898 Block Confirmations
// Timestamp:
// 494 days 5 hrs ago (Feb-03-2019 12:16:58 AM +UTC)
// From:
// 0x5409ed021d9299bf6814279a6a1411a7e866a631
// To:
// [Contract 0x6000eca38b8b5bba64986182fe2a69c57f6b5414Created]
// Value:
// 0 Ether ($0.00)

// }}

// {{

// Transaction Hash:
// 0x68587e1f58f02f796d7266e2be1cc4d3c6da1237f64810db7ddfd4a900f5d0ed
// Status:
// Success
// Block:
// 13525 2839916 Block Confirmations
// Timestamp:
// 494 days 5 hrs ago (Feb-03-2019 12:14:13 AM +UTC)
// From:
// 0x5409ed021d9299bf6814279a6a1411a7e866a631
// To:
// [Contract 0x6a4a62e5a7ed13c361b176a5f62c2ee620ac0df8Created]
// Value:
// 0 Ether ($0.00)


// }}

