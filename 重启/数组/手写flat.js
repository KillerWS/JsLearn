/**
 * 手写 Array.prototype.flat()
 * @param {number} depth - 扁平化深度，默认为1
 * @returns {Array} - 扁平化后的数组
 */
// Array.prototype.myFlat = function(depth = 1) {
//     // 1. 如果深度为0或负数，直接返回原数组的拷贝
//     if (depth <= 0) {
//         return this.slice();
//     }
    
//     // 2. 使用 reduce 遍历数组
//     return this.reduce((result, item) => {
//         // 3. 如果当前项是数组，递归调用 flat，深度减1
//         if (Array.isArray(item)) {
//             return result.concat(item.myFlat(depth - 1));
//         }
//         // 4. 如果不是数组，直接添加到结果中
//         return result.concat(item);
//     }, []);
// }

Array.prototype.myFlat = function(depth = 1){

    if(this.length === 0) return [];
    if(depth === 0) return this.slice();
    let ans = this.map((e)=>{
        if(!Array.isArray(e)){
            return e;
        }else{
            //console.log(e.myFlat(depth - 1))
            return e.myFlat(depth - 1);
        }
    })
    
    // console.log(ans, [].concat(...ans))
    return [].concat(...ans); //这里相当于手动flat 一次， 不然返回的还是
} 


// ==================== 测试用例 ====================

let a = [1,3,4,[3,6,[3,2]]]
console.log(a, [].concat(...a))

console.log('========== 测试1: 基础扁平化（默认深度1）==========\n');

const arr1 = [1, 2, [3, 4]];
console.log('原数组:', arr1);
console.log('myFlat():', arr1.myFlat());
console.log('预期:', [1, 2, 3, 4]);
console.log('原生flat():', arr1.flat());
console.log();


console.log('========== 测试2: 多层嵌套（深度2）==========\n');

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log('原数组:', arr2);
console.log('myFlat(2):', arr2.myFlat(2));
console.log('预期:', [1, 2, 3, 4, 5, 6]);
console.log('原生flat(2):', arr2.flat(2));
console.log();


console.log('========== 测试3: 深层嵌套（深度3）==========\n');

const arr3 = [1, [2, [3, [4, [5]]]]];
console.log('原数组:', arr3);
console.log('myFlat(3):', arr3.myFlat(3));
console.log('预期:', [1, 2, 3, 4, [5]]);
console.log('原生flat(3):', arr3.flat(3));
console.log();


console.log('========== 测试4: 无限深度（Infinity）==========\n');

const arr4 = [1, [2, [3, [4, [5, [6]]]]]];
console.log('原数组:', arr4);
console.log('myFlat(Infinity):', arr4.myFlat(Infinity));
console.log('预期:', [1, 2, 3, 4, 5, 6]);
console.log('原生flat(Infinity):', arr4.flat(Infinity));
console.log();


console.log('========== 测试5: 深度为0（不扁平化）==========\n');

const arr5 = [1, [2, [3, 4]]];
console.log('原数组:', arr5);
console.log('myFlat(0):', arr5.myFlat(0));
console.log('预期:', [1, [2, [3, 4]]]);
console.log('原生flat(0):', arr5.flat(0));
console.log();


console.log('========== 测试6: 空数组和空元素 ==========\n');

const arr6 = [1, 2, [], [3, 4, []]];
console.log('原数组:', arr6);
console.log('myFlat():', arr6.myFlat());
console.log('预期:', [1, 2, 3, 4]);
console.log('原生flat():', arr6.flat());
console.log();


console.log('========== 测试7: 数组空位（holes）==========\n');

const arr7 = [1, 2, , 4, [5, , 7]];
console.log('原数组:', arr7);
console.log('myFlat():', arr7.myFlat());
console.log('预期:', [1, 2, 4, 5, 7] + ' (空位被移除)');
console.log('原生flat():', arr7.flat());
console.log();


console.log('========== 测试8: 混合数据类型 ==========\n');

const arr8 = [1, 'hello', [true, null, [undefined, {name: 'obj'}]]];
console.log('原数组:', arr8);
console.log('myFlat(2):', arr8.myFlat(2));
console.log('预期:', [1, 'hello', true, null, undefined, {name: 'obj'}]);
console.log('原生flat(2):', arr8.flat(2));
console.log();


console.log('========== 测试9: 已经是扁平数组 ==========\n');

const arr9 = [1, 2, 3, 4, 5];
console.log('原数组:', arr9);
console.log('myFlat():', arr9.myFlat());
console.log('预期:', [1, 2, 3, 4, 5]);
console.log('原生flat():', arr9.flat());
console.log();


console.log('========== 测试10: 复杂嵌套 ==========\n');

const arr10 = [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]]];
console.log('原数组:', arr10);
console.log('myFlat(2):', arr10.myFlat(2));
console.log('预期:', [1, 2, 3, 4, 5, 6, 7, [8, 9]]);
console.log('原生flat(2):', arr10.flat(2));
console.log();


console.log('========== 测试11: 负数深度（应该当作0处理）==========\n');

const arr11 = [1, [2, 3]];
console.log('原数组:', arr11);
console.log('myFlat(-1):', arr11.myFlat(-1));
console.log('预期:', [1, [2, 3]]);
console.log('原生flat(-1):', arr11.flat(-1));
console.log();


console.log('========== 所有测试完成！==========');

