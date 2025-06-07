/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const pfxSum = [0];
    const result = 0;

    nums.map((num,i) => {
        const res = num%2 === 0 ? 0 : 1;
        pfxSum.push(pfxSum[i] + res);
    })

    const map = new Map();
    let sum = 0;
    map.set(0,1);

    for(let i=0; i<nums.length; i++){
        const currPSum = pfxSum[i+1];
        const key = currPSum - k;

        if(key >= 0){
            const freq = map.get(key) ?? 0;
            sum+=freq;
        }

        map.set(currPSum, (map.get(currPSum) ?? 0) + 1);
    }

    return sum;
};