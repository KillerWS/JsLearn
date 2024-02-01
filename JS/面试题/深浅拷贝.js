const originalObj = {
    a: 1,
    b: {
      c: 2
    }
  };
  
  const shallowCopyObj = { ...originalObj }; // 使用扩展运算符进行浅拷贝
  
  shallowCopyObj.b.c = 3; // 修改浅拷贝对象的嵌套属性会影响原始对象
  shallowCopyObj.a =4;
  console.log(originalObj.b.c); // 输出 3，因为两者共享嵌套对象
  console.log(originalObj.a);// 输出 1,没变
  