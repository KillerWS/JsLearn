function generateCombinations(arr) {
    const result = [];


    function digui(pre, index){
        if(index===arr.length){
            result.push(...pre);
            return;
        }

        for(let num of arr[index]){
            pre.push(num);
            digui(pre, index+1);
            pre.pop();
            //console.log(p)
        }
    }
    
    digui([], 0);

    return result;
}

// 测试示例
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(generateCombinations(arr));
