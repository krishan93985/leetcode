class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> diff(temperatures.size());
        stack<pair<int,int>> s;

        for(int i=temperatures.size()-1; i>=0; i--){
            while(!s.empty() && temperatures[i] >= s.top().first){
                s.pop();
            }

            diff[i] = s.empty() ? 0 : s.top().second - i;
            s.push(make_pair(temperatures[i],i));
        }

        return diff;
    }
};