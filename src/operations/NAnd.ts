import Item from "../Item";
import Operation from "./Operation";

export default class NAnd extends Operation {
  static termsCount = 2;
  calculateVector(){
    const [term0,term1] = this.terms;
    return this.invertTruthVector(term0.truthVector & term1.truthVector)
  }
  operationSign = "~&"
}
