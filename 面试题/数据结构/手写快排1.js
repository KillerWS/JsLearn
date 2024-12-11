function quickSort(arr){
    // 如果数组长度小于等于1，直接返回数组, 一定要加，
    // 否则在最后一次递归时， 会报错
    if (arr.length <= 1) {
        return arr;
    }
    // 选择基准值: 这里是数组中间某个值
    const pivot = arr[Math.floor(arr.length / 2)];

    // 定义左右两个数组
    const left = [];
    const right = [];

    // 将数组中的元素与基准值比较，分配到左右数组中
    for(let i = 0;i< arr.length;i++){
        if(arr[i] === pivot) continue; // 跳过基准值
        if(pivot> arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

   return [...quickSort(left), pivot, ...quickSort(right)];
}


// 测试
const array = [5, 3, 8, 6, 2, 7, 4, 1];
const sortedArray = quickSort(array);
console.log(sortedArray);
console.log(Math.floor(9/2))