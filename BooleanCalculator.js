const prompt = require('prompt-sync')();
const tree = require('./lib/tree.js');
const stack = require('./lib/stack.js');
const table = require('./lib/table.js');
const display = require('./lib/displayconsole.js');
const nameoperator = require('./lib/nameoperator.js');

var formula_input = prompt('Enter Formula: ');

formula_input = nameoperator.convertToProperNotation(formula_input);
if(formula_input[0] == '^'){
    console.log(formula_input.substr(1));
    return;
}

var orderArray = tree.makeOrderOperation(formula_input);
if(typeof(orderArray) == "string"){
    console.log(orderArray);
    return;
}

var data_tree = tree.inputToTree(formula_input,orderArray);
if(typeof(data_tree) == "string"){
    console.log(data_tree);
    return;
}

var data_stack = stack.createStack(data_tree);
if(typeof(data_stack) == "string"){
    console.log(data_stack);
    return;
}
var tab = table.createTable(data_stack);

process.stdout.write('\n');
display.displayVariableMatrix(tab);
