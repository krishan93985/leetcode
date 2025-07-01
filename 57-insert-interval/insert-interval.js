/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const [newS, newE] = newInterval;
    let i=0
    for(; i<intervals.length; i++){
        let [s,e] = intervals[i];

        if(s >= newS){
            break;
        }
    }

    intervals.splice(i,0,newInterval)

    let result = [], index = 0;
    result.push(intervals[0])
    
    for(let i=1; i<intervals.length; i++){
        let [pS,pE] = result[index], [nS, nE] = intervals[i];

        if(pE >= nS){
            result[index] = [pS, Math.max(pE, nE)]
        } else{
            result.push(intervals[i])
            index++;
        }
    }

    return result;
};