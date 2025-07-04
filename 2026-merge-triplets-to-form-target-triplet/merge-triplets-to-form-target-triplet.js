/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let [x,y,z] = target;
    let targetReached = [false, false, false];
    for(let triplet of triplets){
        let [a,b,c] = triplet;

        if(a === x && b <= y && c <= z){
            targetReached[0] = true;
        }
        if(b === y && a <= x && c <= z){
            targetReached[1] = true;
        }
        if(c === z && a <= x && b <= y){
            targetReached[2] = true;
        }
    }

    return targetReached[0] && targetReached[1] && targetReached[2];
};