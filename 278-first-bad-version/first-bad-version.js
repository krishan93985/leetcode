/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        let mid;
        //1, 2, 3, 4, 5
        while(left < right){
            mid = Math.floor((right+left)/2);
            const isBad = isBadVersion(mid);

            if(isBad){
                right = mid;
            } else {
                left = mid+1;
            }
        }

        return right;
    };
};