import * as CryptoJS from 'crypto-js';

class Block {
  static caculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data), toString();
  };

  static validateStructure = (aBLock: Block): boolean => {
    return (
      typeof aBLock.index === "number" &&
      typeof aBLock.hash === "string" &&
      typeof aBLock.previousHash === "string" &&
      typeof aBLock.data === "string" &&
      typeof aBLock.timestamp === "number"
    );
  };

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genisisBlock:Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genisisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createdNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.caculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string => Block.caculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if(Block.validateStructure(candidateBlock)) {
    console.log(1)
    return false;
  } else if(previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if(previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if(isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
}

// 생성전
console.log("before: ", blockchain);

// Blok 2 create
addBlock(createdNewBlock("hi"))
addBlock(createdNewBlock('bye bye'));

// 생성후 
console.log('after: ', blockchain);
export {};