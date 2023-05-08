/*require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "YOUR RPC URL";
const NEXT_PUBLIC_PRIVATE_KEY = "PRIVATE KEY";
/** @type import('hardhat/config').HardhatUserConfig 

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};*/


require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  //networks: {
  //  hardhat: {},
  //  polygon_mumbai: {
  //    url: "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K",
  //    accounts: [
  //      `0x${"6ae0ba41db2094a19fa7d90bffd40897a43e6a56b50bfaa7c3a87323372ce0c1"}`,
  //    ],
  //  },
  //},
};

