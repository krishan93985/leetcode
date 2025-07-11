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
        priority_queue<pair<int,ListNode*>, vector<pair<int,ListNode*>>, greater<pair<int,ListNode*>>> pq;

        for(int i=0; i<lists.size(); i++){ 
            ListNode* mover = lists[i];
            if(mover){
                pq.push(make_pair(mover->val,mover));
                mover = mover->next;
            }
        }

        ListNode* head = new ListNode();
        ListNode* mover = head;

        while(!pq.empty()){
            mover->next = pq.top().second;
            pq.pop();

            mover = mover->next;
            if(mover->next) pq.push(make_pair(mover->next->val, mover->next));
        }

        return head->next;
    }
};