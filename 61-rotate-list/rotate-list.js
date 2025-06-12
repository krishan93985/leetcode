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
    let size = 0, temp = head;

    while(temp){
        size++;
        temp=temp.next;
    }

    k%=size;
    if(!head || k==0) return head;

    let n = size-k+1, count = 1, prev = null, mover = head;
    while(count != n){
        prev = mover;
        mover = mover.next;
        count++;
    }

    prev.next = null;
    let tempHead = mover;

    while(mover && mover.next){
        mover = mover.next;
    }

    mover.next = head;
    head = tempHead;

    return head;
};