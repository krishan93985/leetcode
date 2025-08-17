/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return null;

    //break list from mid
    let slow = head, fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let head2 = slow.next;
    slow.next = null;

    //reverse second list
    let prev = null, mover = head2, next;
    while(mover.next){
        next = mover.next;
        mover.next = prev;
        prev  = mover;
        mover = next;
    }

    mover.next = prev;

    let newHead = new ListNode()
    let newMover = newHead;
    //merge both lists
    while(mover || head){
        if(head){
            newMover.next = head;
            head = head.next;
            newMover = newMover.next;
        }

        if(mover){
            newMover.next = mover;
            mover = mover.next;
            newMover = newMover.next;
        }
    }

    return newHead.next;
};