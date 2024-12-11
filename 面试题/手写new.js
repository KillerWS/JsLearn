function myNew(constructor, ...args) {
    // 1. 创建一个空对象，原型指向构造函数的 prototype
    const obj = Object.create(constructor.prototype);

    // 2. 执行构造函数，将 this 绑定到新创建的对象
    const result = constructor.apply(obj, args);
  
    // 3. 如果构造函数返回的是一个对象，则返回该对象；否则返回新创建的对象
    return result instanceof Object ? result : obj;
  }
  
  // 示例构造函数
  function Person(name, age, xx) {
    this.name = name;
    this.age = age;
    this.xx = xx
  }
  
  function myNewFunction(constructor, ...args){
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);
    
    return result instanceof Object ? result : obj;
    
  }

  const person = myNew(Person, "Alice", 25,11);
  console.log(person); // 输出：{ name: "Alice", age: 25 }
  console.log(person instanceof Person); // true
  