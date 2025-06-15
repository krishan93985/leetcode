/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    int diameterHelper(TreeNode* root, int &maxPath){
        if(!root) return 0;

        int leftMax = diameterHelper(root->left, maxPath);
        // leftMax = root->left ? leftMax + 1 : leftMax;
        
        int rightMax = diameterHelper(root->right, maxPath);
        // rightMax = root->right ? rightMax + 1 : rightMax;

        maxPath = max(leftMax + rightMax, maxPath);

        return max(leftMax, rightMax) + 1;
    }
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int maxPath = 0;
        diameterHelper(root, maxPath);

        return maxPath;
    }
};