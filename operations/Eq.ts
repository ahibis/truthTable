import Item from "../Item";
import Operation from "./Operation"

export default class Eq extends Operation{
  static termsCount = 2;
  constructor(...terms:Item[]){
    super(...terms);
    const [term0,term1] = terms;
    this.vector = term0.vector ^ term1.vector ^ this.mask;
    const term0Name = term0.primitives > 0 ? `(${term0.name})` : term0.name;
    const term1Name = term1.primitives > 0 ? `(${term1.name})` : term1.name;
    this.name = `${term0Name} = ${term1Name}`;
  }
}