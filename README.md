# Hello Truffle

https://trufflesuite.com/docs/truffle/quickstart/

## Hello

```
mkdir Hello
cd Hello
truffle init
truffle create contract HelloContract
truffle create test HelloContract
```

## Truffle 支持的各种链工具

* Truffle Test 自己起了一个ganache instance。（truffle test will spin up and tear down a local test instance (ganache)）
* Truffle Develop， 自己起了一个ganache instance。（Truffle has a built-in personal blockchain that can be used for testing. This blockchain is local to your system and does not interact with the main Ethereum network. You can create this blockchain and interact with it using Truffle Develop. While Truffle Develop is an all-in-one personal blockchain and console, it spins up a very basic instance of ganache.）
* Truffle Console, 可连接 安装的GanacheApp
* Ganache Dashboard可通过Metamask连接各种外部blockchain