class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size()-1;
        int leftMax = 0, rightMax = 0;
        int water = 0;

        while(left <= right){
            if(leftMax <= rightMax){
                water += leftMax - height[left] > 0 ? leftMax - height[left] : 0;
                leftMax = max(leftMax, height[left]);
                left++;
            } else {
                water += rightMax - height[right] > 0 ? rightMax - height[right] : 0;
                rightMax = max(rightMax, height[right]);
                right--;
            }
        }

        return water;
    }
};