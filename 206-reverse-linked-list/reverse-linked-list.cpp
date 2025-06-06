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

        return reverseLL(head, nullptr);
    }

    ListNode* reverseLL(ListNode* head, ListNode* prev){
        if(!head->next){
            head->next = prev;
            return head;
        }

        ListNode* newHead = reverseLL(head->next, head);
        
        head->next = prev;

        return newHead;
    }
};