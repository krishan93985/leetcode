/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let pos = -1;
    let gasDiff = 0;
    for(let i=0; i<gas.length; i++){
        gasDiff += gas[i] - cost[i]
    }

    if(gasDiff < 0) return pos;

    let tank = 0;
    for(i=0; i<gas.length; i++){
        tank += gas[i] - cost[i]
        if(pos === -1 && tank >= 0) pos = i;
        else if(tank < 0){
            pos = -1;
            tank=0;
        }
    }

    return pos;
};