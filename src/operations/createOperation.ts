import Operation from "./Operation";
import Item from "../Item";
export default function createOperation(
  operationSign: string,
  termsCount: number,
  calculateVector: (term0: Item, term1: Item) => number
) {
  const OperationClass = class extends Operation {
    operationSign = operationSign;
    static termsCount = 2;
  };
  OperationClass.prototype.calculateVector = calculateVector;
  return OperationClass;
}
