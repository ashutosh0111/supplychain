import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import PurchaseItemByDistributor from "./PurchaseItemByDistributor"
import ReceivedItemByDistributor from "./ReceivedItemByDistributor";
import SellItemByDistributor from "./SellItemByDistributor";
import ShippedItemByDistributor from "./ShippedItemByDistributor";
import PurchasedItemList from "../UseEntity/PurchasedItemList";
import ShippedItemList from "../UseEntity/ShippedItemList";
import ReceivedItemList from "../UseEntity/ReceivedItemList";
import ItemOnSaleList from "../UseEntity/ItemOnSaleList";
import LoginPage from "../UseEntity/LoginPage";

function Distributorpage({ contract }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage contract={contract} setLoggedIn={setLoggedIn}  contractFunction= "isDistributor"
    alertMessage= "Invalid account address or not a Distributor" />;
  }
    return (
      <div>
        <ReceivedItemByDistributor contract={contract}/>
        <SellItemByDistributor contract={contract}/>
        <PurchaseItemByDistributor contract={contract} />
        <ShippedItemByDistributor contract={contract}/>
        {/* <p> Messages Between Manufacturer and Distributors </p> */}
        <ItemOnSaleList 
        contract={contract} 
        contractFunction="getItemOnSaleByManufacturer"
        title ="Item On Sale By Manufacturers"
        />
        
        <PurchasedItemList
            contract={contract}
            contractFunction="getItemPurchasedByDistributor"
            title="Items Purchased By Distributors"
            
          />
          {/* <ShippedItemList 
          contract={contract}
          contractFunction="getItemShippedByManufacturer"
          title="Items Shipped By Manufacturers "
          tableHeaders ={["shippedproduct" , "ShippedBy" , "ShippedTo" , "Timestamp"]}
          /> */}
          <ShippedItemList 
          contract = {contract}
          contractFunction ="getItemShippedByManufacturer"
          title ="Items Shipped By Manufacturers"
          />
          <ReceivedItemList 
          contract={contract}
          contractFunction="getItemReceivedByDistributor"
          title="Items Received By Distributors"
          
          />


          <p> Messages for transaction between  Distributor  and Retailers </p>
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

        


        {/* <SellItemByManufacturer contract={contract}/> */}

        
      </div>
    );
  }
  
  export default Distributorpage;