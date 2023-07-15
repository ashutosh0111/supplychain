import React, { useState, useEffect } from "react";

const rolesList = ["Manufacturer", "Distributor", "Retailer", "Consumer"];
const AddOnSupplychain = ({ contract }) => {
  const [addOnSupplychainData, setAddOnSupplychainData] = useState([]);

  useEffect(() => {
    const fetchAddOnSupplychainData = async () => {
      try {
        const result = await contract.getAddOnSupplychain();
        const data = result.map((item) => ({
          myAddress: item.myAddress,
          myRole: item.myRole,
        }));
        setAddOnSupplychainData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      fetchAddOnSupplychainData();
    }
  }, [contract]);

  return (
    <div className="form">
      <div className="form-heading">Add-On Supplychain Data</div>
      <div className="breakline"></div>
      {addOnSupplychainData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {addOnSupplychainData.map((item, index) => (
              <tr key={index}>
                <td>{item.myAddress}</td>
                <td>{rolesList[(item.myRole)]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default AddOnSupplychain;
