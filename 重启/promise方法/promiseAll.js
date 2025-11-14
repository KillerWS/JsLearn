


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve('foo'), 100);
  });
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject('fooErr'), 50);
  });

//one
// Promise.myPromiseAll = function(promises){
    
//     return new Promise((reslove, reject)=>{
//         let res = [];
//         promises.forEach(promise => {
//             Promise.resolve(promise).then(value=>{
//                 res.push(value);
//                 if(res.length ===promises.length ) reslove(res);
//             }, reason=>{
//                 reject(reason);
//             })
//         });

//     })
// }

// Promise.myPromiseAll([promise1, promise2, promise3])
// .then(values=>{
//     console.log(values); // 输出：[3, 42, "foo"]
// }).catch(error=>{
//     console.log(error);
// })


//two
Promise.myPromiseAll = function(promises){
    
    return new Promise((resolve, reject)=>{
        if (promises.length === 0) resolve([]); // 空数组情况
        const res = [];
        let completed = 0;
        promises.forEach((promise, index) => {
                Promise.resolve(promise).then(value=>{
                    res[index] = value;
                    completed++;
                    if(completed === promises.length ) resolve(res)
                }, error=>{
                    reject(error)
                })
        });
    })
}

Promise.myPromiseAll([promise1, promise2, promise3,promise4])
    .then(values =>{
        console.log(values)
    }).catch(errors=>{
        console.log(errors)
    })