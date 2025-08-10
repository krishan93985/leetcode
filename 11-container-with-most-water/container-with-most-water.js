/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1, maxArea = 0;

    while(left < right){
        let area = (right - left) * Math.min(height[right], height[left]);

        maxArea = Math.max(area, maxArea);

        if(height[left] < height[right]) left++;
        else right--;
    }

    return maxArea;
};