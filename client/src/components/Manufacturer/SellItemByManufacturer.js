import React from "react";
import SellItemForm from "../UseEntity/SellItemForm"

function SellItemByManufacturer({ contract }) {
  const sellItemByManufacturer = async (productCode, price, productQuantity) => {
    await contract.sellItemByManufacturer(productCode, price, productQuantity);
  };

  return <SellItemForm title="Sell Item by Manufacturer" sellItemFunction={sellItemByManufacturer} />;
}

export default SellItemByManufacturer;
