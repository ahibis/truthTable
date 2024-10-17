import Item from "./Item";
import Operation from "./operations/Operation";
import Term from "./Term";

export default class TableTruth {
  itemsByPrimitives: Item[][] = [];
  foundTerms = new Map<number, Item>();
  termCount = 0;
  addItem(item: Item) {
    if (this.foundTerms.has(item.vector)) {
      return;
    }

    this.foundTerms.set(item.vector, item);
    const primitives = item.primitives;

    this.itemsByPrimitives[primitives].push(item);
  }
  constructor(termCount: number, Operations: (typeof Operation)[]) {
    this.itemsByPrimitives[0] = [];
    this.termCount = termCount;
    for (let i = 0; i < termCount; i++) {
      this.addItem(new Term(i, termCount));
    }
    const maxSize = 2 ** (2 ** termCount);
    let i = 0;

    while (this.foundTerms.size < maxSize) {
      this.itemsByPrimitives[i + 1] = [];

      for (let Operation of Operations) {
        if (Operation.termsCount == 1) {
          for (let item of this.itemsByPrimitives[i]) {
            this.addItem(new Operation(item));
          }
        }

        if (Operation.termsCount == 2) {
          for (let k = 0; k <= Math.floor(i / 2); k++) {
            const items0 = this.itemsByPrimitives[k];
            const items1 = this.itemsByPrimitives[i - k];
            for (let item0 of items0) {
              for (let item1 of items1) {
                this.addItem(new Operation(item0, item1));
              }
            }
          }
        }
      }
      console.log(`${i + 1} итерация`);
      if(i==5) break;
      i += 1;
    }
  }
  toString() {
    const vecSize = 2 ** this.termCount;
    const res = [...this.foundTerms.entries()]
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(([k, v]) => `${k.toString(2).padStart(vecSize, "0")} : ${v.toString()} - ${v.primitives}`)
      .join("\n");

    return res;
  }
  toPrimitives() {
    return [...this.foundTerms.entries()]
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .map(([k, v]) => v.primitives);
  }
}
