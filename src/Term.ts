import Item from "./Item";
export default class Term implements Item {
  truthVector = 0;
  name = "";
  ItemCount = 0;
  mask = 0;
  constructor(number: number, count: number) {
    this.name = "x" + number;
    this.mask = 2 ** (2 ** count) - 1;
    const bunchCount = 2 ** (count - number - 1);
    const length = 2 ** count;
    let vector = 0
    for (let i = 0; i < length; i++) {
      const isOne = Math.floor(i / bunchCount) % 2;
      vector += isOne * 2 ** (length - i - 1);
    }
    this.truthVector = vector;
  }
  vecToString() {
    return this.truthVector.toString(2);
  }
  toString() {
    return this.name;
  }
}
