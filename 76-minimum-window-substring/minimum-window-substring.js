/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let sMap = new Map(), tMap = new Map();

    let need = 0, have = 0;
    for(let char of t){
        let prevFreq = (tMap.get(char) || 0);
        if(prevFreq === 0) need++; 

        tMap.set(char, prevFreq + 1);
    }

    let r=0, l=0, i = -1, j = s.length;

    while(r < s.length){
        sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
        if(tMap.has(s[r]) && sMap.get(s[r]) === tMap.get(s[r])) have++;

        while(have === need){
            let char = s[l];
            sMap.set(char, (sMap.get(char) || 0) - 1);
            if(tMap.has(char) && sMap.get(char) < tMap.get(char)) have--;

            if(j-i >= r-l){
                i=l; j=r;
            }
            l++;
        }

        r++;
    }

    return i==-1 && j==s.length ? "" : s.slice(i, j+1);
};