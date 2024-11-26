const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(new Error('Failed'));

// const promise2 = Promise.resolve(4);
const promise3 = Promise.resolve(7);
const promise4 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("杀杀杀")
    }, 6000)
})

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values); // 不会执行，因为 promise2 是 rejected
//   })
//   .catch((reason) => {
//     console.error(reason); // 输出：Error: Failed
//   });


Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((values)=>{
    console.log(values);
  })

