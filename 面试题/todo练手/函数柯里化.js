// function curry(fn) {
//     return function curried(...args) {
//       // 如果提供的参数数量足够，调用原函数
//       if (args.length >= fn.length) {
//         return fn.apply(this, args);
//       }
//       // 否则返回一个新的函数等待更多参数
//       return function (...nextArgs) {
//         return curried.apply(this, args.concat(nextArgs));
//       };
//     };
//   }

  function curry(fn){
    return function curried(...args){
        //如果就一个函数参数， 就返回原函数
        if(args.length >= fn.length){
            return fn(...args);
        }

        return function(...nextArgs){
            return curried(...args, ...nextArgs)
        }
    }
  }

  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // 输出 6
  console.log(curriedAdd(1, 2)(3)); // 输出 6
  console.log(curriedAdd(1)(2, 3)); // 输出 6
  