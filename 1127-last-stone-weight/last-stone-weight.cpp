class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        //max heap by defualt
        priority_queue<int> pq(stones.begin(), stones.end());
        
        while(pq.size() > 1){
            int first = pq.top();
            pq.pop();
            int second = pq.top();
            pq.pop();

            pq.push(first - second);
        }

        return pq.top();
    }
};