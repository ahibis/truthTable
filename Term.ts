import Item from "./Item"
export default class Term implements Item{
  vector:number[] = [];
  name = "";
  primitives = 0;
  
  constructor(number:number, count:number){
    this.name = "x" + number;
    const bunchCount = 2**(count - number - 1);
    this.vector = new Array(2**count)
    .fill(0)
    .map((v,i)=>Math.floor(i/bunchCount)%2);
    
  }
  vecToString(){
    return this.vector.join("");
  }
  toString(){
    return this.name;
  }
}
