function throttle(fn, wait) {
    let lastTime = 0;
    let timer = null;
  
    return function(...args) {
      const now = Date.now();
      const context = this;
  
      const remaining = wait - (now - lastTime);
      if (remaining <= 0) {
        // 已超过等待时间，立即执行
        fn.apply(context, args);
        lastTime = now;
        clearTimeout(timer);
      } else if (!timer) {
        // 否则设置定时器，等剩余时间到了再执行
        timer = setTimeout(() => {
          fn.apply(context, args);
          lastTime = Date.now();
          timer = null;
        }, remaining);
      }
    };
  }

  const throttleFn = throttle(function(){
    console.log('xD')
}, 3000)

throttleFn()
throttleFn()