// 1. 
// new 调用 : new method() -> 新对象 

// 2.
// 直接调用 : method() -> 全局对象

// 3.
// 通过对象调用 : obj.method() -> 前面的对象

// 4.call, apply, bind : method.call(ctx) -> 第一个参数

// 在创建执行上下文的时候去确定this的指向
function fn(){
    console.log(this)
}

const newFn = fn.bind(1)

// new newFn()

let o = {x:1}
function f(y){
    return this.x+y;
}
let g = f.bind(o)
console.log(g(2))