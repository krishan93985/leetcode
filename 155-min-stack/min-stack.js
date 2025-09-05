
var MinStack = function() {
    this.stack = [] // { val, min }
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let element = {
        val,
        min:val
    }

    if(this.stack.length){
        element.min = Math.min(element.min, this.stack[this.stack.length-1].min)
    }

    this.stack.push(element);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length) this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return (this.stack.length ? this.stack[this.stack.length-1].val : -1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.stack.length ? this.stack[this.stack.length-1].min : -1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */