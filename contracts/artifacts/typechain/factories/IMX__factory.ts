/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMX, IMXInterface } from "../IMX";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantizedAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "depositNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
    ],
    name: "getEthKey",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "mintingBlob",
        type: "bytes",
      },
    ],
    name: "withdrawAndMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "withdrawNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawNftTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMX__factory {
  static readonly abi = _abi;
  static createInterface(): IMXInterface {
    return new utils.Interface(_abi) as IMXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMX {
    return new Contract(address, _abi, signerOrProvider) as IMX;
  }
}
