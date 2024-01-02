
console.log("程序开始");
const promise = new Promise((resolve, reject)=>{
   
    
    // 异步操作
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('successAA');
    } else {
      reject('errorAA');
    }
  }, 1000);
}).then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  });