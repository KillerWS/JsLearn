function myNew(constructor, ...args) {
    // 创建一个空对象，其原型指向构造函数的prototype属性
    const obj = Object.create(constructor.prototype);
    
    // 使用apply方法调用构造函数，并将this绑定到新创建的对象
    const result = constructor.apply(obj, args);
    
    // 如果构造函数返回了一个对象，则返回该对象；否则返回新创建的对象
    return (result !== null && typeof result === 'object') ? result : obj;
  }

  function myNewNew(constructor, ...args){
    const obj = Object.create(constructor.prototype)

    const result = constructor.apply(obj, args);
    return (result !== null && typeof result === 'object') ? result : obj;
  }

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

const alice = myNew(Person, 'Alice', 30);
alice.greet(); // 输出: Hello, my name is Alice and I am 30 years old.

console.log(alice instanceof Person); // 输出: true
console.log(alice.__proto__ === Person.prototype); // 输出: true

console.log(Person.prototype)
console.log(Person.__proto__)