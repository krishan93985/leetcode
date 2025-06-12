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
    if(!head || !head.next) return head;

    let tail = null, mid = head;
    let count = 1;
    while(count < left){
        tail=mid;
        mid=mid.next;
        count++;
    }

    let midTail = tail, last = mid;
    while(count <= right){
        midTail=last;
        last=last.next;
        count++;
    }

    midTail.next = null;
    let newMid = reverseLL(mid);

    if(tail) tail.next = newMid;
    else head = newMid;
    mid.next = last;

    return head;
};

const reverseLL = (head, prev=null) => {
    if(!head) return prev;

    let newHead = reverseLL(head.next, head);
    head.next = prev;

    return newHead;
}