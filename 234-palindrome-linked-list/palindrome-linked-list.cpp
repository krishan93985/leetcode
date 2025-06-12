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
    bool isPalindrome(ListNode* head) {
        ListNode* slow = head, *fast = head;

        while(fast && fast->next){
            // assign next of last node in first half of list to nullptr
            ListNode* temp = slow->next;
            fast = fast->next->next;
            if(!fast || !fast->next)
                slow->next = nullptr;

            slow = temp;
        }

        //if odd, move slot = slot->next
        if(fast && !fast->next) slow = slow->next;

        //reverse the first half
        head = reverseList(head);

        while(head && slow){
            if(head->val != slow->val) return false;
            head = head->next;
            slow = slow->next;
        }

        return true;
    }

    ListNode* reverseList(ListNode* head, ListNode* prev = nullptr){
        if(!head) return prev;

        ListNode* newHead = reverseList(head->next, head);

        head->next = prev;

        return newHead;
    }
};