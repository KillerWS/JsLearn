


function deepOEqual(obj1, obj2){

    //其实这也是递归终止条件
    if(obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    //比较key 数量是否相等
    if(keys1.length !== keys2.length) return false;


    for(const key of keys1){
        //1. 要有key, includes判断一下， 2. 有的话再传入两个参数进行比较哈
        if(!keys2.includes(key) || !deepOEqual(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;
}




const a = {a:1, b:{a:1}}
const b = {a:1, b:1}
console.log(deepOEqual(a, b))