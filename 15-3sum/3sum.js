/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);

    const output = []

    for(let i=0; i<nums.length-2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let a=nums[i];
        let l=i+1, r=nums.length-1;

        while(l<r){
            let lookup = -a, remSum = nums[l]+nums[r];
            if(remSum === lookup){
                output.push([nums[i], nums[l], nums[r]]);

                while(l<r && nums[l] === nums[l+1]) l++;
                while(l<r && nums[r] === nums[r-1]) r--;

                l++;
                r--;
            } else if(remSum > lookup){
                r--;
            } else{
                l++;
            }
        }
    }

    return output;
};