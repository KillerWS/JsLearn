const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 输出：15


function deepOEqual(obj1, obj2) {
    // 检查两个对象是否为 null 或者不是对象类型
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    // 获取两个对象的属性数组
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // 比较两个对象的属性数量是否相等
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // 递归比较两个对象的每个属性值
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepOEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }


  console.log(deepOEqual({a:1, b:{a:1}},{a:1, b:1}))