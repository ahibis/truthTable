import Item from "./Item";
export default class Term implements Item {
  vector = 0;
  name = "";
  primitives = 0;

  constructor(number: number, count: number) {
    this.name = "x" + number;
    const bunchCount = 2 ** (count - number - 1);
    const length = 2 ** count;
    let vector = 0
    for (let i = 0; i < length; i++) {
      const isOne = Math.floor(i / bunchCount) % 2;
      vector += isOne * 2 ** (length - i - 1);
    }
    this.vector = vector;
  }
  vecToString() {
    return this.vector.toString(2);
  }
  toString() {
    return this.name;
  }
}
