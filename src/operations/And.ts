import Item from "../Item";
import Operation from "./Operation";

export default class And extends Operation {
  static termsCount = 2;
  calculateVector(term0: Item, term1: Item) {
    return term0.truthVector & term1.truthVector;
  }
  operationSign = "&";
}
