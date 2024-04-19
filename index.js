// Imports
const {
  generate_secret,
  generate_ciphertext,
  create_wallet_set,
  create_wallet,
  get_wallets,
  get_wallet,
  wallet_transactions,
  get_balance,
  transfer_token,
} = require("./helper_functions.js");

const {
  approve_usdc,
  burn_usdc,
  get_attestation,
  mint_usdc,
  check_mint_transaction,
} = require("./cctp_functions.js");

/*
For this project, you need to create .env file with the following variables:
API_KEY=
ENTITY_SECRET=
WALLET_SET_ID=
WALLET_ID_1=
WALLET_ID_2=
WALLET_ADDRESS_1=
WALLET_ADDRESS_2=
USDC_TOKEN_ID=7adb2b7d-c9cd-5164-b2d4-b73b088274dc

Start with adding the API_KEY. 
You will fill the rest once you have obtained the data from the Circle API.

You will comment out the code below step by step since you will need to obtain data
and modify the .env file.

There are 2 main sections and 9 steps in total.
The first section is about generating a random secret and a ciphertext.
The second section is about creating a wallet, getting wallet information, making and
confirming a transaction, and checking the wallet balance.

The developer controlled wallets are not like user controlled wallets meaning that you do not
need to present a challenge to the user to finalize the transaction.

You can see the implementation of the function in the helper_functions.js file.

To run the project, first install the dependencies:
npm install

Then run the project:
node index.js
or
npm run start
*/

// ----- Generate a random secret and a ciphertext -----
// ----- Step 1 -----

// Generate a random secret
// const secret = generate_secret();
// console.log("secret: ", secret);

// // // // Generate ciphertext
// const ciphertext = generate_ciphertext(secret);

// ! Do not forget to save the secret and the ciphertext in a secure place. !

// Save the secret in the .env file
// Save the ciphertext in a safe place
// Complete the process in the configurator as talked in the README.md file:
// https://console.circle.com/wallets/dev/configurator

// ----- Create Wallet -----
// ----- Step 2 -----

// Create Wallet Set
// create_wallet_set();

// Should return:
// data: {
//     walletSet: {
//       id: <wallet set id>,
//       custodyType: 'DEVELOPER',
//       name: 'Set 1',
//       updateDate: <date>,
//       createDate: <date>
//     }
//   },

// Save the wallet set id in the .env file

// ----- Step 3 -----

// Create a wallet
// create_wallet();

// Should return:
// [
//   {
//     id: <wallet id>,
//     state: "LIVE",
//     walletSetId: <wallet set id>,
//     custodyType: "DEVELOPER",
//     address: <wallet address>,
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: <date>,
//     createDate: <date of the wallet creation>,
//   },
//   {
//     id: <wallet id>,
//     state: "LIVE",
//     walletSetId: <wallet set id>,
//     custodyType: "DEVELOPER",
//     address: <wallet address>,
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: <date>,
//     createDate: <date of the wallet creation>,
//   },
// ];

// Save both wallet ids and addresses in the .env file

// ----- Step 4 -----

// Get Wallets
// get_wallets();

// Should return:
// [
//   {
//     id: <wallet id>,
//     state: "LIVE",
//     walletSetId: <wallet set id>,
//     custodyType: "DEVELOPER",
//     address: <wallet address>,
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: <date>,
//     createDate: <date>,
//   },
//   {
//     id: <wallet id>,
//     state: "LIVE",
//     walletSetId: <wallet set id>,
//     custodyType: "DEVELOPER",
//     address: <wallet address>,
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: <date>,
//     createDate: <date>,
//   }
// ];

// ----- Step 5 -----

// Get specific wallet
// get_wallet();

// Should return:
// {
//   wallet: {
//     id: <wallet id>,
//     state: 'LIVE',
//     walletSetId: <wallet set id>,
//     custodyType: 'DEVELOPER',
//     address: <wallet address>,
//     blockchain: 'MATIC-MUMBAI',
//     accountType: 'SCA',
//     updateDate: <date>,
//     createDate: <date>
//   }
// }

// Go to the faucet and get some USDC tokens for the wallet address.
// You should get the test tokens for the wallet under the name WALLET_ADDRESS_1 in the .env file
// Faucet: https://faucet.circle.com/

// ----- Step 6 -----

// List wallet transactions
// wallet_transactions();

// Should return:
// response: {
//   transactions: [
//     {
//       id: <transaction id>,
//       blockchain: "MATIC-MUMBAI",
//       tokenId: "7adb2b7d-c9cd-5164-b2d4-b73b088274dc",
//       walletId: <wallet id>,
//       sourceAddress: <address of the sending wallet>,
//       destinationAddress: <address of the receiving wallet>,
//       transactionType: "INBOUND",
//       custodyType: "DEVELOPER",
//       state: "COMPLETE",
//       amounts: [Array],
//       nfts: null,
//       txHash:
//         <transaction hash>,
//       blockHash:
//         <block hash>,
//       blockHeight: <block height>,
//       networkFee: <fee paid to the network for the transaction>,
//       firstConfirmDate: <date>,
//       operation: "TRANSFER",
//       abiParameters: null,
//       createDate: <date>,
//       updateDate: <date>,
//     },
//   ];
// }
// amount: ["10"];

// Save token id in the .env file

// ----- Step 7 -----

// Get wallet balance
// get_balance();

// Should return:
// response: {
//   tokenBalances: [
//     {
//       token: [Object],
//       amount: "0",
//       updateDate: <date>,
//     },
//     {
//       token: [Object],
//       amount: "10",
//       updateDate: <date>,
//     },
//   ];
// }
// Matic token id:  e4f549f9-a910-59b1-b5cd-8f972871f5db
// USDC token id:  7adb2b7d-c9cd-5164-b2d4-b73b088274dc

// ----- Step 8 -----

// Transfer USDC
// transfer_token();

// Should return:
// response:  { id: <some id>, state: 'INITIATED' }

// You will use this id in the next step, so go ahead and save it.

// ----- Step 9 -----

// Check transfer state
// check_transfer_state("4b380ca3-4e0a-5648-8b45-0e95e1a809ec");

// Should return:
// response:  {
//   transaction: {
//     id: <transaction id>,
//     blockchain: 'MATIC-MUMBAI',
//     tokenId: <token id>,
//     walletId: <wallet id>,
//     sourceAddress: <sending wallet address>,
//     destinationAddress: <receiving wallet address>,
//     transactionType: 'OUTBOUND',
//     custodyType: 'DEVELOPER',
//     state: 'COMPLETE',
//     amounts: [ '0.01' ],
//     nfts: null,
//     txHash: <transaction hash>,
//     blockHash: <block hash>,
//     blockHeight: 45746584,
//     userOpHash: <user op hash>,
//     networkFee: <network fee for this transaction>,
//     firstConfirmDate: <date>,
//     operation: 'TRANSFER',
//     feeLevel: 'MEDIUM',
//     estimatedFee: {
//       gasLimit: <gas limit>,
//       baseFee: <base fee>,
//       priorityFee: <priority fee>,
//       maxFee: <max fee>
//     },
//     refId: '',
//     abiParameters: null,
//     createDate: <date>,
//     updateDate: <date>
//   }
// }

// Here, the state should say complete.

// ----- CCTP -----
// ----- Step 1 -----
// Approve TokenMessenger Contract
// approve_usdc();

// Should return:
// encryptedData: iCI1YIbtK3W0UCjpS8EjdZedi7gS1h6kYKxYFxK2fd5qrZEG...
// {
//   data: { id: '554000ed-fdca-5fd5-82d0-a033433559ae', state: 'INITIATED' }
// }

// ----- Step 2 -----
// Burn USDC
// burn_usdc();

// Should return:
// {
//   data: { id: 'd8e0e629-9a74-5705-8863-71fa...', state: 'INITIATED' }
// }

// ----- Step 3 -----
// Get Attestation
// get_attestation();

// Should return:
// {
//   attestation: '0xd4aeffb2f8a9be67d2df0e0573b83be32fb34b52632813ead541266d50ecf65a07156f4e5736d26316409915e4d43a1f3328cf0912cb2a92f6af03499ace71de1bd753435f873f0d670895fcbe15098858c4f96fa8c15d20f558d835656669cd59299883292019931e36f58c79c06735effd792f86cfe0e1bf4f86a8a2ea4d2b861c',
//   status: 'complete'
// }

// ----- Step 4 -----
// Mint USDC
// mint_usdc();

// Should return:
// {
//   data: { id: '317c264d-a507-5b2d-b91e-47f869793fd3', state: 'INITIATED' }
// }
