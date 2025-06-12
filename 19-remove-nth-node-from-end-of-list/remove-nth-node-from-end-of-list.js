/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sz = 0;
    let mover = head;
    while(mover){
        sz++;
        mover = mover.next;
    }

    let pos = sz-n+1, ctr = 1, prev = null;
    mover = head;
    
    while(ctr != pos){
        ctr++;
        prev = mover;
        mover = mover.next;
    }

    if(prev) prev.next = mover.next;
    else head = head.next;
    
    return head;
};