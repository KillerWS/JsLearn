
// 把 fn(...AbortSignal, callback)
// 转化为
// (...args) => new Promise((resolve, reject)=>{
//     fn(...args, (err, result)=>{
//         if(err) reject(err);
//         else resolve(result);
//     })


// });

function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject)=>{
            fn(...args, (err, result)=>{
                if(err) reject(err);
                else resolve(result);
            })
        })
    }
}


function getData(id, cb) {
    setTimeout(() => {
      if (id < 0) cb(new Error("invalid id"));
      else cb(null, { id, name: "Alice" });
    }, 300);
  }
  
const getDataAsync = promisify(getData);
  
  getDataAsync(1)
    .then(res => console.log(res))
    .catch(err => console.error(err));