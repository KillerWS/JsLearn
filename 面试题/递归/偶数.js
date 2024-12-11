
function generateCombinations(arr) {
    const result = [];

    function recursion(path, index){
        if(index === arr.length){
            console.log("--------->")
            console.log(path)
            result.push([...path]) //一次递归完成应该是147...
            return;
        }

        for(let num of arr[index]){
            path.push(num);
            recursion(path, index+1);
            path.pop();
        }

    }

    recursion([], 0);
    return result;
}


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(generateCombinations(arr));