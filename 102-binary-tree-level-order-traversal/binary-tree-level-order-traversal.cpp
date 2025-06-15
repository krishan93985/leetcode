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
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> lorder;
        if(!root) return lorder;
        queue<TreeNode*> q;

        q.push(root);
        while(!q.empty()){
            int size = q.size();
            vector<int> level;

            for(int i=0; i < size; i++){
                TreeNode* root = q.front();
                level.push_back(root->val);

                if(root->left) q.push(root->left);
                if(root->right) q.push(root->right);
                q.pop();
            }

            lorder.push_back(level);
        }

        return lorder;
    }
};