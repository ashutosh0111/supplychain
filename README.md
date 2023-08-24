# Medichain - Decentralized Medicine Supply Chain Management

Medichain is a decentralized web application built using ReactJS, Hardhat, EtherJS, and Solidity. The primary goal of Medichain is to revolutionize medicine supply chain management by leveraging the power of blockchain technology, specifically the Ethereum blockchain. This allows for secure, transparent, and tamper-proof tracking of medicines throughout the supply chain.

## Features

- **Decentralized Transactions:** Medichain enables users to make transactions related to medicine supply chains in a completely decentralized manner using Ethereum's smart contracts.

- **Medicine Tracking:** The application provides a reliable way to track the movement of medicines through the supply chain, ensuring transparency and authenticity of the data.

- **Secure and Transparent:** By utilizing blockchain technology, Medichain ensures that all transactions and data related to the medicine supply chain are secure, transparent, and immutable.

## Technologies Used

- **ReactJS:** The frontend of Medichain is built using ReactJS, allowing for a dynamic and user-friendly interface.

- **Hardhat:** Hardhat is used as the development environment for building and testing smart contracts.

- **EtherJS:** EtherJS is employed to interact with the Ethereum blockchain from the frontend, enabling seamless integration between the user interface and the blockchain.

- **Solidity:** Solidity is the programming language used to write the smart contracts governing the medicine supply chain logic.

- **Ganache:** Ganache is used for deploying the smart contracts locally during development and testing.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ashutosh0111/supplychain.git
```

2. Navigate to the project directory:

```bash
cd supplychain
```

3. Install the dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm start
```

5. Access the application by opening your browser and navigating to `http://localhost:3000`.

## Usage

1. Connect your Ethereum wallet (e.g., MetaMask) to the application.

2. Explore the available features for making transactions and tracking medicines on the supply chain.

## Smart Contracts

The smart contracts governing the Medichain application can be found in the `contracts/` directory. You can use Hardhat to compile and deploy these contracts to the Ethereum blockchain.

To compile the contracts:

```bash
npx hardhat compile
```

To deploy the contracts using Ganache:

```bash
npx hardhat run scripts/deploy.js --network ganache
```

## Contributing

Contributions to Medichain are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/ashutosh0111/supplychain).

## License

This project is licensed under the [MIT License](LICENSE).

---

For more information, visit the [Medichain GitHub repository](https://github.com/ashutosh0111/supplychain). Feel free to reach out to the project maintainers for any questions or inquiries.

**Disclaimer:** Medichain is a project created for educational and demonstrative purposes. It is not intended for use in production environments without proper security auditing and testing.

---
