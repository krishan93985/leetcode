class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        priority_queue<
            pair<double, int>,
            vector<pair<double, int>>,
            greater<pair<double, int>>
            > distancePq;
        vector<vector<int>> result;
        for(int i=0; i<points.size(); i++){
            auto& point = points[i];
            int x = point[0], y = point[1];
            int xsquare = x*x, ysquare = y*y;

            double root = sqrt(xsquare + ysquare);

            distancePq.push(make_pair(root,i));
        }

        while(k){
            result.push_back(points[distancePq.top().second]);
            distancePq.pop();
            k--;
        }              

        return result;
    }
};