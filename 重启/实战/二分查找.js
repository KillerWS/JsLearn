//二分查找

function binarySearch(nums, target) {
    if(nums.length ===0) return ;
    let beacon = (nums.length-1)/2;
    let left = 0;
    let right = nums.length -1;
    // nums.sort();
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return [mid, nums[mid]];
        if(nums[mid] < target){
            left = mid + 1; //+1 是因为肯定不是mid， nums[mid] < target 了已经
        }else{
            right = mid - 1;
        }
    }

    return -1;

}


console.log(binarySearch([1,5,6,7,8], 5))