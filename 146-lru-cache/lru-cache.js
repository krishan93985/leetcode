var DLLNode = function(key = -1, data = 0, prev = null, next = null){
    this.data = data;
    this.prev = prev;
    this.next = next;
    this.key = key;
}

class DLL{
    constructor(){
        this.head = new DLLNode()
        this.tail = new DLLNode()

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    deleteNode(node){
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    pushBack(node){
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        this.tail.prev = node;
        node.next = this.tail;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.list = new DLL(capacity);
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   //if key present in map (delete the node and push it to back)
//    console.log('get', key,this.map.get(key))
   if(this.map.has(key)){
    let node = this.map.get(key);
    this.list.deleteNode(node);

    this.list.pushBack(node);

    return node.data;
   }

   return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
   //if already in map, delete it, and push to  back with updated value
   //else push to back with updated value
   
   if(this.get(key) !== -1){
    let node = this.map.get(key);
    node.data = value;
   } else{
        let node = new DLLNode(key, value);
        if(this.map.size === this.capacity){
            this.map.delete(this.list.head.next.key);
            this.list.deleteNode(this.list.head.next)
        }
        
        this.list.pushBack(node);
        this.map.set(key, node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */