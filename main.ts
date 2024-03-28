import Term from "./Term";
import Not from "./operations/Not";
import And from "./operations/And";
import Or from "./operations/Or";
import Xor from "./operations/Xor";
import Imp from "./operations/Imp";
import Eq from "./operations/Eq";
import Nor from "./operations/Nor";
import Nand from "./operations/Nand";
import TableTruth from "./TableTruth";
import calculate from "./equation";

const x0 = new Term(0,3);
const x1 = new Term(1,3);


// const nx0 = new Not(x0);
// const ax01 = new And(x0, x1);
// const ox01 = new Or(x0, x1);
// const xx01 = new Xor(x0, x1);
// const ix01 = new Imp(x0, x1);
// const eq01 = new Eq(x0, x1);
// const nx01 = new Nor(x0, x1);
// const nax01 = new Nand(x0, x1);

// console.log(x0.vecToString(), x1.vecToString());
// console.log(nx0.vecToString(), ax01.vecToString(), ox01.vecToString(),
//  xx01.vecToString(), ix01.vecToString(), eq01.vecToString(),
//  nx01.vecToString(), nax01.vecToString());

// console.log(x012.vecNum(), x013.vecNum(), x023.vecNum(), x123.vecNum());

// console.log(new TableTruth(3, [Not, And, Or, Xor, Imp, Eq, Nor, Nand]).toString());

console.log(calculate("(x & y) ^ (y | x)"))
