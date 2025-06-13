/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let tailHead = swapPairs(head.next.next);

    let newHead = head.next;
    head.next = tailHead;
    newHead.next = head; 

    return newHead;   
};