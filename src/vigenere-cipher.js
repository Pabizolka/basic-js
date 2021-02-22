const CustomError = require("../extensions/custom-error");
const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultMessageArr = [];
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (!ALPHABET.includes(message[i])) {
        resultMessageArr.push(message[i]);
        continue;
      }
      resultMessageArr.push(
        ALPHABET[
          (ALPHABET.indexOf(message[i]) + ALPHABET.indexOf(key[count])) % 26
        ]
      );
      count = count < key.length - 1 ? count + 1 : 0;
    }
    return this.isDirect
      ? resultMessageArr.join("")
      : resultMessageArr.reverse().join("");
  }

  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultMessageArr = [];
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (!ALPHABET.includes(message[i])) {
        resultMessageArr.push(message[i]);
        continue;
      }
      resultMessageArr.push(
        ALPHABET[
          (ALPHABET.indexOf(message[i]) + 26 - ALPHABET.indexOf(key[count])) %
            26
        ]
      );
      count = count < key.length - 1 ? count + 1 : 0;
    }
    return this.isDirect
      ? resultMessageArr.join("")
      : resultMessageArr.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
