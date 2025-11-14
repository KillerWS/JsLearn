//one
// function myNew(constructor, ...args){
//     const obj = {};
    
//     Object.setPrototypeOf(obj, constructor.prototype);

//     //执行构造函数，将 this 绑定到新创建的对象
//     console.log(args)
//     console.log(...args)
//     const result = constructor.apply(obj, args)

//     return result instanceof Object ? result : obj;
// }


  // 示例构造函数

//two
// function myNew(constructor, ...args){
//     const obj = {}  
//     Object.setPrototypeOf(obj, constructor.prototype);
//         console.log(args)
//     console.log(...args)

//     const result = constructor.apply(obj, args);
    
//     return result instanceof Object ? result : obj
// }

//three
function myNew(constructor, ...args){
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);

    let result = constructor.apply(obj, args);

    return typeof result === 'object' ? result : obj;
}

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