import React from "react";
import { ethers } from "ethers";
import AddManufacturer from "./addManufacturer";
import AddDistributor from "./addDistributor";
import AddRetailer from "./addRetailer";
import AddConsumer from "./addConsumer";
import AddOnSupplychain from "./AddOnSupplychain";
import "../../App.css";
function Ownerpage({ contract }) {
  
  return (
    <div>
      <h1>Owner Page</h1>
      <AddManufacturer contract={contract} />
      <AddDistributor contract={contract} />
      <AddRetailer contract={contract} />
      <AddConsumer contract={contract} />
      <table> 
                <tr> 
                    <th>Role No</th>
                    <th> Role</th>
                </tr>
                <tr>
                    <td>1 </td>
                    <td> Manufacturer</td>

                </tr>
                <tr><td>2</td>
                <td>Distributor</td></tr>
                <tr> 
                    <td>3</td>
                <td>Retailer</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Consumer</td>
                </tr>
            </table>
      <AddOnSupplychain contract={contract}/>
    </div>
  );
}

export default Ownerpage;
