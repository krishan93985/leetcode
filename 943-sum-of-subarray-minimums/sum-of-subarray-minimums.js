/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let left = [], right = [];
    let nse = [], pse = []
    const MOD = 1000000007

    for(let i=arr.length-1; i>=0; i--){
        let el = arr[i];
        let top = right[right.length - 1];
        while(top && top.val >= el){
            right.pop();
            top = right[right.length-1];
        }

        nse[i] = top ? top.pos : arr.length;

        right.push({
            val:el,
            pos:i
        })
    }

    for(let i=0; i < arr.length; i++){
        const el = arr[i]
        let top = left[left.length-1];
        while(top && top.val > el){
            left.pop()
            top = left[left.length-1]
        }
        
        pse[i] = top ? top.pos : -1;
        left.push({
            val:el,
            pos:i
        })
    }

    let sum = 0;
    for(let i=0; i<arr.length; i++){
        const el = arr[i];
        const rightLen = nse[i] - i
        const leftLen = i - pse[i]

        const totalSub = (rightLen * leftLen)%MOD;
        // console.log({newTotalSub: totalSub, leftLen, rightLen})
        sum = (sum + (totalSub*arr[i])%MOD)%MOD;
    }

    return sum
};