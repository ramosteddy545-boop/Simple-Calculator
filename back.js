function ac(){
    document.getElementById("sagot").value = " ";
};

function calculate(){
    const magic = document.getElementById("sagot");

    const expression = magic.value;

    const safeExpression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    document.getElementById("sagot").value = eval(safeExpression);
};

function del(){
    const magic = document.getElementById("sagot");

    const expression = magic.value;

    const safeExpression = expression.slice(0, -1)
    document.getElementById("sagot").value = safeExpression;
};

function add(addition){
    const magic = document.getElementById("sagot");
    let expression = magic.value;

    if(addition == "-" || addition == "÷" || addition == "x" || addition == "+"){
        const lastChar = expression[expression.length - 1];
        if(lastChar == "-" || lastChar == "÷" || lastChar == "x" || lastChar == "+"){
        expression = expression.slice(0, -1);
        }
    }
    document.getElementById("sagot").value = expression + addition;
}