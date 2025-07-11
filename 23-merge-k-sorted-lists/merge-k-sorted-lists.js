/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = new ListNode();
    let mover = head;
    while(true){
        let minIndex = -1, minVal = Number.MAX_SAFE_INTEGER;
        for(let [key, list] of lists.entries()){
            if(list && list.val < minVal) {
                minVal = list.val;
                minIndex = key;
            }
        }

        if(minIndex === -1) break;

        mover.next = new ListNode(minVal);
        mover = mover.next;
        lists[minIndex] = lists[minIndex].next;
    }

    return head.next;
};