/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, maxNum = Number.MIN_SAFE_INTEGER;

    for(let i=prices.length-1; i>=0; i--){
        if(maxNum > prices[i]){
            max = Math.max(maxNum-prices[i], max)
        }

        maxNum = Math.max(prices[i], maxNum);
    }

    return max;
};