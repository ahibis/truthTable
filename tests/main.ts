import { Equation, TableTruth, Operations, Term } from "../src/index";
const { And, Eq, Gt, Imp, NAnd, Nor, Not, Or, Xor } = Operations;
import { writeFile } from "fs/promises";

const x0 = new Term(0, 3);
const x1 = new Term(1, 3);

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

// console.log(calculate("(x & y) ^ (y | x)"))

const termsCount = 2;
const text = new TableTruth(2, [Not, And, Or, Xor, Eq]).toString();
// console.log(text)
writeFile("results/table2.txt", text);
