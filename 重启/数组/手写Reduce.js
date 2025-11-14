// 手写 reduce - 第一步：最简版本
Array.prototype.myReduce = function(callback, initialValue){
    // 步骤1: 创建累积值变量，初始值就是传入的 initialValue
    let accumulator = initialValue;
    
    // 步骤2: 遍历数组的每个元素
    for(let i = 0; i < this.length; i++){
        // 步骤3: 调用 callback，传入累积值和当前元素
        //        把 callback 的返回值赋给 accumulator（注意是 = 不是 +=）
        accumulator = callback(accumulator, this[i]);
        //accumulator 不是 += 因为
    }
    
    // 步骤4: 返回最终的累积值
    return accumulator;
}

console.log('========== 示例1: 数组求和 ==========')
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, cur) => {
    console.log(`累积值: ${acc}, 当前值: ${cur}, 结果: ${acc + cur}`)
    return acc + cur;
}, 0);
console.log('最终结果:', sum); // 15

console.log('\n========== 示例2: 数组求积 ==========')
const product = numbers.myReduce((acc, cur) => acc * cur, 1);
console.log('最终结果:', product); // 120

// console.log('\n========== 示例3: 找最大值 ==========')
// const max = numbers.myReduce((acc, cur) => acc > cur ? acc : cur);
// console.log('最大值:', max); // 5

// console.log('\n========== 示例4: 数组扁平化 ==========')
// const nested = [[1, 2], [3, 4], [5]];
// const flat = nested.myReduce((acc, cur) => acc.concat(cur), []);
// console.log('扁平化结果:', flat); // [1, 2, 3, 4, 5]

// console.log('\n========== 示例5: 计数（统计出现次数） ==========')
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const count = fruits.myReduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
// }, {});
// console.log('统计结果:', count); // { apple: 3, banana: 2, orange: 1 }

// console.log('\n========== 示例6: 对象属性求和 ==========')
// const cart = [
//     { name: '苹果', price: 10 },
//     { name: '香蕉', price: 5 },
//     { name: '橙子', price: 8 }
// ];
// const total = cart.myReduce((acc, item) => acc + item.price, 0);
// console.log('总价:', total); // 23