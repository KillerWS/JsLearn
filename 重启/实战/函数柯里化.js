//简单版本 : one
// function curry(fn){
//     return function curried(...args){
//         console.log("args.length", args.length, "fn.length", fn.length)
//         //参数够直接执行
//         if(args.length >= fn.length){
//             return fn.apply(this, args);
//         }

//         //是否继续收集参数
//         function conti(...rest){
//             return curried.apply(this, args.concat(rest));
//         };

//         return conti;

//     }
// }

// two
// function curry(fn){
//     //fn是add其实
//     return function curried(...args){
//         if(args.length >= fn.length){
//             return fn.apply(this, args);
//         }

//         function curriedAgain(...nextArgs){
//             return curried.apply(this, args.concat(nextArgs))
//         }

//         return curriedAgain;
//     }
// }

// three
// function curry(fn){
//     return function curried(...args){

//         if(args.length === fn.length){
//             return fn.apply(this, args);
//         }

//         return function(...rest){
//             //注意 顶层和这里都是curried!!! 因为相当于递归， 每次要拼接参数直到最终的那个
//             return curried.apply(this, args.concat(rest));
//         }
//     }
// }

//four
function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args);
        }
        return function(...rest){
            return curried.apply(this, args.concat(rest))
        }
    }
}

function curry2(fn){
    return function curried(...args){
        if(args.length === fn.length){
            return fn.apply(this, args);
        }
        return function next(...rest){
            if(rest.length === 0){
                return fn.apply(this, args);
            }
            return curried.apply(this, args.concat(rest))
        }

    }
}


//箭头函数的形式
function curryArrow(fn){
    
}


function add(a, b, c) {
    return a + b + c;
  }
  
  //const add = (...args) => args.reduce((a,b)=> a+b, 0)
  const curriedAdd = curry(add);
  const curriedAdd2 = curryArrow(add);
  console.log(curriedAdd(1)(2)(3)); // 输出 6
  console.log(curriedAdd(1, 2)(3)); // 输出 6
  console.log(curriedAdd(1)(2, 3)); // 输出 6
  //console.log(curriedAdd2(1)(2, 3)); // 输出 6
  console.log(curriedAdd(1)(2)(3)()); // 输出 6
