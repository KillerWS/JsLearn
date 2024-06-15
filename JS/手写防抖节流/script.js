document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    let clickCount = 0;
  
    // 防抖函数
    function debouncedClickHandler() {
      clickCount++;
      clickCountDisplay.textContent = clickCount;
    }
  
    // 创建防抖函数
    const debounce = (func, wait) => {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    };
  
    // 应用防抖到点击事件处理函数
    clickButton.addEventListener('click', debounce(debouncedClickHandler, 300));
  });