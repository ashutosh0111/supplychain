import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import PurchaseItemByRetailer from "./PurchaseItemByRetailer"
import ReceivedItemByRetailer from "./ReceivedItemByRetailer";
import SellItemByRetailer from "./SellItemByRetailer";
import ShippedItemByRetailer from "./ShippedItemByRetailer";

import PurchasedItemList from "../UseEntity/PurchasedItemList";
import ShippedItemList from "../UseEntity/ShippedItemList";
import ReceivedItemList from "../UseEntity/ReceivedItemList";

import ItemOnSaleList from "../UseEntity/ItemOnSaleList";
import LoginPage from "../UseEntity/LoginPage";
function Retailerpage({ contract }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage contract={contract} setLoggedIn={setLoggedIn}  contractFunction= "isRetailer"
    alertMessage= "Invalid account address or not a Retailer" />;
  }
    return (
      <div>
        <ReceivedItemByRetailer contract={contract}/>
        <SellItemByRetailer contract={contract}/>
        <PurchaseItemByRetailer contract={contract} />
        <ShippedItemByRetailer contract={contract}/>
        {/* <p> Messages for transaction between  Distributor  and Retailers </p> */}
          <ItemOnSaleList 
        contract={contract} 
        contractFunction="getItemOnSaleByDistributor"
        title ="Item On Sale By Distributors"
        />
        <PurchasedItemList
            contract={contract}
            contractFunction="getItemPurchasedByRetailer"
            title="Items Purchased By Retailers "
            
          />
          
          <ShippedItemList 
          contract = {contract}
          contractFunction ="getItemShippedByDistributor"
          title ="Items Shipped By Distributor"
          />
          <ReceivedItemList 
          contract={contract}
          contractFunction="getItemReceivedByRetailer"
          title="Items Received By Retailers"
          
          />

{/* <p> Messages for transaction between  Retailers and Consumers  </p> */}
          <ItemOnSaleList 
        contract={contract} 
        contractFunction="getItemOnSaleByRetailer"
        title ="Item On Sale By Retailers"
        />
        <PurchasedItemList
            contract={contract}
            contractFunction="getItemPurchasedByConsumer"
            title="Items Purchased By Consumer"
            
          />
          
          <ShippedItemList 
          contract = {contract}
          contractFunction ="getItemShippedByRetailer"
          title ="Items Shipped By Retailer"
          />
          <ReceivedItemList 
          contract={contract}
          contractFunction="getItemReceivedByConsumer"
          title="Items Received By Consumers"
          
          />
        


        
        
      </div>
    );
  }
  
  export default Retailerpage;