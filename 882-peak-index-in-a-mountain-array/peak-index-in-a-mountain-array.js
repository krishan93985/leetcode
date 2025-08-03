/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let s=0, e=arr.length-1;
    let mid; 

    while(s < e){
        mid = Math.floor((s+e)/2);

        if(arr[mid+1] >= arr[mid]){
            s = mid+1;
        } else {
            e = mid
        }
    }

    return s;
};