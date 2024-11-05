import Item from "../Item";
import Operation from "./Operation";

export default class Nor extends Operation {
  static termsCount = 2;
  calculateVector(){
    const [term0,term1] = this.terms;
    return this.invertVector(term0.vector | term1.vector)
  }
  operationSign = "~|"
  
}
