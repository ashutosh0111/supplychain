import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import PurchaseItemByConsumer from "./PurchaseItemByConsumer"
import ReceivedItemByConsumer from "./ReceivedItemByConsumer";

import PurchasedItemList from "../UseEntity/PurchasedItemList";
import ShippedItemList from "../UseEntity/ShippedItemList";
import ReceivedItemList from "../UseEntity/ReceivedItemList";

import ItemOnSaleList from "../UseEntity/ItemOnSaleList";
import LoginPage from "../UseEntity/LoginPage";

function Consumerpage({ contract }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage contract={contract} setLoggedIn={setLoggedIn}  contractFunction= "isConsumer"
    alertMessage= "Invalid account address or not a Consumer" />;
  }
    return (
      
      <div>
        <ReceivedItemByConsumer contract={contract}/>
    
        <PurchaseItemByConsumer contract={contract} />
        
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
        

        {/* <SellItemByManufacturer contract={contract}/> */}

        
      </div>
    );
  }
  
  export default Consumerpage;