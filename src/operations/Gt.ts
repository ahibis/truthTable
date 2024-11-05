import Item from "../Item";
import Operation from "./Operation"

export default class Gt extends Operation{
  static termsCount = 2;
  calculateVector(){
    const [term0,term1] = this.terms;
    return term0.vector & this.invertVector(term1.vector)
  }
  operationSign = ">"
}