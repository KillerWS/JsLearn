function outerFunction() {
    console.log("xx")
    let count = 0;
    function innerFunction() {
      count++;
      console.log(count);
    }
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure(); // 输出 1
  myClosure(); // 输出 2
  //outerFunction();


function sisa(){
    let a = 1;    
}

function init() {
    var name = "Mozilla"; // name 是 init 创建的局部变量
    function displayName() {
      // displayName() 是内部函数，它创建了一个闭包
      console.log(name); // 使用在父函数中声明的变量
    }
    displayName();
  }
  init();