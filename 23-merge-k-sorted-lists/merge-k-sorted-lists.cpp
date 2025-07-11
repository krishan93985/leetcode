/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<int, vector<int>, greater<int>> pq;

        for(int i=0; i<lists.size(); i++){
            ListNode* mover = lists[i];
            while(mover){
                pq.push(mover->val);
                mover = mover->next;
            }
        }

        ListNode* head = new ListNode();
        ListNode* mover = head;

        while(!pq.empty()){
            mover->next = new ListNode(pq.top());
            pq.pop();

            mover = mover->next;
        }

        return head->next;
    }
};