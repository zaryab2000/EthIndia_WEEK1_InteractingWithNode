from web3 import Web3

url='https://goerli.infura.io/v3/d4de0da2227146e5836fbe0d55c017c7'
web3 = Web3(Web3.HTTPProvider(url))

# print(web3.isConnected())
key = 'f331855b51c30f21bfaeb4c0bf9535456204ca13f3a95aa78f44b3a675546e13'
account_address ='0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7'

def sendGeth():
	nonce = web3.eth.getTransactionCount(account_address)

	tx = contract.functions.createPost(content).buildTransaction({
          'from': '0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7',
          'to':'0xbf93E9687d3B38a879a8826FDaA218AEf82E2b50',
          'value': '1000000000000000',
          "gas": 300000,
          "chainId": 5,
          'gasPrice': web3.toWei('40', 'gwei'),
    })

	# tx = contract.functions.createPost('hello there').buildTransaction({'nonce': web3.eth.getTransactionCount(account_address)})
	signed_tx = web3.eth.account.signTransaction(tx, key)
	tx_hash= web3.eth.sendRawTransaction(signed_tx.rawTransaction)
	tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
	print(tx_receipt)

sendGeth()