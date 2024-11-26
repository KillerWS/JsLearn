const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve('foo'), 100);
});

Promise.all([promise1, promise2, promise3])
.then(values=>{
    console.log(values); // 输出：[3, 42, "foo"]
}).catch(error=>{
    console.log(error);
})