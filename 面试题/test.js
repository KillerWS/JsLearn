const obj = { a: {a1:1}, b: 2, c: 3 };
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(key, obj[key]);
//   }
// }

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(typeof );
//     console.log(key, value);
//   });
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
  const newObj = deepClone(obj);

console.log(newObj)