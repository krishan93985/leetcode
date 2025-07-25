/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const map = new Map()
    map.set(0,1)

    let odd = 0, count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2) odd++;

        let lookup = odd - k;
        if(lookup >= 0){
            let freq = map.get(lookup) || 0;

            count += freq;
        }

        map.set(odd, (map.get(odd) || 0) + 1);
    }

    return count;
};