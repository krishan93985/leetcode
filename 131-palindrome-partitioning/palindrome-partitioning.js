/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const partitions = [];
    dfs(s, 0, partitions, []);

    return partitions;
};

var dfs = function(s, idx, partitions, combination) {
    if(idx === s.length){
        partitions.push([...combination]);
        return;
    }

    for(let i=idx; i<s.length; i++){
        let currString = s.slice(idx, i+1)
        if(isPalindrome(currString)){
            combination.push(currString);
            dfs(s, i+1, partitions, combination)
            combination.pop();
        }
    }
}

var isPalindrome = function(str){
    let l=0, r=str.length-1;
    while(l < r){
        if(str[l] !== str[r]) return false;
        l++;
        r--;
    }

    return true;
}