function generateCombinations(arr) {
    const result = [];

    // 定义递归函数，path 用于存储当前的组合，index 是当前处理的子数组索引
    function backtrack(path, index) {
        // 如果 path 的长度等于 arr 的长度，说明已完成一组组合
        if (index === arr.length) {
            
            result.push([...path]); // 将 path 的副本加入结果数组
            console.log(...path)
            return;
        }

        // 遍历当前子数组的每个元素
        for (let num of arr[index]) {
            path.push(num);          // 将当前元素添加到 path
            backtrack(path, index + 1); // 递归处理下一个子数组
            path.pop();              // 撤销选择
        }
        
        console.log("----->")
        console.log(result)
    }
    // 初始调用递归函数，从空路径和索引 0 开始
    backtrack([], 0);
    return result;
}

// 测试示例
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(generateCombinations(arr));
