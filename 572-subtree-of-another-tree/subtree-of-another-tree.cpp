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
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if(!root || !subRoot) return false;

        bool subTree = checkSubTree(root, subRoot);

        subTree = subTree || isSubtree(root->left, subRoot);
        subTree = subTree || isSubtree(root->right, subRoot);

        return subTree;
    }

    bool checkSubTree(TreeNode* a, TreeNode* b){
        if(!a && !b) return true;

        if(!a || !b) return false;

        bool result = true;
        result = result && checkSubTree(a->left, b->left);
        result = result && checkSubTree(a->right, b->right);

        if(a->val != b->val) result = false;

        return result;
    }
};