/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let len = 0, temp = head;
    while(temp){
        len++;
        temp = temp.next;
    }

    k=k%len;
    if(k == 0) return head;

    let n = len - k + 1, count = 1, prev = null, mover = head;
    while(count < n){
        prev = mover;
        mover = mover.next;
        count++;
    }

    prev.next = null;
    let newHead = mover;
    while(mover.next){
        mover = mover.next;
    }

    mover.next = head;
    head = newHead;

    return head;
};