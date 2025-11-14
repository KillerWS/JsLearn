


// 判断质数（√n 试除法）
function isPrime(n) {
    if (n <= 1) return false;     // 1、0、负数都不是质数
    if (n === 2) return true;     // 2 是质数
    if (n % 2 === 0) return false; // 其他偶数不是质数
  
    // 从 3 开始，只试奇数
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false; // 有因子 → 不是质数
    }
  
    return true; // 没被整除 → 是质数
  }


console.log(isPrime(13))

function uniquePrimes(arr){
    //仅保留大于1的整数
    const set = new Set(); // 去重

    //判断质数， √n 试除法
    for (const num of arr) {
        if (isPrime(num)) {
        set.add(num);
        }
    }
    
    // 转成数组并升序排序
    return Array.from(set).sort((a, b) => a - b);
  
}


console.log(uniquePrimes([2, 3, 5, 3, 4, 9, 11, 1, 0, -7]));     // [2, 3, 5, 11]
console.log(uniquePrimes([17, 17, 16, 15, 14, 13, 2]));          // [2, 13, 17]
console.log(uniquePrimes([-5, -3, -2, 0, 1, 4, 6, 8]));          // []
console.log(uniquePrimes([97, 89, 97, 4, 25, 49, 83, 2, 3]));    // [2, 3, 83, 89, 97]
