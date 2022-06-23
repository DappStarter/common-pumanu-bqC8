require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue return stick promote hover praise army gaze'; 
let testAccounts = [
"0xb3293406696df066a622a5221860a7b6d0a7c4948737a28346affa571b251bef",
"0x3eeefba0b88dcba12a22cbc55089d9e3557197fe98f89843fb52019b622a303c",
"0xd32c6da8ba6f9af7e9c91c9cff9eca127ffb0b3018d551aeacd0f6b1bad38bea",
"0x3ae5d393a4f3404b4baab5eed6d427ad17162c5a539964b5ca02aff198f23d94",
"0xaeacf1b4b1f01f7b017a384bcbb3a225cb378b6814f0d5a0d4eef5ee2eaaf548",
"0xe66e2ea2eeae921ac1919bd6d857e325ea20193f7240366852cc57ff846f1faa",
"0xdfd62d38521a730ac5b74c33139be92318e41ca0fd46fac0482da05d1a846bb0",
"0x49890b91b91a66fa8cf87ea82d877ce6025bb25ceea6cfeb0d56f7313f5857e9",
"0x762a892574b1e0f6f9c2ab2f9b28d70ee8972c7b25de6ffa23ad6707c99afaac",
"0x433bdaafc29883d3485e07cac21ee3e28467411c10e1d2df73889bb7de1f93c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


