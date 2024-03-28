import Item from "../Item";
import Operation from "./Operation"

export default class Not extends Operation{
  constructor(...terms:Item[]){
    super(...terms);
    const term0 = terms[0];
    this.vector = term0.vector.map((v)=>Number(!v));
    // console.log(this.vector)
    this.name = term0.primitives > 0 ? `~(${term0.name})` : `~${term0.name}`;
  }
}
