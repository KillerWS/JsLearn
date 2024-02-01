var n = 10
function fn(){
    var n =20
    function f() {
       n++;
       console.log(n)
     }
    f()
    return f
}

var x = fn() //21
x() //22
x() //23
console.log(n) //10

// const arr = [{a: 1}, {a: 2}]
// const brr = [...arr]
// brr.push({a: 3})
// brr[1].a = 4

// arr: [{a: 1}, {a: 4}, {a:3}]