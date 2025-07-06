/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    //[5, 10,-5]
    //10 []

    const asteroidSt = []

    for(let [key, value] of asteroids.entries()){
        let top = asteroidSt[asteroidSt.length - 1];
        let currDistroyed = false;
        while(asteroidSt.length && top >= 0 && value < 0){
            if(Math.abs(value) <= top){
                currDistroyed = true;
                if(Math.abs(value) === top) asteroidSt.pop()
                break;
            }

            asteroidSt.pop();
            top = asteroidSt[asteroidSt.length - 1]
        }

        if(!currDistroyed) asteroidSt.push(value)
    }

    return asteroidSt;
};