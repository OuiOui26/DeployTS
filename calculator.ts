var input1 : number;
var input2 : number;
var tempInput : String;
var operator : String;

input1 = -1;
input2 = -1;
operator = "";
function addToText(A : number)
{
    var inputCheck = parseInt((document.getElementById('inputText') as HTMLInputElement).value);
    if(inputCheck == 0)
        (document.getElementById('inputText') as HTMLInputElement).value = A.toString(); 
    else    
        (document.getElementById('inputText') as HTMLInputElement).value += A.toString(); 
}

function operatorInput (A : String)
{
    input1 = parseInt((document.getElementById('inputText') as HTMLInputElement).value);
    operator = A;
    (document.getElementById('inputText') as HTMLInputElement).value = "0";
}
function Equals()
{
   let result : Number;
   let resultString : String;
   input2 = parseInt((document.getElementById('inputText') as HTMLInputElement).value);
    if(operator == "+")
       result = input1 + input2;
    else if(operator == "-")
        result = input1 - input2;
    else if(operator == "*")
        result = input1 * input2;
    else if(operator == "/")
        result = input1 / input2;
    else if(operator == "%")
        result = input1 % input2;

        resultString = input1.toString() + " " + operator + " " + input2.toString() +" " +"="+ result.toString() + "\n"; 
        document.getElementById('historyText').innerText += resultString;
        input1 = -1;
        input2 = -1;
        operator = "";
        (document.getElementById('inputText') as HTMLInputElement).value = "0";


}