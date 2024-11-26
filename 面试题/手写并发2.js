
function concurrentRequest(urls, maxNum){
    //一定是一个完成状态的promise
    return new Promise(resolve=>{
        const results = [];
        if(urls.length === 0){
            resolve([]);
            return ; 
        }
        let index = 0; //下一个请求的下标
        let count = 0; //当前请求完成的数量
        // 发送请求
        async function sendRequest(){
            if(index === urls.length) return;
            const i = index;
            const url = urls[index];
            index++;
            try {
                const resp = await fetch(url);
                results[i] = resp;
            } catch (error) {
                results[i] = error;
            }finally{
                //判断是否所有请求都已完成
                count++;
                if(count === urls.length){
                    consolo.log("over")
                    resolve(results)
                }
                sendRequest()
            }
            
        }

        const times = Math.min(maxNum, urls.length);
        for(let i = 0;i<times;i++){
            sendRequest()
        }
    })
}

function maxConcurrencyRequest(urls, maxNum){
    return new Promise(resolve=>{
        if(urls.length === 0 ) return;
        let results = [];
        let index = 0;
        let finishedCount = 0;
        async function sendRequest() {
            const url = urls[index];
            const i = index;
            index++;
            try {
                const res = await fetch(url)
                results[i] = res;
            } catch (error) {
                results[i] = error;
            }finally{
                //因为到await 阻塞， 完成后才会执行finally里的代码，
                finishedCount++;
                if(finishedCount === urls.length){
                    console.log("完成啦")
                    resolve(results)
                }
                //没完成的话
                sendRequest();
            } 
        }
        

    })
}