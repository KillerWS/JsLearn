const promise1 = Promise.resolve(3);
//const promise2 = Promise.reject('Failed');

const promise2 = Promise.resolve(4);
const promise3 = Promise.resolve(7);
const promise4 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("杀杀杀")
    }, 3000)
})

// const promises = [promise1, promise2, promise3]
function myPromiseAll(promises){
    return new Promise((resolve, reject)=>{
        //
        const results = [];
        let resolvedCount = 0;
        try {
             // 遍历promise 数组
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                (value)=>{
                    results[index] = value;
                    resolvedCount++;
                    
                    if(resolvedCount == 3){
                        resolve(results)
                    }
                },
                (reason)=>{
                    reject(reason)
                }
            )


        if (promises.length === 0) {
        resolve([]);
      }
        });
        
        
        } catch (error) {
            
        }
       
    })
}

myPromiseAll([promise1, promise2, promise4])
.then((values) => {
  console.log(values); // 输出：[3, 42, 'foo']
})