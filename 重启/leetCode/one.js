
function generateCombinations(arrs){
    // if(!Array.isArray(arrs)) return arrs;
    let ans = [];
    //for(let i =0;i<arr.length;i++){
    // for(let i =0;i<arrs.length;i++){
    //     ans.push(generateCombinations(arrs[i]));
    // }
    function backtrack(path, index){
        if(index === arrs.length){
            ans.push([...path]); // 将 path 的副本加入结果数组
            return ;
        }

        for(const arr of arrs[index]){
            path.push(arr);
            console.log(path+" => "+ new Number(index+1))
            backtrack(path, index + 1);
            path.pop()
        }
        
    }

    backtrack([], 0)
    return ans;
}



let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(generateCombinations(arr));

