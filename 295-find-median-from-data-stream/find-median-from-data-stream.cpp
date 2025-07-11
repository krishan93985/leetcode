class MedianFinder {
    priority_queue<int> maxPq; // floor(len/2) = N
    priority_queue<int, vector<int>, greater<int>> minPq; //ceil(len/2) = N
public:
    MedianFinder() {
    }
    
    void addNum(int num) { 
        if(maxPq.empty() || num < maxPq.top())
            maxPq.push(num);
        else
            minPq.push(num);
        
        //rebalancing of heaps
        if(maxPq.size() < minPq.size()){
            int top = minPq.top();
            minPq.pop();
            maxPq.push(top);
        } else if(maxPq.size() > minPq.size()+1){
            int top = maxPq.top();
            maxPq.pop();
            minPq.push(top);
        }
    }
    
    double findMedian() {
        int len = minPq.size() + maxPq.size();

        // cout << minPq.size() << maxPq.size();

        if(len%2){
            return maxPq.top();
        } else {
            return (double(minPq.top()) + double(maxPq.top()))/2;
        }
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */