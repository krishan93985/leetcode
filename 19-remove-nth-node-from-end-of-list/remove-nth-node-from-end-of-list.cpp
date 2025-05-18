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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* temp = head, *res = nullptr;

        if(!head || !head->next) return res;

        int len = 0;
        while(temp){
            len++;
            temp=temp->next;
        }

        int target = len - n, ctr = 1;
        ListNode* mover = head;
        while(mover && ctr < target){
            ctr++;
            mover = mover->next;
        }

        ListNode*ptr = nullptr;
        if(target == 0){
            ptr = head;
            head = head->next;
        } else {
            ptr = mover->next;
            mover->next = ptr->next;
        }
            delete ptr;

        return head;
    }
};