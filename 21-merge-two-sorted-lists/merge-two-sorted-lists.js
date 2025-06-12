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
    let head = null;
    let mover1 = list1, mover2 = list2, mover = head;

    while(mover1 && mover2){
        if(mover1.val < mover2.val){
            if(!head) head = mover = mover1;
            else {
                mover.next = mover1;
                mover = mover.next;
            }
            
            mover1 = mover1.next;
        } else {
            if(!head) head = mover = mover2;
            else {
                mover.next = mover2;
                mover = mover.next;
            }

            mover2 = mover2.next;
        }
    }

    if(!mover1) {
        if(!mover) head = mover = mover2;
        else mover.next = mover2;
    }
    if(!mover2) {
        if(!mover) head = mover = mover1;
        else mover.next = mover1;
    }

    return head;

};