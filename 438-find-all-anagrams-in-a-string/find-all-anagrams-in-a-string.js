/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length > s.length) return [];
    //create hashmap for p alphabets frequency
    const pMap = new Map();

    for(let char of p){
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    //calc hashmap for init fixed window
    const sMap = new Map();

    for(let i=0; i<p.length; i++){
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }

    let left = 0, right = p.length - 1;
    const indices = [];

    while(right < s.length){
        if(freqMatched(sMap, pMap)){
            indices.push(left)
        }

        sMap.set(s[left], (sMap.get(s[left]) || 0) - 1);
        left++;
        right++;
        if(right < s.length) sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
    }

    return indices;
};

const freqMatched = (mapA, mapB) => {
    for(let [key,value] of mapA.entries()){
         if(value && mapB.get(key) !== value) return false;
    }

    return true;
}