const obj1 = {
    name: 'Alice',
    sayHello: function() {
    
      console.log(this.name);
    }
  };
  
  const obj2 = {
    name: 'Bob',
    sayHello: function() {
      console.log(this.name);
    }
  };
  
  const sayHello = obj1.sayHello;
   sayHello(); // undefined（因为此时 this 指向全局对象）
  
  const boundSayHello = sayHello.bind(obj1);
  boundSayHello(); // Alice
  
  const anotherSayHello = obj1.sayHello.bind(obj2);
  anotherSayHello(); // Bob

  