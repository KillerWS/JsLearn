
function debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(() => {
            func.apply(this, args) //延迟之后执行传入的函数
        }, delay)
    }
}

const deFn = debounce(function(){
    console.log('xD')
}, 3000)


