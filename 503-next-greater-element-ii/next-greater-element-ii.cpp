class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        //create a monotonic stack for current array
        //now again create a monotonic stack updating the nge
        stack<int> s;
        vector<int> nge(nums.size());

        for(int i=nums.size()-1; i>=0; i--){
            //pop the elements if they are smaller than current element
            while(!s.empty() && s.top() <= nums[i]){
                s.pop();
            }

            s.push(nums[i]);
        }

        for(int i=nums.size()-1; i>=0; i--){
            //pop the elements if they are smaller than current element
            while(!s.empty() && s.top() <= nums[i]){
                s.pop();
            }

            nge[i] = s.empty() ? -1 : s.top();
            s.push(nums[i]);
        }

        return nge;
    }
};