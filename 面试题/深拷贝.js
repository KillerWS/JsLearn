const obj = { a: {a1:1}, b: 2, c: null };
function deepClone(value) {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    const clone = Array.isArray(value) ? [] : {};
    for (const key in value) {
      clone[key] = deepClone(value[key]);
    }
    return clone;
  }

function deepClone1(value){
    if(typeof value !== 'object' || value === null) return value;
    const clone = Array.isArray(value) ?  [] : {};
    for(const key in value){
      clone[key] = deepClone1(value[key]);
    }

    return clone;

}


const newObj = deepClone1(obj);

console.log(newObj)