import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import ProduceItemByManufacturer from "./ProduceItemByManufacturer";
import SellItemByManufacturer from "./SellItemByManufacturer";
import ShippedItemByManufacturer from "./ShippedByManufacturer";
import ProducedItemsList from "./ProducedItemList";
//import ItemOnSaleByManufacturer from "./ItemOnSaleByManufacturer";
import PurchasedItemList from "../UseEntity/PurchasedItemList";
import ShippedItemList from "../UseEntity/ShippedItemList";
import ReceivedItemList from "../UseEntity/ReceivedItemList";
// import ItemShippedByManufacturer from "./ItemShippedByManufacturer";
import ItemOnSaleList from "../UseEntity/ItemOnSaleList";
import LoginPage from "../UseEntity/LoginPage";
function Manufacturerpage({ contract }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage contract={contract} setLoggedIn={setLoggedIn}  contractFunction= "isManufacturer"
    alertMessage= "Invalid account address or not a manufacturer" />;
  }
    return (
      <div>
        <ProduceItemByManufacturer contract={contract} />
        
        {/* <ItemOnSaleByManufacturer contract={contract}/> */}
        <SellItemByManufacturer contract={contract}/>
        <ShippedItemByManufacturer contract={contract}/>

        <br />
        <ProducedItemsList contract={contract}/>
        <br />
        <ItemOnSaleList 
        contract={contract} 
        contractFunction="getItemOnSaleByManufacturer"
        title ="Item On Sale By Manufacturers"
        />
        <br />
        <PurchasedItemList
            contract={contract}
            contractFunction="getItemPurchasedByDistributor"
            title="Items Purchased By Distributors"
            
          />
        <br />
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
        <br />
          <ReceivedItemList 
          contract={contract}
          contractFunction="getItemReceivedByDistributor"
          title="Items Received By Distributors"
          />
      </div>
    );
  }
  
  export default Manufacturerpage;
  