//  function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  function sleep(ms){
    return new Promise((resolve)=>{
        setInterval(()=>{
            resolve()
        }, ms)
    })
  }
  //return new Promise(resolve => setTimeout(resolve, 1000))
  //return new Promise(resolve => setTimeout(resolve,ms))
  async function example() {

    while(true){ 
        console.log("开始:红灯");
        await sleep(3000);
        console.log("等待3秒后:绿灯");
        await sleep(2000); // 等待2秒
        console.log("等待2秒后:黄灯");
        await sleep(1000); // 等待1秒
        console.log("最终等待1秒");
        // 继续执行其他操作 
    }
    
  }

example();
  