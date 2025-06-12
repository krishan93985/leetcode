/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let mover1 = list1, mover2 = list2, mover = head;

    if(!mover1 || !mover2) return mover1 || mover2;

    while(mover1 && mover2){
        if(mover1.val < mover2.val){
            mover.next = mover1;
            mover1 = mover1.next;
        } else {
            mover.next = mover2;
            mover2 = mover2.next;
        }

        mover = mover.next;
    }

    mover.next = mover1 || mover2;

    return head.next;
};