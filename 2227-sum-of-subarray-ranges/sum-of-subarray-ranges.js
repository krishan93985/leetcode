/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let nge = [], ngeS = [];
    let nse = [], nseS = [];
    let pge = [], pgeS = [];
    let pse = [], pseS = [];

    for(let i=nums.length-1; i>=0; i--){
        while(nseS.length && nums[nseS[nseS.length - 1]] >= nums[i]){
            nseS.pop();
        }

        nse[i] = nseS.length ? nseS[nseS.length-1] : nums.length;
        nseS.push(i)

        while(ngeS.length && nums[ngeS[ngeS.length - 1]] <= nums[i]){
            ngeS.pop();
        }

        nge[i] = ngeS.length ? ngeS[ngeS.length-1] : nums.length;
        ngeS.push(i)
    }


    for(let i=0; i<nums.length; i++){
        while(pseS.length && nums[pseS[pseS.length - 1]] > nums[i]){
            pseS.pop();
        }

        pse[i] = pseS.length ? pseS[pseS.length-1] : -1;
        pseS.push(i)

        while(pgeS.length && nums[pgeS[pgeS.length - 1]] < nums[i]){
            pgeS.pop();
        }

        pge[i] = pgeS.length ? pgeS[pgeS.length-1] : -1;
        pgeS.push(i)
    }

    let minLen = 0, maxLen = 0;
    for(let i=0; i<nums.length; i++){
        minLen += (nse[i] - i) * (i-pse[i]) * nums[i];

        maxLen +=(nge[i] - i) * (i-pge[i]) * nums[i];
    }

    return maxLen - minLen;
};