/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const diff = []
    let extraGas = 0;
    for(let [key,value] of gas.entries()){
        diff.push(value-cost[key]);
        extraGas += value-cost[key]
    }
    if(extraGas < 0) return -1;

    let index = -1, tank = 0;
    for(let [key,value] of diff.entries()){
        tank+=value;

        if(index == -1 && tank >= 0) index = key;
        else if(tank < 0) {
            tank=0;
            index = -1;
        }
    }

    return index;
};