/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    let map = new Map()

    for(let num of hand){
        map.set(num,(map.get(num) || 0) + 1);
    }

    hand.sort((a,b) => a-b);

    for(let [key, value] of hand.entries()){
        if(map.get(value)){
            for(let i=value; i < value+groupSize; i++){
                let count = map.get(i) || 0;
                if(!count) return false;

                map.set(i, count-1);
            }
        }
    }

    return true;
};