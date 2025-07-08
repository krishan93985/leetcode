class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq(nums.begin(), nums.end());

        int result;
        while(k){
            result = pq.top();
            pq.pop();
            k--;
        }      

        return result; 
    }
};