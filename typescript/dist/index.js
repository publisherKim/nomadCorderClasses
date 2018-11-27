"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.caculateBlockHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data), toString();
};
const genisisBlock = new Block(0, "202020202020", "", "Hello", 123456);
let blockchain = [genisisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
console.log("1: ", getBlockchain());
console.log("2: ", getLatestBlock());
console.log("3: ", getNewTimeStamp());
console.log("4: ", getBlockchain());
//# sourceMappingURL=index.js.map