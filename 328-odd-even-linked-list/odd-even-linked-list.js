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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    
    let oddHead = head, evenHead = head.next;
    let oddMover = oddHead, evenMover = evenHead;

    while(evenMover && evenMover.next){
        oddMover.next = evenMover.next;
        evenMover.next = oddMover.next.next;
        oddMover = oddMover.next;
        evenMover = evenMover.next;        
    }

    oddMover.next = evenHead;

    return oddHead;
};