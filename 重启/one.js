function throttle1(fn, limit) {
    let lastRan;
    let lastFunc;
    return function(){
        const context = this;
        const args = arguments;
        if(!lastRan){
            fn.apply(context, ...args);
            lastRan = Date.now();
        }else{
            clearTimeout(lastFunc);
            const remaining = limit - (Date.now() - lastRan);
            lastFunc = setTimeout(()=>{
                if(Date.now() - lastRan>= limit){
                    fn.apply(context, args);
                    lastRan = Date.now();
                }
            }, Math.max(remaining, 0))
        }
    }
}

/** ✅ 测试部分 **/
function testThrottle() {
    console.log("=== 节流函数测试开始 ===");
  
    let count = 0;
    const fn = () => {
      count++;
      console.log(`函数执行第 ${count} 次, 时间: ${Date.now() - start}ms`);
    };
  
    const throttled = throttle1(fn, 1000);
    const start = Date.now();
  
    // 模拟频繁调用
    let i = 0;
    const interval = setInterval(() => {
      throttled();
  
      if (++i === 10) {
        clearInterval(interval);
        setTimeout(() => {
          console.log("=== 测试结束 ===");
        }, 1500);
      }
    }, 200);
  }
  
  testThrottle();


// 放抖函数
function debounce(fn, delay){
    let timer ;
    return function(){
        const context =this;
        const args = arguments;
        if(timer){
            clearTimeout(timerId)
        }
        timer = setTimeout(()=>{
            fn.apply(context, ...args)
        }, delay)
    }
}

function throttleX(fn, wait){
    let lastRan;
    let lastFunc;

    return function(){
        const context = this;
        const args = arguments;        
        let remaining = wait - (Date.now() - lastRan)
        if(!lastRan){
            fn.apply(context, ...args);
        }else{
            lastFunc = setTimeout(()=>{
                if(remaining <= 0){
                    fn.apply(context, ...args);
                    lastRan = Date.now()
                }
            }, Math.max(remaining, 0))        
        }
    }
}