// 使用apply 和 call 写出bind

Function.prototype.myBind = function(context){
    var fn = this;
    // 取出绑定时传入的参数（去掉第一个 context）
    var args = Array.prototype.slice.call(arguments, 1);

    return function(){
        var newArgs = Array.prototype.slice.call(arguments);

        console.log(arguments, newArgs)

        return fn.apply(context, args.concat(newArgs));
    }

    // return function(){
    //     var newArgs = Array.prototype.slice.call(arguments);
    //     return fn.apply(context, args)
    // }

}

// --- 测试 ---
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  const person = { name: 'Alice' };
  
  // 绑定 this 和部分参数
  const greetAlice = greet.myBind(person, 'Hello');
  
  // 调用
  greetAlice('!'); // 输出：Hello, Alice!