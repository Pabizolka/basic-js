const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    let valueToAdd = typeof value === "undefined" ? "( )" : `( ${value} )`;
    this.currentChain.push(valueToAdd);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 0 ||
      position >= this.currentChain.length
    ) {
      this.currentChain = [];
      throw new Error();
    }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = this.currentChain.join("~~");
    this.currentChain = [];
    return resultChain;
  },
};

module.exports = chainMaker;
