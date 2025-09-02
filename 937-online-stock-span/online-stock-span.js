
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;

    while(this.stack.length && this.stack[this.stack.length-1].price <= price){
        let top = this.stack.pop();
        span += top.span;
    }

    this.stack.push({
        price,
        span
    })

    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */