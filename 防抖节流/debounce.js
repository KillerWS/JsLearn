function deBou(func, delay){
    let timerId

    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func.apply(this, args)
        }, delay)
    }
}

function throttle(func, limit){
    let lastFunc;
    let lastRan;

    return funciton(){
        const context = this;
        const args = arguments;
        if(!lastRan){
            func.apply(context, args);
            lastRan = Date.now();
        }else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if(Date.now()-lastRan >= limit){
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit-(Date.now()-lastRan));
        }   

    }
}
