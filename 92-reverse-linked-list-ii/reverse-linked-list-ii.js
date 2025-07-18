/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || !head.next || left === right) return head;

    let ctr = 1, mover = head, midHead = null, midTail = null;
    let dummy = prev = new ListNode(0, head);

    while(ctr < left){
        prev = mover;
        mover = mover.next;
        ctr++;
    }
    
    midHead = mover;
    let next, prevMover = prev;
    while(ctr <= right){
        ctr++;
        next = mover.next;
        mover.next = prevMover;
        prevMover = mover;
        mover = next;
    }

    prev.next = prevMover;
    midHead.next = next;

    return dummy.next;
};