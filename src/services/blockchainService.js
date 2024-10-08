import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// This is a simplified version. You would need to deploy a smart contract
// and use its ABI and address in a real-world scenario.
export const storeHash = async (hash) => {
  const accounts = await web3.eth.getAccounts();
  const transaction = await web3.eth.sendTransaction({
    from: accounts[0],
    to: '0x0000000000000000000000000000000000000000',
    data: web3.utils.toHex(hash),
  });
  return transaction.transactionHash;
};
