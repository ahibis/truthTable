import Item from "../Item";
import Operation from "./Operation"

export default class Not extends Operation{
  calculateVector(){
    const [term] = this.terms;
    return term.vector ^ this.mask
  }
  operationSign = "!"
}
