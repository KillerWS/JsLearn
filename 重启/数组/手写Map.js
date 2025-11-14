Array.prototype.myMap = function(callBack){
    const nums = this;
    const ans = []
    console.log(this)
    console.log(callBack)
    for(let i=0;i<nums.length;i++){
        ans.push(callBack(nums[i]))
    }
    console.log(nums)
    return ans;
}

let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.myMap(item => item*2);
let squares = numbers.myMap(function(item) {
    return item * 2;
});

console.log(squares)