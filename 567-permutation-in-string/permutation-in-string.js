/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length) return false;

    let s1Map = new Map()
    for(let character of s1){
        s1Map.set(character, (s1Map.get(character) || 0) + 1)
    }

    let s2Map = new Map()
    for(let i=0; i<s1.length; i++){
        let character = s2[i];
        s2Map.set(character, (s2Map.get(character) || 0) + 1)
    }

    let left = 0, right = s1.length-1;

    while(right < s2.length){
        if(freqMatched(s1Map, s2Map)) return true;

        s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
        left++;
        right++;
        s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);
    }

    return false;
};

function freqMatched (map1, map2) {
    for(let [key, value] of map1.entries()){
        if(!map2.has(key) || map2.get(key) !== value) return false;
    }

    return true;
}