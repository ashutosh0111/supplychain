import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import AddManufacturer from "./addManufacturer";
import AddDistributor from "./addDistributor";
import AddRetailer from "./addRetailer";
import AddConsumer from "./addConsumer";
import AddOnSupplychain from "./AddOnSupplychain";
import AddRole from "./AddRole";
import OwnerLoginPage from "./OwnerLoginPage";
// import Renounce from "./Renounce";
// import "../../App.css";
function Ownerpage({ contract }) {
  
  const rolesList = ["Manufacturer", "Distributor", "Retailer", "Consumer"];
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <OwnerLoginPage contract={contract} setLoggedIn={setLoggedIn} />;
  }
  return (
    
    <div>
      {/* {rolesList.map((role, idx) => {
        return (
          <AddRole key={idx} contract={contract} roleName={role} />
        )
      })} */}
      <AddManufacturer contract={contract} />
      <AddDistributor contract={contract} />
      <AddRetailer contract={contract} />
      <AddConsumer contract={contract} />
      <AddOnSupplychain contract={contract}/>
      
      
        {/* <div>
          <Renounce contract={contract} contractFunction="RenounceManufacturer" title="Remove manufacturer"/>
          <Renounce contract={contract} contractFunction="RenounceDistributor" title="Remove distributorr"/>
          <Renounce contract={contract} contractFunction="RenounceRetailer" title="Remove Retailer"/>
          <Renounce contract={contract} contractFunction="Renounceconsumer" title="Remove consumer"/>
        </div> */}
    </div>
  );
}

export default Ownerpage;
