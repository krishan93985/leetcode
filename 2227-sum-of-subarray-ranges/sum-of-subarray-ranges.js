/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let nse = [], pse = [], pge = [], nge = []
    const nseSt = [], pseSt = [], ngeSt = [], pgeSt = []
    for(let [key,value] of nums.entries()){
        let top = pseSt[pseSt.length-1]          
        while(pseSt.length && nums[top] > value){
            pseSt.pop()
            top = pseSt[pseSt.length-1]
        }
        
        pse[key] = top ?? -1
        pseSt.push(key)

        top = pgeSt[pgeSt.length - 1]
        while(pgeSt.length && nums[top] < value){
            pgeSt.pop()
            top = pgeSt[pgeSt.length-1]
        }
        
        pge[key] = top ?? -1
        pgeSt.push(key)
    }

    for(let key=nums.length-1; key >= 0; key--){
        let top = nseSt[nseSt.length-1], value = nums[key]      
        while(nseSt.length && nums[top] >= value){
            nseSt.pop()
            top = nseSt[nseSt.length-1]
        }
        
        nse[key] = top ?? nums.length
        nseSt.push(key)

        top = ngeSt[ngeSt.length - 1]
        while(ngeSt.length && nums[top] <= value){
            ngeSt.pop()
            top = ngeSt[ngeSt.length-1]
        }
        
        nge[key] = top ?? nums.length
        ngeSt.push(key)
    }

    let sumMin = 0, sumMax = 0;
    for(let i=0; i<nums.length;i++){
        let minSubarraysSum = (nse[i] - i) * (i - pse[i]) * nums[i];
        sumMin += minSubarraysSum;

        let maxSubarraysSum = (nge[i] - i) * (i - pge[i]) * nums[i]
        sumMax += maxSubarraysSum;
    }

    return sumMax - sumMin;
};