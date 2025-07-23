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
var swapPairs = function(head) {
   if(!head || !head.next) return head;

   let dummy = new ListNode(0, head);
   let prev = dummy, mover = head;
   let next;

   while(mover && mover.next){
    next = mover.next.next;
    mover.next.next = mover;
    prev.next = mover.next;
    mover.next = next;
    prev = mover;
    mover = mover.next;
   }

   return dummy.next;
};