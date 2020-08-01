const HDWalletProvider = require('truffle-hdwallet-provider');
// const NonceTrackerSubprovicer = require('web3-provicer-engine/subproviders/nonce-tracker');

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "5777"
        },
        ropsten: {
            provider: function() {
                // return new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${ process.env.INFURA_ROPSTEN_API_KEY }`, 2)
                return new HDWalletProvider(process.env.WALLET_PRIVATE_KEY, `https://ropsten.infura.io/v3/${ process.env.INFURA_ROPSTEN_API_KEY }`)
            },
            network_id: 3,
            gas: 8000000,
            gasPrice: 100000000000
        }
    },
    compilers: {
        solc: {
            version: '0.6.6'
        }
    }
}

