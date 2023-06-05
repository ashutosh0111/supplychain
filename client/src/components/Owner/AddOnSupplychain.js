import React, { useState, useEffect } from "react";

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
    <div>
      <h2>Add-On Supplychain Data</h2>
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
                <td>{item.myRole}</td>
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
