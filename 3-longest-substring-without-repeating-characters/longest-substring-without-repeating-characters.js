/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0, left = 0,right = 0;
    // maintain a map of chars
    const map = new Map();

    //left to right, keep inc right 
    while(right < s.length){
        let char = s[right];

        // shrink the window with removing char from map till we reach the curr char
        if(map.has(char)){
            while(s[left] != s[right]){
                map.delete(s[left])
                left++;
            }
            left++;
        }

        maxLen = maxLen > right-left+1 ? maxLen : right-left+1;
        map.set(char);
        right++;        
    }

    return maxLen;
};