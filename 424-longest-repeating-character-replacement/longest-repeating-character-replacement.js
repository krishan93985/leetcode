/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0, r=0, maxLen = 0, maxCount = 0;
    let map = new Map();

    while(r < s.length){
        let count = (map.get(s[r]) || 0) + 1;
        map.set(s[r], count)

        maxCount = Math.max(maxCount, count);

        while(r-l+1 - maxCount > k){
            let leftCount = map.get(s[l])
            map.set(s[l], --leftCount)
            l++;
        }      

        maxLen = Math.max(maxLen, r-l+1)
        r++;
    }

    return maxLen;    
};
