const HDWalletProvider = require('@truffle/hdwallet-provider');
//const mnemonic = 'awesome grain neither pond excess garage tackle table piece assist venture escape'
const mnemonic = 'attack limb hood nothing divert clown target corn muscle leader naive small'
const INFURA_API_KEY = 'c3b4ff6ae7d64731a16ccfa5ee811d65'
module.exports = {
  

  networks: {
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: "0x29bC20DebBB95fEFef4dB8057121c8e84547E1A9",
      //gas: "4500000",
      gasPrice: "10000000000",
    },
     goerli: {
      provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + INFURA_API_KEY),
      network_id: 5,
      //confirmations: 2,
      //timeoutBlocks: 200,
      skipDryRun: true,
      from: "0x29bC20DebBB95fEFef4dB8057121c8e84547E1A9",
      gas: "29000000",
      gasPrice: "200000000000",
    }, 
     /* goerli: {
      provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + INFURA_API_KEY),
      skipDryRun: true,
      from: "0x29bC20DebBB95fEFef4dB8057121c8e84547E1A9",
      network_id: '5', // eslint-disable-line camelcase
      gas: "29000000",
      gasPrice: "208526651720",
      //confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      //timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    },  */
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
        settings: {          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200
          },
        }
    }
  },

  db: {
    enabled: false
  }
};
