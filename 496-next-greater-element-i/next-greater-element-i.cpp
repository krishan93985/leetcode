class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int,int> nge;
        vector<int> ans(nums1.size());
        stack<int> s;

        for(int i=nums2.size()-1; i>=0; i--){
            while(!s.empty() && nums2[i] >= s.top()){
                s.pop();
            }

            nge[nums2[i]] = s.empty() ? -1 : s.top();
            s.push(nums2[i]);
        }

        for(int i=0; i<nums1.size(); i++){
            ans[i] = nge[nums1[i]];
        }

        return ans;
    }
};