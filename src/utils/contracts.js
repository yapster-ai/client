export const AI_CONTRACT_ADDRESS = "0xC25761bb16F45Fe7ea6df488D2A4CFc71A52b2B0";

export const AI_CONTRACT_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_aiOracleAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "aiOracle",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract IAIOracle" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "aiOracleCallback",
    inputs: [
      { name: "requestId", type: "uint256", internalType: "uint256" },
      { name: "output", type: "bytes", internalType: "bytes" },
      { name: "callbackData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "calculateYaps",
    inputs: [
      { name: "modelId", type: "uint256", internalType: "uint256" },
      { name: "input", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "erc7007",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract ERC7007" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isFinalized",
    inputs: [{ name: "requestId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "requestPending",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "requestPrompt",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AIGCDataRequested",
    inputs: [
      {
        name: "requestId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "modelId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "sender",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AIGCDataUpdated",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "aigcData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "proof",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "proofType",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "UnauthorizedCallbackSource",
    inputs: [
      {
        name: "expected",
        type: "address",
        internalType: "contract IAIOracle",
      },
      {
        name: "found",
        type: "address",
        internalType: "contract IAIOracle",
      },
    ],
  },
];
