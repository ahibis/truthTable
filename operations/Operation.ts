import Item from "../Item";
export default class Operation implements Item {
  terms: Item[] = [];
  name = "";
  primitives = 0;
  vector: number[] = [];
  static termsCount = 1;
  constructor(...terms: Item[]) {
    this.terms = terms;
    this.primitives = terms.reduce((a, b) => a + b.primitives, 0) + 1;
  }
  vecToString(): string {
    return this.vector.join("");
  }
  vecNum(): number {
    return parseInt(this.vecToString(), 2);
  }
  toString(): string {
    return this.name;
  }
}
