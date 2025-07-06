/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const maxLeft = [], maxRight = []

    maxLeft[0] = 0
    for(let i=1; i<height.length; i++){
        maxLeft.push(Math.max(maxLeft[maxLeft.length - 1], height[i-1]))
    }

    maxRight[height.length-1] = 0
    for(let i=height.length-2; i>=0; i--){
        maxRight[i] = Math.max(maxRight[i+1],height[i+1])
    }

    let water = 0;
    for(let [key, h] of height.entries()){
        let currWater = Math.min(maxLeft[key], maxRight[key]) - h
        water += currWater > 0 ? currWater : 0
    }

    return water;
};