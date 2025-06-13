/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;

    let mover1 = headA, mover2 = headB;
    while(mover1 != mover2){
        if(!mover1.next && !mover2.next) return null;
        mover1 = mover1.next ?? headB;
        mover2 = mover2.next ?? headA;
    }

    return mover1;
};