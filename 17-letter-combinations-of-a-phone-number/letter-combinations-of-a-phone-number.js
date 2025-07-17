/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
    }, alpha = [];

    for(let digit of digits){
        alpha.push(letters[digit]);
    }

    const output = [], combo = "", set = new Set();

    combinations(alpha, 0, combo, output); 
    
    return output;
};

var combinations = function(alpha, idx, combo, output){
    if(idx === alpha.length){
        if(combo) output.push(combo)
        return;
    }   
    
    for(let letter of alpha[idx]){
        combinations(alpha, idx+1, combo + letter, output)
    }
}