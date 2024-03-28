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

// const x0 = new Term(0,4);
// const x1 = new Term(1,4);
// const x2 = new Term(2,4);
// const x3 = new Term(3,4);

// const x01 = new And(x0, x1);
// const x012 = new And(x01, x2);
// const x013 = new And(x01, x3);
// const x02 = new And(x0, x2);
// const x023 = new And(x02, x3);
// const x12 = new And(x1, x2);
// const x123 = new And(x12, x3);

const x0 = new Term(0,3);
const x1 = new Term(1,3);
const x2 = new Term(2,3);

const nx0 = new Not(x0);
const nx1 = new Not(x1);
const nx2 = new Not(x2);

const x1nx2 = new Or(x1, nx2);
const x2nx1 = new Or(x2, nx1);
const x0nx1 = new Or(x0, nx1);
const x1nx0 = new Or(x1, nx0);
const x2nx0 = new Or(x2, nx0);
const x0nx2 = new Or(x0, nx2);

const a1 = new And(x0, x1nx2);
const a2 = new And(x0, x2nx1);
const a3 = new And(x1, x0nx2);
const a4 = new And(x1, x2nx0);
const a5 = new And(x2, x0nx1);
const a6 = new And(x2, x1nx0);

console.log(a1.vecNum(), a2.vecNum(), a3.vecNum(), a4.vecNum(), a5.vecNum(), a6.vecNum());


// console.log(x012.vecNum(), x013.vecNum(), x023.vecNum(), x123.vecNum());

console.log(new TableTruth(3, [And, Not, Imp, Or]).toString());

