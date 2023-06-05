import React from "react";
import SellItemForm from "../UseEntity/SellItemForm"

function SellItemByDistributor({ contract }) {
  const sellItemByDistributor = async (productCode, price, productQuantity) => {
    await contract.sellItemByDistributor(productCode, price, productQuantity);
  };

  return <SellItemForm title="Sell Item by Distributor" sellItemFunction={sellItemByDistributor} />;
}

export default SellItemByDistributor;
