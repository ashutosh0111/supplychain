const hre = require("hardhat");

async function main() {

  const Supplychain = await hre.ethers.getContractFactory("Supplychain");
  const supplychain = await Supplychain.deploy();
  await supplychain.deployed();
  console.log( ` deployed to ${supplychain.address}` );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});