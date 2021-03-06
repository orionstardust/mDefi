  
# Decentralized Finance 
This package provides distributed ledger based banking features like payments, deposits, loans and automated investment patterns.

Connect your TypeScript based projects with smart contracts on the Ethereum Blockchain by checking the usage examples below.

This package shall increase freedom for those who increase freedom.

[![NPM Downloads](https://img.shields.io/npm/dw/decentralized-finance-defi)](https://www.npmjs.com/package/decentralized-finance-defi)  [![Chat](https://img.shields.io/discord/799926751039979520)](https://discord.gg/6mAtkXMf3Z)  [![Maintained](https://img.shields.io/maintenance/maintained/2021)](https://github.com/michael-spengler/decentralized-finance)  

## Usage Examples

#### Transfer Ether
```ts
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")

const fromWalletAddress = process.env.SENDER_WALLET_ADDRESS
const toWalletAddress = process.env.RECEIVER_WALLET_ADDRESS
const amountInETH = 1
const senderPrivateKey = process.env.SENDER_WALLET_PRIVATE_KEY

await DeFiService.transferEther(fromWalletAddress, toWalletAddress, amountInETH, senderPrivateKey)

```

#### Deposit Ether to Compound
You can also test this feature via the [compound.finance](https://compound.finance) user interface.
```ts
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")

const amountOfEtherToBeDeposited = 1
const senderPrivateKey = process.env.SENDER_WALLET_PRIVATE_KEY
const gasLimit = 250000 // GWEI --> 0.00025 ETH --> currently January 15th 2021 about 
const web3ProviderURL = process.env.PROVIDER_URL // e.g. https://mainnet.infura.io/v3/yourinfuraprojectid

await DeFiService.depositEtherToCompound(amountOfEtherToBeDeposited, senderWalletPrivateKey, gasLimit web3ProviderURL)

```

#### Borrow Ether from Compound
You can also test this feature via the [compound.finance](https://compound.finance) user interface.
```ts
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")

const amountOfDAIToBeBorrowed = 100
const walletPrivateKey = process.env.SENDER_WALLET_PRIVATE_KEY
const gasLimit = 250000
const web3ProviderURL = process.env.PROVIDER_URL // e.g. https://mainnet.infura.io/v3/yourinfuraprojectid

await DeFiService.borrowDAIFromCompound(amountOfDAIToBeBorrowed, walletPrivateKey, gasLimit, web3ProviderURL)

```

#### Redeem Asset from Compound 
You can also test this feature via the [compound.finance](https://compound.finance) user interface.
```ts

require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")
    
const walletAddress = process.env.SENDER_WALLET_ADDRESS
const walletPrivateKey = process.env.SENDER_WALLET_PRIVATE_KEY
const gasLimit = 250000
const web3ProviderURL = process.env.PROVIDER_URL // e.g. https://mainnet.infura.io/v3/yourinfuraprojectid
const amount = 1 // redeem 1 cETH
    
await DeFiService.redeemAssetFromCompound(walletAddress,  walletPrivateKey, gasLimit, web3ProviderURL, amount)

```


#### Get Compound Account Data
You can also test this feature via the [compound.finance](https://compound.finance) user interface.
```ts
const { DeFiService } = require("decentralized-finance-defi")

const walletAddress = '0xA63CD0d627c34Ce3958c4a82E6bB12F7b9C1c324'
const accountInfo = await DeFiService.getCompoundAccountData(walletAddress)

console.log(`The collateral value in ETH is: ${accountInfo.total_collateral_value_in_eth.value}.`)

```

#### Swap DAI to Ether via Uniswap
You can also test this feature via the [uniswap.org](https://uniswap.org) user interface.
```ts
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")

const amountOfDAIToBeSwapped = 50
const walletAddress = process.env.SENDER_WALLET_ADDRESS
const walletPrivateKey = process.env.SENDER_WALLET_PRIVATE_KEY
const web3ProviderURL = process.env.PROVIDER_URL // e.g. https://mainnet.infura.io/v3/yourinfuraprojectid

await DeFiService.swapDAIToETH(amountOfDAIToBeSwapped, walletAddress, walletPrivateKey, web3ProviderURL)

```

#### Get account info from DyDx.exchange
You can also test this feature via the [dydx.exchange](https://dydx.exchange/) user interface.
```ts

require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values
    
const { DeFiService } = require("decentralized-finance-defi")
    
const walletAddress = process.env.SENDER_WALLET_ADDRESS

const result = await DeFiService.getDyDxPerpetualAccountBalances(walletAddress)

console.log(result)

```

#### Explore FeedForward Neural Nets with Backpropagation
```ts

// This one is in experimental mode - check the code to check whether it is fine for you.
const { DeFiService } = require("decentralized-finance-defi")

DeFiService.charterATrader() // observe the console output

```

#### Get Price Data with Timestamp from Coinmarketcap (API Key Required)
You can compare the results via the [coinmarketcap.com](https://coinmarketcap.com) user interface.
```ts
require('dotenv').config() // this ensures process.env. ... contains your .env file configuration values

const { DeFiService } = require("decentralized-finance-defi")

const pricesWithTimeStamp = DeFiService.getPriceDataWithTimeStamp(process.env.COINMARKETCAP_API_KEY)

// There will be ETH :)
console.log(pricesWithTimeStamp[1])

```

#### Get Current Gas Price Info

```ts
const { DeFiService } = require("decentralized-finance-defi")

const gasPriceInfo = await DeFiService.getGasPriceInfo()
console.log(gasPriceInfo.fastest)
```


## Further Features

You can find further examples in the [DeFi Service](https://github.com/orionstardust/mDefi/blob/main/src/defi.service.ts) file. If you are looking for anything more specific, feel free to check the corresponding folders and class definitions within the [src](https://github.com/orionstardust/mDefi/tree/main/src) folder.

## Smart Contract Development
You can find some simple examples for solidity based smart contract development projects within the [smart-contracts-development](https://github.com/orionstardust/mDefi/tree/main/src/smart-contracts-development) folder.

## OpenBits based Open Source Incentive Engineering
With this package we also explore the features of [openbits.world](https://openbits.world).  
If you want to support this adventure, consider installing the package via:
```sh
openbits install decentralized-finance-defi
```
