




function sort(arr){
    let len = arr.length;

    let map = new Map();

    for(let i=0;i<len;i++){
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
    return;

}


// But, 考虑数组太大的时候? 改进过后的快排: 每次找到排序区间， 扩展到全部

let arr = [322, 833,5, 1, 8];

console.log(sort(arr))