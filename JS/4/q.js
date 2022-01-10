let globalVar = 10;


function myFunc(){

    let funcScopedVar = 11;
}


console.log(globalVar)      //10
console.log(funcScopedVar) // Error
