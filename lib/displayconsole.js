4/*
Outputs Matrix to Console
*/

function displayVariableMatrix(M){

    for(var I = 0; I < M.length; I++){
        if(M[I][0].includes("()"))
            process.stdout.write("Results");
        else
            process.stdout.write(M[I][0] + ' ');
    }

    for(var i = 1; i < M[0].length; i++)
    {
        process.stdout.write('\n');
        for(var j = 0; j < M.length; j++){
            if(M[j][i])
                process.stdout.write('1');
            else
                process.stdout.write('0');
            process.stdout.write(stringSpaces(M[j][0].length));
        }
    }
}

function stringSpaces(n){
    var str = "";
    for(var i = 0; i < n; i++){
        str += ' ';
    }
    return str;
}

module.exports = {
    displayVariableMatrix
};
