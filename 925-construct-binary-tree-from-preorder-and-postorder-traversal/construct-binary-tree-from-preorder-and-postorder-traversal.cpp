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
    int pre_idx = 0;
    unordered_map<int,int> postMap;
public:
    TreeNode* constructFromPrePost(vector<int>& preorder, vector<int>& postorder) {
        for(int i=0; i<postorder.size(); i++){
            postMap[postorder[i]] = i;
        }

        return dfs(preorder, 0, postorder.size()-1);
    }

    TreeNode* dfs(vector<int>& preorder, int left, int right){
        if(left > right ) return nullptr;

        TreeNode* root = new TreeNode(preorder[pre_idx++]);

        if(pre_idx >= preorder.size()  || left == right) return root;

        int mid = postMap[preorder[pre_idx]];
        root->left = dfs(preorder, left, mid);
        root->right = dfs(preorder, mid+1, right-1);

        return root;
    }
};