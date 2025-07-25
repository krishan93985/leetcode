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
    let moverA = headA, moverB = headB;

    while(moverA || moverB){
        if(moverA === moverB) return moverA;

       moverA = moverA ? moverA.next : headB;
       moverB = moverB ? moverB.next : headA;
    }

    return null;
};