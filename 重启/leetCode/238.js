// function productExceptSelf(nums) {
//     const n = nums.length;
//     const res = new Array(n).fill(1);
  
//     // 从左往右：计算左侧乘积
//     let left = 1;
//     for (let i = 0; i < n; i++) {
//       res[i] = left;
//       left *= nums[i];
//     }
  
//     // 从右往左：乘上右侧乘积
//     let right = 1;
//     for (let i = n - 1; i >= 0; i--) {
//       res[i] *= right;
//       right *= nums[i];
//     }
  
//     return res;
//   }

function productExceptSelf(nums) {
    const res = [];
    for (let i = 1; i < nums.length; i++) {
      let product = 1;
        if(i!==1) product *= nums[i-1];
        

      for (let j = i+1; j < nums.length; j++) {
          product *= nums[j]; // 跳过自己
      }
      res[i] = product;
    }
    return res;
  }
  

console.log(productExceptSelf([2,3,4,5]))