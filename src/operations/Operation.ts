import Item from "../Item";
export default class Operation implements Item {
  protected terms: Item[] = [];
  protected operationSign = "";
  get name() {
    const [term0, term1] = this.terms;
    if (term1 === undefined) {
      return term0.primitives > 0
        ? `${this.operationSign}(${term0.name})`
        : `${this.operationSign}${term0.name}`;
    }
    const term0Name = term0.primitives > 0 ? `(${term0.name})` : term0.name;
    const term1Name = term1.primitives > 0 ? `(${term1.name})` : term1.name;
    return `${term0Name} ${this.operationSign} ${term1Name}`;
  }
  primitives = 0;
  vector = 0;
  calculateVector(terms0: Item, terms1: Item){
    return 0
  }
  mask = 0;
  static termsCount = 1;

  constructor(...terms: Item[]) {
    this.terms = terms;
    this.mask = terms[0].mask;
    this.primitives = terms.reduce((a, b) => a + b.primitives, 0) + 1;
    this.vector = this.calculateVector(terms[0], terms[1]);
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
  invertVector(vector: number) {
    return vector ^ this.mask;
  }
}
