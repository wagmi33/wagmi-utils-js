require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const {extendEnvironment} = require("hardhat/config");
require("dotenv").config();



//USE THIS TO FORK MAINNET FOR TESTING A SCRIPT
const FORK_MAINNET = true;

const forkingData = FORK_MAINNET ? {
  url: process.env.ARBITRUM_RPC,
  enabled: true,
  loggingEnabled: true
} : undefined


//ADD ACCOUNT LIST HERE
const accountList = [process.env.PRIVATE_KEY_ACC_1, process.env.PRIVATE_KEY_ACC_2, process.env.PRIVATE_KEY_ACC_3, process.env.PRIVATE_KEY_ACC_4, process.env.PRIVATE_KEY_ACC_5];

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.8.18"},
    ],
  },
  networks: {
    hardhat: {
      forking: forkingData,
      chainId: 42161,
      loggingEnabled: false
    },
    arbitrumOne: {
      url: process.env.ARBITRUM_RPC,
      chainId: 42161,
      loggingEnabled: true,
      accounts: accountList
    }
  }
};

extendEnvironment((hre) => {

  const helpers = require("./Helpers.js");
  hre.Helpers = helpers;

})