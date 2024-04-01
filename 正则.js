let rawText = "http://qq.com?a=1&b=2"
// 解析出{a:1, b:2}

const url = new URL("http://qq.com?a=1&b=2");

//获取查询字符串
console.log(url.search)
console.log(url.searchParams)

const queryString = url.search

const searchParams  =new URLSearchParams(queryString)

console.log(searchParams)

// 将查询字符串转换为对象
const queryParams = Object.fromEntries(searchParams.entries());
console.log(searchParams.entries())
console.log(queryParams)

//rawText.split('?')


//console.log(rawText.split('?')[1])

function sleep(delay){
    return new Promise((resolve)=>{setTimeout(resolve,delay)})
}




sleep(3000).then(()=>{
    console.log("rawText.split('?')[1]")
})


