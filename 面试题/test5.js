function myNew(constructor, ...args){
    const obj = Object.create(constructor.prototype)
    
    const result = constructor.apply(obj, args);

    return (typeof result === 'object' && result !== null) ? result : obj;
}


  
  // 示例
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  const person1 = myNew(Person, 'Alice', 30);
  person1.sayHello(); // 输出 "Hello, my name is Alice and I'm 30 years old."