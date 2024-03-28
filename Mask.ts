import Item from "./Item";
export default class Term implements Item {
  vector = 0;
  name = "";
  primitives = 0;

  constructor(count: number) {
    this.name = 'mask';
    this.vector = 2 ** (2 ** count) - 1
  }
  vecToString() {
    return this.vector.toString(2);
  }
  toString() {
    return this.name;
  }
}