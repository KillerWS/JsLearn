const arr = [{a: 1}, {a: 2}]
const brr = [...arr]
brr.push({a: 3})
brr[1].a = 4

// arr: [{a: 1}, {a: 4}, {a:3}]

console.log(arr)
// console.log(brr)

console.log(brr)

