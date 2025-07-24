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
   let dummy = new ListNode();
   let mover = dummy;

    while(true){
        let minIndex = -1;
        for(let i=0; i<lists.length ; i++){
            if(lists[i] && (minIndex == -1 || (lists[i].val < lists[minIndex].val))){
                minIndex = i;
            }
        }

        if(minIndex == -1) break;

        mover.next = lists[minIndex];
        mover = mover.next;
        lists[minIndex] = lists[minIndex].next;
    }

    return dummy.next;
};