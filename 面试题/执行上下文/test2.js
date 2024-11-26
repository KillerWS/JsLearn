function foo() {
    console.log(this.a)
    return function () {
      console.log(this.a)
    }
  }
  var obj = { a: 1 }
  var a = 2
  
  foo().call(obj)