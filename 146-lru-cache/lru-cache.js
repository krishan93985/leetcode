var DLLNode = function(key, value, prev, next){
    this.key = key ?? 0;
    this.value = value ?? 0;
    this.prev = prev ?? null;
    this.next = next ?? null;
}

var DLL = function(){
    this.head = new DLLNode(-1, -1);
    this.tail = new DLLNode(-1, -1, this.head, null);
    this.head.next = this.tail;
}

DLL.prototype.moveToStart = function(node){
    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;

    let temp = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = temp;
    temp.prev = node;
}

DLL.prototype.deleteNode = function(node){
    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;

    return node;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new DLL();
    this.map = new Map();
    this.capacity = capacity ?? 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    /*if key exists
        - get the key
        - move the key to start of the list

    else return -1
    */

    if(this.map.has(key)){
        let valNode = this.map.get(key);
        // console.log(valNode.key, valNode.value)
        let result = valNode.value;

        this.cache.moveToStart(valNode);

            // console.log("get",key)
            // console.log(this.cache.head, this.cache.tail)
        return result;
    }

    // console.log("get",key)
    // console.log(this.cache.head, this.cache.tail)
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    /*if key exists
        - update the key
        - move the key to start of the list
    else 
        - remove the last node
        - add the new node to start
    */

    if(this.map.has(key)){
        let valNode = this.map.get(key);
        valNode.value = value;

        this.cache.moveToStart(valNode);

    //     console.log("put",key,value)
    // console.log(this.cache.head, this.cache.tail)

        return null;
    } 

    let head = this.cache.head, tail = this.cache.tail;

    if(this.map.size >= this.capacity){
        // console.log({ key, value, mapSizeBefore:this.map.size});
        let lastNode = tail.prev;
        // console.log(head, tail)
        let deletedKey = lastNode.key;
        this.cache.deleteNode(lastNode);

        this.map.delete(deletedKey);
        // console.log({ key, value, mapSizeAfter:this.map.size, deletedKey: lastNode.key});
    }

    let newNode = new DLLNode(key,value);
    let temp = head.next;
    head.next = newNode;
    newNode.prev = head;
    newNode.next = temp;
    temp.prev = newNode;
    this.map.set(key, newNode);

    // console.log("put",key,value)
    // console.log(head, tail)

    // console.log(head.next.key, head.next.value, this.map.get(key))
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */