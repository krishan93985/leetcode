/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let sum = 0, currInterval;
    intervals.sort((a,b) => a[0] - b[0])

    if(intervals.length)
        currInterval = intervals[0]

    for(let i=1; i<intervals.length; i++){
        let interval = intervals[i]

        let [pS, pE] = currInterval, [nS, nE] = interval;
        if(pE > nS){
            sum++
            currInterval = pE > nE ? interval : currInterval;
        } else{
            currInterval = interval;
        }
    }

    return sum;
};