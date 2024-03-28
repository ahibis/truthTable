export default interface Item {
  vector: number[];
  name: string;
  vecToString(): string;
  toString(): string;
  primitives:number;
}
