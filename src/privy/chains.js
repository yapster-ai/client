export const mantleNetwork = {
  id: 5000,
  network: "Mantle",
  name: "Mantle Network",
  nativeCurrency: {
    name: "MNT",
    symbol: "MNT",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://mantlescan.xyz",
    },
  },
};
