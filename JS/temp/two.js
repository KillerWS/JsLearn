
function createXX(fn, times, wait){
    return async function() {
        const  args = arguments
        for(let i=0;i<times;i++){
            fn.apply(this, args)
            if (i === times - 1) {
                break ;
            }
            await new Promise(resolve=> setTimeout(resolve, wait*1000))
            
        }
        
    }
}



const fn = createXX(console.log, 3, 2);
fn("helloworld");
