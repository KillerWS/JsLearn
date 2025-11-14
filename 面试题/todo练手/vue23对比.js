//vue2 这样子
// 对象属性的删除添加无法侦测, 是数组索引的直接修改无法监听
//const obj = {}
// Object.defineProperty(obj, 'key', {
//     get(){
//         console.log("获取key")
//         return 'value'
//     },
//     set(newVal){
//         console.log("设置key: ",newVal)
//     }
// })

// obj.key; // 访问 key
// obj.key = 'newValue'; // 设置 key newValue

//vue3
const obj = new Proxy({},{
    get(target, key){
        console.log(`访问 ${key}`);
        return target[key];
    },
    set(target, key, value){
        console.log(`设置 ${key} 为 ${value}`);
        target[key] = value;
        return true;
    }
})
obj.key; // 访问 key
obj.key = 'newValue'; // 设置 key 为 newValue