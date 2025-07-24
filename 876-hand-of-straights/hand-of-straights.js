/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    const map = new Map()

    for(let h of hand){
        map.set(h, (map.get(h) || 0) + 1)
    }

    hand.sort((a,b) => a-b);

    for(let i=0; i<hand.length; i++){
        let size = groupSize, counter = hand[i];
        if(!map.get(counter)) continue;

        while(size){
            if(!map.get(counter)) return false;

            map.set(counter, map.get(counter) - 1);
            counter++;
            size--;
        }
    }

    return true;
};