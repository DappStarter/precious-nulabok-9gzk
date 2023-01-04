require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember solid hockey arch orange stock'; 
let testAccounts = [
"0x1f457fa1926bef06602d3141d77eaf3ac3739ed70f8c8727491e437d9322fdb1",
"0xc92ff70702fd8dced79e48c9601a95f33ea483ffec8eda6c2282c036247ac294",
"0x00974fce7f131205e8bd3311af609c94c55224ab4230c509e613213d0f3e05cb",
"0x2a7959d946784035ac2420756cf2d6234f545efd23abf2d27364264701d155e7",
"0xf2e12a72aa82760ba4aa0d8d2d03b046bd31d9b294e8cd1a1facbb1d8dd17530",
"0xa3bc397bf91bcf47498a7d91ca77562695c6ef1b87cc44a7d9c1ad4ceb734647",
"0x6c52dd896d24bf428e84a970385e463de6b1d4281560bf58fe0eed71bfda3eb9",
"0xae596004380f0706ae3b12fd2ae3c856135f0da11aa56d20e03261599cc92306",
"0x5081910913834fb80dbdb51ce9786035679d954a259860ded9325cee56f24dbb",
"0x7d555c6a512f78a80f3ca1563978243447c037a7fa5801351df82e486770ba34"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

