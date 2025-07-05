class Solution {
public:
    vector<int> partitionLabels(string s) {
        unordered_map<char,int> lastI;

        for(int i=0; i<s.size(); i++){
            lastI[s[i]] = i;
        }

        vector<int> result;
        for(int i=0; i<s.size();){
            int end = lastI[s[i]];
            for(int j=i; j<=end; j++){
                end = max(end, lastI[s[j]]);
            }

            result.push_back(end-i+1);
            i=end+1;
        }

        return result;
    }
};