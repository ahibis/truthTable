export default interface Item {
  truthVector: number;
  name: string;
  vecToString(): string;
  toString(): string;
  mask:number;
  ItemCount:number;
}
