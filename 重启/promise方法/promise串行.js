// 测试 Promise
const promise1 = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise1');
      console.log('promise1');
    }, 1000);
  });}
  const promise2 = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('promise2');
            console.log('promise2');
        }, 2000);
  });}
  const promise3 = ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise3');
      console.log('promise3');
    }, 5000);
  });}


  // ===== 核心函数：串行执行 =====
  // 传入一个 Promise 数组，依次等待执行
  async function runSerial(promises) {
    const results = [];
    for (let i = 0; i < promises.length; i++) {
      try {
        const res = await promises[i](); // 等待当前 Promise 完成
        results.push(res);
      } catch (err) {
        // 如果某个 Promise 报错，直接抛出中断
        throw err;
      }
    }
    return results;
  }
  
  function runXX(promises){
    let res = []
    let chain = promises.reduce((prev, next)=>{
        return prev
              .then(()=>next())
              .then(reason => res.push(reason))
    }, Promise.resolve());

    return chain.then(()=> res);
  }

  
  

  function runSerial2(promises){
    // let chain  = Promise.resolve(); //初始化空promise
    
    for(let i = 0 ; i < promises.length; i++){
        Promise.resolve().then(()=>{
            promises[i]().then(val=>{
                console.log(val)
            });
        })
        //return promises[i]();
    }

  }
  
  function runSerial3(tasks){
    const results = [];
    let chain = Promise.resolve();
    
    for(const task of tasks){
      chain = chain
          .then(()=>task())
          .then(res=>{
              results.push(res);
          })
    }

    return chain.then(()=> results);
  }

  function runSerialReduce(tasks){

    return tasks.reduce((prev, next)=>{
      return prev
        .then(()=> next())
        .then(res=>{
          results.push(res);
          return results;
        });
    }, Promise.resolve())
  }

  // function runSerialReduce2(tasks) {
  //   const results = [];
  //   const chain = tasks.reduce((prev, next) => {
  //     return prev
  //       .then(() => next())
  //       .then(res => { results.push(res); }); // ← 不 return，默认 undefined
  //   }, Promise.resolve());
  
  //   return chain.then(() => results); // ← 最终统一返回 results
  // }
  // 成功时 resolve 为 results；失败时仍会直接 reject（原因不变）
  
  // function runSerial(tasks){
  //   let ans = []
  //   let chain = tasks.reduce((prev, next)=>{
  //     return prev()
  //             .then(()=>next())
  //             .then(res => ans.push(res))
  //   }, Promise.resolve())

  //   return chain.then(()=> ans);
  // }
  
  
  // runSerial([promise1, promise2, promise3]);
  runXX([promise1, promise2, promise3])
    .then(reason=>{
      console.log(reason)
    });

//   function createPromise4() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("xD");
//         console.log("4");
//       }, 300);
//     });
//   }
  

//   createPromise4()
//   .then((value)=>{
//     console.log("ajja"+value)
//   })