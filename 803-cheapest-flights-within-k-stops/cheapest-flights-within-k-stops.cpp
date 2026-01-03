class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int,int>>> cities(n+1);

        for(int i=0; i<flights.size(); i++){
            int u = flights[i][0], v = flights[i][1], w = flights[i][2];
            cities[u].push_back({v,w});
        }

        queue<pair<int,pair<int,int>>> q; // {stops, {v,w}}
        vector<int> dist(n, INT_MAX);

        q.push({0,{src,0}});
        dist[src] = 0;

        while(!q.empty()){
            pair<int,pair<int,int>> top = q.front();
            q.pop();

            int u = top.second.first;
            int currW = top.second.second;
            int stops = top.first;

            if(stops > k) continue;

            for(auto node: cities[u]){
                int v = node.first, w = node.second;
                if(currW + w < dist[v] && stops <= k){
                    dist[v] = currW + w;
                    q.push({stops+1,{v, dist[v]}});
                }
            }
        }

        return dist[dst] == INT_MAX ? -1 : dist[dst];  
    }
};