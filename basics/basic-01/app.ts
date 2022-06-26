// Using Types
function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
