/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = [], rightMax = [];
    let leftMaxVal = 0, rightMaxVal = 0;

    for(let i=0; i<height.length; i++){
        leftMax[i] = height[i] >= leftMaxVal ? 0 : leftMaxVal;
        leftMaxVal = Math.max(leftMaxVal, height[i]);
    }


    for(let i=height.length-1; i>=0; i--){
        rightMax[i] = height[i] >= rightMaxVal ? 0 : rightMaxVal;
        rightMaxVal = Math.max(rightMaxVal, height[i]);
    }

    let water = 0;
    for(let i=0; i<height.length; i++){
        let currWater = Math.min(leftMax[i], rightMax[i]);
        if(currWater) water += currWater - height[i];
    }

    return water;
};