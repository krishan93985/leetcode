/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = []
    this.k = k

    this.size = function(){
        return this.heap.length;
    }

    this.heapifyDown = function(currIdx){
        if(currIdx >= this.size()) return

        let leftChildIdx = 2*currIdx + 1, rightChildIdx = 2*currIdx + 2

        let smallest = currIdx;
        if(leftChildIdx < this.size() && this.heap[leftChildIdx] < this.heap[smallest])
            smallest = leftChildIdx

        if(rightChildIdx < this.size() && this.heap[rightChildIdx] < this.heap[smallest])
            smallest = rightChildIdx

        if(smallest !== currIdx){
            [this.heap[currIdx], this.heap[smallest]] = [this.heap[smallest], this.heap[currIdx]]
            this.heapifyDown(smallest)
        }
    }

    this.heapifyUp = function(currIdx){
        if(currIdx <= 0) return;

        let node = this.heap[currIdx], parentIdx = Math.floor((currIdx-1)/2)

        if(node < this.heap[parentIdx]){
            let temp = this.heap[parentIdx]
            this.heap[parentIdx] = node
            this.heap[currIdx] = temp
            this.heapifyUp(parentIdx)
        }

    }

    this.push = function(val){
        this.heap.push(val)
        this.heapifyUp(this.size() - 1)
    }

    this.pop = function(){
        let top = this.seek()
        let last = this.heap.pop();

        if(this.size()){
            this.heap[0] = last;
            this.heapifyDown(0)
        }    

        return top;
    }

    this.seek = function(){
        return this.heap[0]
    }

    for(let i=0; i < nums.length; i++){
        this.add(nums[i])
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.size() < this.k) 
        this.push(val) //O(logk)
    else if(val > this.seek()){
        this.pop() //O(logk)
        this.push(val) //O(logk)
    }  


    return this.seek()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */