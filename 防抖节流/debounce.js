function deBou(func, delay){
    let timerId
    return function(args){
        const context = this;
        const args = arguments;
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(()=>{
            func.apply(context, args)
        }, delay)
        
    }
}

function debounce1(){
    let timerId;
    return function(){
        const context = this;
        const args = arguments;
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func.apply(context, args)
        }, delay)
    }
}


// function throttle(func, limit){
//     let lastFunc;
//     let lastRan;

//     return function(){
//         const context = this;
//         const args = arguments;
//         if(!lastRan){
//             func.apply(context, args);
//             lastRan = Date.now();
//         }else{
//             clearTimeout(lastFunc);
//             lastFunc = setTimeout(()=>{
//                 if(Date.now()-lastRan >= limit){
//                     func.apply(context, args);
//                     lastRan = Date.now();
//                 }
//             }, limit-(Date.now()-lastRan));
//         }   

//     }
// }
function throttle1(func, limit){
    let lastRan;
    let lastFunc;

    return function(){
        const context = this;
        const args = arguments;
        if(!lastRan){
            func.apply(context, args);
            lastRan = Date.now();
        }else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if(Date.now() - lastRan>= limit){
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
        
    }

}







function throttle(func, limit){
    let lastRan;
    let lastFunc; //计时器

    return function(){
        const args=arguments;
        const context =  this;
        if(!lastRan){
            //如果没运行过
            func.apply(context, args);    // func.apply(context, args);
            lastRan = new Date();         // lastRan = new Date();
        }else{
            clearTimeout(lastFunc)
            lastFunc = setTimeout(()=>{
                //代表每次点击后重置计时器
                if(Date.now() - lastRan>= limit){
                    func.apply(context, args);  
                    lastRan = new Date.now()
                }
            
            }, limit  - (new Date.now() - lastRan))   // , limit - (new Date() - lastRan)
        }

    
        
    }

}