export const mansepNetwork = {
  id: 5003,
  network: "Mantle Sepolia",
  name: "Mantle Sepolia Testnet",
  nativeCurrency: {
    name: "MNT",
    symbol: "MNT",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.sepolia.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.sepolia.mantle.xyz",
    },
  },
};
