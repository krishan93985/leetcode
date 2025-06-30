/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const sortedFreq = [];

    for(let value of nums){
        let currFreq = map.get(value) || 0;
        map.set(value, currFreq + 1);
    }

    for(let [key, freq] of map.entries()){
        let values = sortedFreq[freq];
        if(values?.length) values.push(key)
        else values = [key]

        sortedFreq[freq] = values;
    }

    let currK = 0;
    const result = [];
    for(let i=sortedFreq.length-1; i>=0; i--){
        let elements = sortedFreq[i]?.length ? sortedFreq[i] : []

        elements = elements.slice(0, k-currK);
        result.push(...elements);

        currK+=elements.length;
        if(currK >= k) break;
    }

    return result;
};