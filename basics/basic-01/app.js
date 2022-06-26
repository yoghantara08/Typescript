// Using Types
function add(n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 10;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
