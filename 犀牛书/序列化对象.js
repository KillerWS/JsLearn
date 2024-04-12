let o= {x:1, y:{z:[false, null, ""]}} //定义测试对象
let s = JSON.stringify(o); console.log(o); console.log(typeof o)
let p = JSON.parse(s);console.log(s); console.log(typeof o)

let unitcircle = {r:1}

let x = Object.create(unitcircle)
x.r = 2;
console.log(x.r)
console.log(unitcircle.r)