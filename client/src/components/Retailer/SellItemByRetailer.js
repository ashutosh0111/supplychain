import React from "react";
import SellItemForm from "../UseEntity/SellItemForm"

function SellItemByRetailer({ contract }) {
  const sellItemByRetailer = async (productCode, price, productQuantity) => {
    await contract.sellItemByRetailer(productCode, price, productQuantity);
  };

  return <SellItemForm title="Sell Item by Retailer" sellItemFunction={sellItemByRetailer} />;
}

export default SellItemByRetailer;
