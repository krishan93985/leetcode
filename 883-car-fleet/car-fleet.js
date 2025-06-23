/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos,idx) => ({p:pos,s:speed[idx]}));
    const sortedPos = cars.sort((a,b) => b.p-a.p);

    const result = [];
    for(let [index,pos] of sortedPos.entries()){
        const top = result[result.length - 1];

        if(top){
            const t1 = (target-top.p)/top.s;
            const t2 = (target-pos.p)/pos.s;

            if(t1 < t2)
                result.push(pos);
        } else
            result.push(pos)

    }

    return result.length;
};