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
var reverseBetween = function (head, left, right) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0, head)
    let prev = dummy;
    let count = 1, mover = head;

    while (count < left) {
        prev = mover;
        mover = mover.next;
        count++;
    }

    let headPrev = prev;
    let next = mover.next;
    while (count <= right) {
        mover.next = prev;
        prev = mover;
        mover = next;
        if (mover) next = mover.next;
        count++;
    }

    headPrev.next.next = mover;
    headPrev.next = prev;

    return dummy.next;
}