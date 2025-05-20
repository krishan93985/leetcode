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
    ListNode* reverseList(ListNode* head) {
        if(!head || !head->next) return head;

        ListNode *mover = head, *prev = nullptr, *next = head->next;
        while(mover){
            next = mover->next;
            mover->next = prev;
            prev = mover;
            if(next) head = next;

            mover = next;
        }

        return head;
    }
};