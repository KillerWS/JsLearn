
// function deepClone(value){
//     if(typeof value !== 'object' || value === null) return value;
//     const clone = Array.isArray(value) ? []:{};
//     for(const key in value){
//         clone[key] =deepClone(value[key]);
//     }
//     return clone;

// }


function deepClone(value){
    
}



const obj = { a: {a1:{a2:33}}, b: 2, c: null,d:[1,2,3] };

const newObj = deepClone(obj);

console.log(newObj)