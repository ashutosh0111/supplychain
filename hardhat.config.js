require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganachetestnet: {
      url: process.env.PROVIDER_URL,
      account: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};