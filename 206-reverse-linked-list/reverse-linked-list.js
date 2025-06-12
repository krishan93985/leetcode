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

    let prev = null, next = head.next;

    while(next){
        head.next = prev;
        prev = head;
        head = next;
        next = next.next;
    }

    head.next = prev;

    return head;
};