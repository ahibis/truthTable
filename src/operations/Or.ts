import Item from "../Item";
import Operation from "./Operation"

export default class Or extends Operation{
  static termsCount = 2;
  calculateVector(){
    const [term0,term1] = this.terms;
    return term0.vector | term1.vector
  }
  operationSign = "|"
}