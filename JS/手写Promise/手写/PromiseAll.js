//手写Promise.all

Promise.myAll = function(proms){
    let res, rej;
    const p = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    //设置p的状态
    const result = [];
    let count = 0;
    let fullFilledCount = 0;
    for(const prom of proms){
        const i = count;
        count++;
        Promise.resolve(prom).then(data=>{
            //
            result[i] = data;

            fullFilledCount++;
            if(fullFilledCount === count){
                res(result);
            }
        }, rej)
    }

    if(count === 0){res(result);}


    return p;
}

Promise.all([1,2,3]).then((datas)=>{
    console.log(datas)
})