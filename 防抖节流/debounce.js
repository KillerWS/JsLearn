function deBou(func, delay){
    let timerId

    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func.apply(this, args)
        }, delay)
    }
}

