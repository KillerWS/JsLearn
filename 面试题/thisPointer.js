function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func()
      // func.apply(context, args);
    }, wait);
  };
}

// 定义一个需要防抖的函数
function handleResize() {
  console.log('Window resized');
}

// 创建一个防抖版本的 handleResize 函数
const debouncedHandleResize = debounce(handleResize, 300);

debouncedHandleResize()
// 将防抖版本的函数绑定到 window 的 resize 事件上
//window.addEventListener('resize', debouncedHandleResize);