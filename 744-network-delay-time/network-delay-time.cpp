class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<vector<pair<int,int>>> network(n+1);

        for(int i=0; i<times.size(); i++){
            int u = times[i][0], v = times[i][1], w = times[i][2];
            network[u].push_back({v,w});
        }

        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
        vector<int> minTime(n+1, INT_MAX);

        pq.push({0,k});
        minTime[k] = 0;

        while(!pq.empty()){
            pair<int,int> top = pq.top();
            pq.pop();

            int u = top.second, currW = top.first;
            for(auto node: network[u]){
                int v = node.first, w = node.second;
                if(currW + w < minTime[v]){
                    minTime[v] = currW + w;
                    pq.push({minTime[v],v});
                }
            }
        }

        int result = -1;
        for(int i=1; i<minTime.size(); i++) 
            result = max(result, minTime[i]);


        return result == INT_MAX ? -1 : result;
    }
};