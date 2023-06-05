import React, { useEffect, useState } from "react";

const ManufacturerProducts = ({ contract }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the initial list of products
    fetchProducts();

    // Subscribe to the "ProducedByManufacturer" event
    contract.on("ProducedByManufacturer", handleProducedByManufacturer);

    // Clean up the event listener on component unmount
    return () => {
      contract.off("ProducedByManufacturer", handleProducedByManufacturer);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      // Call the smart contract function to get the list of products added by the manufacturer
      const productCodes = await contract.getManufacturerProductCodes();

      // Fetch the details of each product using the product codes
      const productsData = await Promise.all(
        productCodes.map(async (code) => {
          const product = await contract.getProductByCode(code);
          return product;
        })
      );

      setProducts(productsData);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch products");
    }
  };

  const handleProducedByManufacturer = (productCode) => {
    // Fetch the details of the newly added product using the product code
    contract.getProductByCode(productCode).then((product) => {
      setProducts((prevProducts) => [...prevProducts, product]);
    });
  };

  return (
    <div>
      <h2>Manufacturer Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManufacturerProducts;
