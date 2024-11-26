// 向Array.prototype添加一个新的方法myMap
// Array.prototype.myMap = function(callback) {
//     let result = []; // 创建一个空数组用于存放结果
//     for (let i = 0; i < this.length; i++) {
//         // 为每个数组元素调用callback函数，并将结果添加到result数组中
//         // 注意，这里的this指向调用myMap的数组对象
//         result.push(callback(this[i], i, this));
//     }
//     return result; // 返回新的数组
// };

// // 测试自定义的myMap方法
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.myMap(item => item*2);

// console.log(squares); // 输出：[1, 4, 9, 16, 25]

Array.prototype.myMap = function(callback){
    let result = [];
    console.log(this)
    for(let i = 0; i < this.length; i++){
        console.log(callback(this[i]));
        //console.log(callback(this[i], i, this))
        result.push(callback(this[i]))
    }

    return result;
}
// 测试自定义的myMap方法
let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.myMap(item => item*2);
let squares = numbers.myMap(function(item) {
    return item * 2;
});
console.log(squares); // 输出：[1, 4, 9, 16, 25]