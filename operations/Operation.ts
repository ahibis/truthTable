import Item from "../Item";
export default class Operation implements Item {
  terms: Item[] = [];
  name = "";
  primitives = 0;
  vector = 0;
  mask = 0;
  static termsCount = 1;
  constructor(...terms: Item[]) {
    this.terms = terms;
    this.mask = terms[0].mask;
    this.primitives = terms.reduce((a, b) => a + b.primitives, 0) + 1;
  }
  vecToString(): string {
    return this.vector.toString(2);
  }
  vecNum(): number {
    return this.vector;
  }
  toString(): string {
    return this.name;
  }
  invertVector(vector: number){
    return vector ^ this.mask;
  }
}
