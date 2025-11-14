// 防抖
function debounce(fn, wait){
    
    let timerId;
    return function(){
        const context = this;
        const args = arguments;
        if(timerId) clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn.apply(context, ...args);
        }, wait)
    }
}

let d = new debounce1(function print(name){
    console.log(name)
}, 3000)

d()

//节流

function throttle(fn, wait){
    let lastRan ;
    let lastFunc;
    return function(){

    }
    
}