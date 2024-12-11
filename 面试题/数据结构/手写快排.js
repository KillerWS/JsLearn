// function bubble(){

// }

// let p = new Array(1,5,4,3)

// console.log(p.sort())

function quickSort(arr) {
    // 如果数组长度小于等于1，直接返回数组
    if (arr.length <= 1) {
        
        return arr;
    }

    // 选择基准值（通常选择第一个、最后一个或中间一个元素）
    const pivot = arr[Math.floor(arr.length / 2)];
    
    // 定义左右两个数组
    const left = [];
    const right = [];
    const equal = [];

    // 将数组中的元素与基准值比较，分配到左右数组中
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] === pivot) equal.push(arr[i]); // 等于基准值的放中间; // 跳过基准值
        if (arr[i] < pivot) {
            left.push(arr[i]); // 比基准值小的放左边
        } else if (arr[i] === pivot){equal.push(arr[i]);
        }else {
            right.push(arr[i]); // 比基准值大的放右边
        }
    }

    // 递归调用quickSort，并合并结果
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// 测试
const array = [3,2,3,1,2,4,5,5,6]
const sortedArray = quickSort(array);
console.log(sortedArray);
