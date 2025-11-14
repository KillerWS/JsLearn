function printType(param){
    return Object.prototype.toString.call(param);
}

// ==================== 测试用例 ====================

console.log('========== 测试1: 基本数据类型 ==========\n');

console.log('数字:', printType(123));
console.log('预期: [object Number]\n');

console.log('字符串:', printType('hello'));
console.log('预期: [object String]\n');

console.log('布尔值:', printType(true));
console.log('预期: [object Boolean]\n');

console.log('undefined:', printType(undefined));
console.log('预期: [object Undefined]\n');

console.log('null:', printType(null));
console.log('预期: [object Null]\n');

console.log('Symbol:', printType(Symbol('test')));
console.log('预期: [object Symbol]\n');

console.log('BigInt:', printType(BigInt(123)));
console.log('预期: [object BigInt]\n');


console.log('\n========== 测试2: 引用数据类型 ==========\n');

console.log('对象:', printType({}));
console.log('预期: [object Object]\n');

console.log('数组:', printType([]));
console.log('预期: [object Array]\n');

console.log('函数:', printType(function(){}));
console.log('预期: [object Function]\n');

console.log('箭头函数:', printType(() => {}));
console.log('预期: [object Function]\n');

console.log('Date:', printType(new Date()));
console.log('预期: [object Date]\n');

console.log('RegExp:', printType(/test/));
console.log('预期: [object RegExp]\n');

console.log('Error:', printType(new Error('test')));
console.log('预期: [object Error]\n');


console.log('\n========== 测试3: 特殊对象 ==========\n');

console.log('Map:', printType(new Map()));
console.log('预期: [object Map]\n');

console.log('Set:', printType(new Set()));
console.log('预期: [object Set]\n');

console.log('WeakMap:', printType(new WeakMap()));
console.log('预期: [object WeakMap]\n');

console.log('WeakSet:', printType(new WeakSet()));
console.log('预期: [object WeakSet]\n');

console.log('Promise:', printType(Promise.resolve()));
console.log('预期: [object Promise]\n');


console.log('\n========== 测试4: 包装对象 ==========\n');

console.log('new Number():', printType(new Number(123)));
console.log('预期: [object Number]\n');

console.log('new String():', printType(new String('hello')));
console.log('预期: [object String]\n');

console.log('new Boolean():', printType(new Boolean(true)));
console.log('预期: [object Boolean]\n');


console.log('\n========== 测试5: 类数组对象 ==========\n');

console.log('arguments:', printType((function(){ return arguments })()));
console.log('预期: [object Arguments]\n');


console.log('\n========== 测试6: 自定义类 ==========\n');

class MyClass {}
console.log('自定义类实例:', printType(new MyClass()));
console.log('预期: [object Object]（自定义类实例被识别为普通对象）\n');


console.log('\n========== 测试7: Math 和 JSON ==========\n');

console.log('Math:', printType(Math));
console.log('预期: [object Math]\n');

console.log('JSON:', printType(JSON));
console.log('预期: [object JSON]\n');


console.log('\n========== 所有测试完成！ ==========')