# Instructions

* Clone this repository
* Install NodeJS and npm
  * Linux: `apt install nodejs npm`
  * Windows: https://nodejs.org/en and https://www.npmjs.com/
* Navigate to this directory and run `npm install`
* Copy .env.example, rename to .env and add your private keys and RPC link
* Configure the `acctlist` in `hardhat.config.js` to point to the private keys entered in .env
* Launch script with `npm run arbiAirdropClaimArbitrum`
* Two ways to launch scripts:
  * `npm run <scriptname>` if the particular script is already configured in package.json
  * `npx run hardhat <./scripts/<scriptname.js> --network <networkName>` to run directly with hardhat


# Project setup instructions
```shell
npm init -y
npm install --save-dev hardhat
npm install --save-dev ethereum-waffle chai
npm install --save-dev @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers dotenv @openzeppelin/contracts @nomiclabs/hardhat-waffle @nomicfoundation/hardhat-network-helpers @nomiclabs/hardhat-etherscan
npx hardhat
```


