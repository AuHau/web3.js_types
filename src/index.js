"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_eth_1 = __importDefault(require("web3-eth"));
var provider = web3_eth_1.default.givenProvider || 'ws://localhost:8545';
var eth = new web3_eth_1.default(provider);
