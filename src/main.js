const prompt = require('prompt-sync')();
const btree = require('./btree.js');
const utilFn = require('./util.js');
const stackFn = require('./stack.js');
const table = require('./table.js');
const display = require('./displayconsole.js');
const nameconvert = require('./nameoperator.js');

var formulaInput = prompt('Enter Formula: ');
//var sample_formula = "(p + q) * (!p * r)";

//formulaInput = utilFn.clearWhiteSpaces(formulaInput);
formulaInput = nameconvert.convertToProperNotation(formulaInput);
if(formulaInput.includes("Error")){
    
    //for future error output
    console.log("Error: Curly Braces aren't cloed!");
    return;
}



var orderArray = btree.makeOrderOperation(formulaInput);

var tree = btree.inputToTree(formulaInput,orderArray);


var s = stackFn.createStack(tree);
var tab = table.createTable(s);

display.displayVariableMatrix(tab);
//tesst