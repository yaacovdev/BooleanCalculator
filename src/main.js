const prompt = require('prompt-sync')();
const tree = require('./tree.js');
const stack = require('./stack.js');
const table = require('./table.js');
const display = require('./displayconsole.js');
const nameoperator = require('./nameoperator.js');

var formula_input = prompt('Enter Formula: ');
//var sample_formula = "(p + q) * (!p * r)";

//formulaInput = utilFn.clearWhiteSpaces(formulaInput);
formula_input = nameoperator.convertToProperNotation(formula_input);
if(formula_input.includes("Error")){
    
    //for future error output
    console.log("Error: Curly Braces aren't cloed!");
    return;
}



var orderArray = tree.makeOrderOperation(formula_input);

var data_tree = tree.inputToTree(formula_input,orderArray);


var data_stack = stack.createStack(data_tree);
var tab = table.createTable(data_stack);

display.displayVariableMatrix(tab);
//tesst