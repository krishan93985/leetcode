class Node{
    public:
    int val;
    Node* next;
    int minimum;
    Node(int tempData = 0, Node* tempNext = nullptr, int tempMin=INT_MAX){
        val = tempData;
        next = tempNext;
        minimum = tempMin;
    }
};

class MinStack {
    Node* head;
public:
    MinStack() {
        head = nullptr;
    }
    
    void push(int val) {
        int prevMin = head ? head->minimum : INT_MAX;
        int newMin = min(val,prevMin);
        Node* node = new Node(val, head, newMin);
        head = node;
    }
    
    void pop() {
        Node* temp = head;
        head = head->next;
        delete temp;
    }
    
    int top() {
        return head ? head->val : -1;
    }
    
    int getMin() {
        return head->minimum;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */