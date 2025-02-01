import { incoNetwork } from "./chains";

export const privyConfig = {
  appId: "cm6m0pvh200ljic16kbrb82t1",
  config: {
    logo: "https://your.logo.url",
    appearance: { theme: "dark" },
    loginMethods: ["twitter"],
    appearance: {
      walletList: ["metamask", "detected_wallets", "rainbow"],
      theme: "dark",
    },
    defaultChain: incoNetwork,
    supportedChains: [incoNetwork],
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
    },
  },
};
