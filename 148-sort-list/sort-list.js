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
var sortList = function(head) {
    if(!head || !head.next) return head;

    let result = midOfList(head);
    let mid = result.mid, prev = result.prev;
    if(prev) prev.next = null;

    let left = sortList(head);
    let right = sortList(mid);

    let sorted = sortedMerge(left, right);

    return sorted;
};

const midOfList = (head) => {
    let fast = head, slow = head, prev = null;

    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    return {
        mid:slow,
        prev
    };
}

const sortedMerge = (left, right) => {
    const head = new ListNode(-1);
    let mover = head, lMover = left, rMover = right;

    while(lMover && rMover){
        if(lMover.val < rMover.val){
            mover.next = lMover;
            lMover = lMover.next;
        } else {
            mover.next = rMover;
            rMover = rMover.next;
        }

        mover = mover.next;
    }

    mover.next = lMover || rMover;

    return head.next;
}