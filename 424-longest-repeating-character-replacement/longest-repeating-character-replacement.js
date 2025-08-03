/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let r=0, l=0, max = 0, char = s[0], maxCount = 0;
    let freq = Array(26).fill(0);

    while(r < s.length){
        freq[s.charCodeAt(r) - 65]++;
        maxCount = Math.max(maxCount, freq[s.charCodeAt(r)-65])

        while(r-l+1 - maxCount > k){
            freq[s.charCodeAt(l) - 65]--;
            l++;
        }

        // char = s[l]
        max = Math.max(max, r-l+1);
        r++;
    }

    return max;
};
