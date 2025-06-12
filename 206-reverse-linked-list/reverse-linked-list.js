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
var reverseList = function(head) {
    if(!head || !head.next) return head;

    head = reverseListHelper(head,null);

    return head;
};

var reverseListHelper = function(head, prev) {
    if(!head) return prev;

    let newHead = reverseListHelper(head.next, head);

    head.next = prev;
    return newHead;
};