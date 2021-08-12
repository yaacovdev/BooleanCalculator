const util = require("./util.js");
const algebra = require("./algebra.js");

const NOT = ["NOT", "~", "'", "¬"];
const AND = ["AND", "^", "."];
const OR = ["OR", "V", "v"];
const XOR = ["XOR", "EXCLSOR"];

function convertToProperNotation(input){
    var curlybrace = false;
    for(var pos = 0; pos < input.length; pos++){
        if(!curlybrace && input[pos] == '{'){
            curlybrace = true;
            continue;
        } else if(curlybrace && input[pos] == '}'){
            curlybrace = false;
            continue;
        }
        else if(curlybrace){
            continue;
        }


        var AllNames = [];
        AllNames.push(NOT,AND,OR,XOR);

        var k;
        for(var i = 0; i < AllNames.length; i++){
            for(var j of AllNames[i]){
                k = 0;
                for(k; k < j.length; k++){
                    
                    if(j[k] != input[pos+k]){
                        k = 0;
                        break;
                    }
                }
                if(k != 0){
                    input = input.replaceAtSub(pos,pos+k, algebra.operator_priority[i]);
                    break;
                }

            }
            if(k != 0) break;
        }
    }
    
    if(curlybrace){
        return "Error: curly brace not closed";
    }
    return input;
}

module.exports = {
    convertToProperNotation
};