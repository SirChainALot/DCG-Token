const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const local_mnemonic = fs.readFileSync(".secret_local").toString().trim();
const testnet_mnemonic = fs.readFileSync(".secret_testnet").toString().trim();
const mainnet_mnemonic = fs.readFileSync(".secret_mainnet").toString().trim();
const bscscan_key = fs.readFileSync(".bscscan").toString().trim();

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: bscscan_key
  },

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7475,            // Standard BSC port (default: none)
      network_id: "*"       // Any network (default: none)
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(testnet_mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(mainnet_mnemonic, `https://bsc-dataseed1.binance.org/`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.11", // A version or constraint - Ex. "^0.5.0"
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },
}