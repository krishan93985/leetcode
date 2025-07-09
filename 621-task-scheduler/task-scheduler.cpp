class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        priority_queue<
            int
        > pq;
        queue<pair<int,int>> availableQ;

        unordered_map<char, int> freq;
        for(int i=0; i<tasks.size(); i++)       
            freq[tasks[i]]++;
        
        for(auto& task:freq){
            int count = task.second;
            pq.push(count);
        }

        int it = 0;
        while(!pq.empty() || !availableQ.empty()){
            it++;
            if(!pq.empty()){
                int process = pq.top();
                pq.pop();

                if(--process)
                    availableQ.push(make_pair(process--,it+n));
            }

            if(!availableQ.empty() && availableQ.front().second == it){

                pq.push(availableQ.front().first);
                availableQ.pop();
            }
        }

        return it;
    }
};