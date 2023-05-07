# Final Project(Team: CryptoZombies): NFT Marketplace 
Advanced Blockchain Technology(CPSC 559) - Under Professor Wenlin Han at California State University-Fullerton

# Project Description:
The NFT application is a marketplace-like platform that allows users to purchase and transfer NFTs, which are unique digital assets stored on a blockchain. To facilitate this, the app uses HardHat, a development environment for Ethereum projects, to compile and deploy smart contracts, which are self-executing programs that run on the blockchain.

The front-end of the app is built using a React app template that comes with pre-built Ethereum components and hooks. This allows for easy integration with the Ethereum network and access to important features like the ability to read and write data to the blockchain.

The application also allows buyers to mint their own NFTs, giving them the ability to create and sell their own unique digital assets on the platform.


# Project Details:
## The entire code of the project has been developed from scratch.
# Below are the listed features of NFT Marketplace:
1. Creation of new NFT
2. Browsing for NFT across different categories
3. Selling of NFTs
4. Buying of NFTs
5. Connection of different wallet options 
6. Transfering funds across users
7. Subscription module to achieve premium access
8. Creation of different user profiles which allows minting of NFTs
9. Filteration of NFTs based on categories 
10. Auction of NFTs
11. Users can give likes for another user as well
12. Developed an interactive User Interface
13. Deployed the application to Polygon test network
14. 

### Team Members

Debdyuti Das(886676550) - Debdyutidas@csu.fullerton.edu

Meghana Bodapati ThirumalaNaidu(885206029) - meghanabt@csu.fullerton.edu

Pooja Honneshwari Ravi(885237305) - pooja.ravi@csu.fullerton.edu

Shriya Bannikop (885196238) - shriyabannikop@csu.fullerton.edu

### Project URL
- https://github.com/Debdyuti-01/NFT-MarketPlace

# Steps to run the project:
### Clone the repository:
git clone https://github.com/Debdyuti-01/NFT-MarketPlace.git

### Install Hardhat:
npm install --save-dev hardhat

### To run: (Keep this running):
npx hardhat node

### In another terminal to deploy the smart contract to localhost:
npx hardhat run scripts/deploy.js --network localhost

### To launch the application:
npm run dev

### To deploy the smart contract to Polygon network: 
npx hardhat run scripts/deploy.js --network polygon

