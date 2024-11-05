import Term from "./Term";
import Item from "./Item";
import {Not, And, NAnd, Nor, Or, Eq, Gt, Imp, Xor} from "./operations"

const operators = {
  "~": (a: Item) => new Not(a),
  "-": (a: Item) => new Not(a),
  "!": (a: Item) => new Not(a),
  "+": (a: Item, b: Item) => new Or(a, b),
  "|": (a: Item, b: Item) => new Or(a, b),
  "*": (a: Item, b: Item) => new And(a, b),
  "&": (a: Item, b: Item) => new And(a, b),
  "^": (a: Item, b: Item) => new Xor(a, b),
  "=": (a: Item, b: Item) => new Eq(a, b),
  ">": (a: Item, b: Item) => new Gt(a, b),
  "->": (a: Item, b: Item) => new Imp(a, b),
  "!&": (a: Item, b: Item) => new NAnd(a,b)
};

function operatorsHandler1(regExp: RegExp) {
  return (result: (string | Item )[], term: string | Item) => {

  };
}

function openBrackets(tokens: (string | Item)[]) {
  const res: (string | Item)[] = [];
  const insideTerms: (string | Item)[] = [];
  let enclosure = 0;
  for (let token of tokens) {
    if (token == "(") {
      enclosure += 1;
      continue;
    }

    if (token == ")") {
      enclosure -= 1;
      if (enclosure == 0) {
        res.push(...calculateTokens(insideTerms));
        insideTerms.length = 0;
      }
      continue;
    }

    if (enclosure > 0) {
      insideTerms.push(token);
      continue;
    }
    res.push(token);
  }
  return res;
}

function openNot(v: string | Item, i: number, arr: (string | Item)[]) {}

function calculateTokens(tokens: (string | Item)[]) {
  return openBrackets(tokens);
  //  .map((v, i, arr) => (arr.at(i - 1) == "-" ? -v : v));
}

export default function calculate(expression: string) {
  const termsDict = new Map<string, Term>();
  function openTerm(v: string, count = 0) {
    if (!/\w+\d*/.test(v)) return v;
    if (termsDict.has(v)) return termsDict.get(v) as Term;
    const term = new Term(termsDict.size, count);
    term.name = v;
    termsDict.set(v, term);
    return term;
  }

  const tokens = [
    ...(expression.match(/\w+\d*|\(|\)|\-|\^|\||\&|\~|\=|->/g) || []),
  ];
  const termCount = new Set(tokens.filter((v) => /\w+\d*/.test(v))).size;
  return calculateTokens(tokens.map((v) => openTerm(v, termCount)));
}
