/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let sum = 0, end;

    intervals.sort((a,b) => a[0]-b[0]);

    if(intervals.length) end = intervals[0][1];

    for(let i=1; i<intervals.length; i++){
        const [cS, cE] = intervals[i];

        if(end > cS){
            sum++;
            end = end > cE ? cE : end;
        } else{
            end = cE;
        }
    }

    return sum;
};