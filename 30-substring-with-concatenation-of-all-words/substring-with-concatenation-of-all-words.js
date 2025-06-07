/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    //store the map with map of [words[key]]:freq
    const map = new Map();
    const strLen = words[0].length;
    const result = [];

    for(let word of words){
        map.set(word, (map.get(word) || 0) + 1);
    }

    let left = 0, right = strLen * words.length - 1;

    //with starting window = words[0].length * words.length in s, map freq
    while(right < s.length){
        const copyMap = new Map();
        let matched = true;
        
        for(let i=left; i<=right; i+=strLen){
            let currStr = s.slice(i, i+strLen);
            copyMap.set(currStr, (copyMap.get(currStr) || 0) + 1);
        }

        for(let [key,value] of map){
            if(copyMap.get(key) !== value) 
                matched = false;
        }

        if(matched) result.push(left);

        left++;
        right++; 
    }

    return result;
};