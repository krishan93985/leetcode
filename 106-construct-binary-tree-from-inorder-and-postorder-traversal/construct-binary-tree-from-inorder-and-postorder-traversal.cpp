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
    int post_idx;
    unordered_map<int,int> inorderIdx;
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        for(int i=0; i<inorder.size(); i++){
            inorderIdx[inorder[i]] = i; 
        }       

        post_idx = postorder.size() - 1;
        return dfs(postorder, 0, inorder.size() - 1);
    }

    TreeNode* dfs(vector<int>& postorder, int left, int right){
        if(left > right) return nullptr;

        TreeNode* root = new TreeNode(postorder[post_idx--]);
        int mid = inorderIdx[root->val];

        root->right = dfs(postorder, mid+1, right);  
        root->left = dfs(postorder, left, mid-1);

        return root;      
    }
};