### Dependencies
```shell
npm install
npm install @truffle/hdwallet-provider
npm install @openzeppelin/contracts
```

### Linter
```shell
npm install -g solhint

solhint --init

solhint 'contracts/**/*.sol'
```

### Compile
```shell
truffle compile
```

### Local deploy
```shell
truffle migrate --network development
```

### BSC-Testnet deploy
```shell
truffle migrate --network bsctestnet
```

### Mainnet deploy
```shell
truffle migrate --network bscmainnet
```

### Testnet Contract verify
look for Contract name in build directory
```shell
truffle run verify DgToken --network bsctestnet
```