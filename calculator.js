var input1;
var input2;
var tempInput;
var operator;
input1 = -1;
input2 = -1;
operator = "";
function addToText(A) {
    var inputCheck = parseInt(document.getElementById('inputText').value);
    if (inputCheck == 0)
        document.getElementById('inputText').value = A.toString();
    else
        document.getElementById('inputText').value += A.toString();
}
function operatorInput(A) {
    input1 = parseInt(document.getElementById('inputText').value);
    operator = A;
    document.getElementById('inputText').value = "0";
}
function Equals() {
    var result;
    var resultString;
    input2 = parseInt(document.getElementById('inputText').value);
    if (operator == "+")
        result = input1 + input2;
    else if (operator == "-")
        result = input1 - input2;
    else if (operator == "*")
        result = input1 * input2;
    else if (operator == "/")
        result = input1 / input2;
    else if (operator == "%")
        result = input1 % input2;
    resultString = input1.toString() + " " + operator + " " + input2.toString() + " " + "=" + result.toString() + "\n";
    document.getElementById('historyText').innerText += resultString;
    input1 = -1;
    input2 = -1;
    operator = "";
    document.getElementById('inputText').value = "0";
}
