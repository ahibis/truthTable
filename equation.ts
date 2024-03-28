import Term from "./Term"
// function openOperators(result, term) {
//   if (!isNaN(term) && result.at(-1) instanceof Function) {
//     const functionLast = result.pop();
//     result.push(functionLast(term));
//     return result;
//   }
//   result.push(term);
//   return result;
// }

// function operatorsHandler(regExp, operators) {
//   return (result, term) => {
//     if (regExp.test(term) && !isNaN(result.at(-1))) {
//       const numberLast = result.pop();
//       result.push((number) => operators[term](numberLast, number));
//       return result;
//     }
//     return openOperators(result, term);
//   };
// }

// const operators = {
//   "*": (a, b) => a * b,
//   "/": (a, b) => a / b,
//   "^": (a, b) => a ** b,
//   "**": (a, b) => a ** b,
// };


// function openBrackets(result, term) {
  
// }


export default function calculate(expression: string) {

  const termsDict = new Map<string, Term>();
  function openTerm(v:string, count = 0){
    if(!/\w+\d*/.test(v)) return v;
    if(termsDict.has(v)) return termsDict.get(v);
    const term = new Term(termsDict.size, count);
    term.name = v;
    termsDict.set(v, term);
    return term
  }

  const tokens = [...(expression.match(/\w+\d*|\(|\)|\-|\^|\||\&|\~|\=|->/g)||[])]
  const termCount = new Set(tokens.filter(v=>/\w+\d*/.test(v))).size
  return tokens
    .map(v=>openTerm(v, termCount))

    // .map(([v]) => (isNaN(v) ? v : +v))
    // .map((v, i, arr) => (arr.at(i + 1) == "!" ? factorial(v) : v))
    // .filter((v) => v != "!")
    // .reduce(operatorsHandler(/\^\^/, operators), [])
    // .reduce(operatorsHandler(/\^|\*\*/, operators), [])
    // .map((v, i, arr) => (arr.at(i - 1) == "-" ? -v : v))
    // .filter((v) => v != "-")
    // .reduce(openOperators, [])
    // .reduce(operatorsHandler(/\/|\*/, operators), [])
    // .reduce((result, term) => result + term);
}
//console.log(calculate("0.5!"));
// console.log(calculate("3 * 3 ** -2"));

//console.log(calculate("sin(pi/2)"));
