function outerFunction() {
    var outerVariable = 10; // 在outerFunction作用域中声明的变量
  
    function innerFunction() {
      console.log(outerVariable); // innerFunction可以访问outerVariable
    }
  
    return innerFunction; // 返回内部函数
  }
  
  var closure = outerFunction(); // 将outerFunction的返回值赋给变量closure
  closure(); // 调用closure函数
  