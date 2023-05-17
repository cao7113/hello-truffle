# MetaCoin

## Interact by trunffle console

https://trufflesuite.com/docs/truffle/quickstart/#interact-with-the-contract

```
truffle(development)> let instance = await MetaCoin.deployed()
truffle(development)> let accounts = await web3.eth.getAccounts()
```

## Setup

```
mkdir MetaCoin
cd MetaCoin
truffle unbox metacoin
```