function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// const context = this;
// const args = arguments;

// timer = setInterval(()=>{
//     func.apply(context, args)
// }, dely)


// 使用示例
debounce(function() {
    console.log('Resize event handler called!');
}, 3000);
