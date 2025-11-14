// 假设一段HTML文本中不包含自闭合标签，请编写一个方法判断这段HTML代码的标签是闭合的。




function islegal(str){
    //匹配标签
    let ans = true;
    let stack = []
    let cur = '';
    let idx = 0;
    while(idx < str.length){
        cur += str[idx];

        //找不到的话-1 在 JS 里是 truthy卧槽！！！
        if(cur.indexOf('>')!== -1 && cur[cur.indexOf('<')+1] !== '/'){
                // cur += '>'
            // console.log('cur', cur)
            stack.push(cur.slice(cur.indexOf('<'), cur.length));
            cur =''
        }

        if(cur.indexOf('>')!== -1 && cur[cur.indexOf('<')+1] === '/'){
            let temp = stack[stack.length-1];
            let close = cur.slice(cur.indexOf('<'), cur.indexOf('>')+1)
            // console.log('temp', temp)
            // console.log('close', close)
            if(temp === close.replace('/', '') && close.length - temp.length === 1){
                stack.pop();
            }
            cur =''
        }

        idx++;
        // console.log(cur.replace('/', ''))
    }

    console.log(stack)
    return stack.length === 0;
}



// ✅ 合法的 HTML
const html1 = "<div><p>Hello</p></div>";

// ✅ 合法的嵌套
const html2 = "<ul><li><span>Item</span></li><li>Text</li></ul>";

// ❌ 不合法（顺序错误）
const html3 = "<div><p></div></p>";

// ❌ 不合法（缺少关闭标签）
const html4 = "<div><span></div>";

// ✅ 合法（多层嵌套）
const html5 = "<section><div><p><b>Test</b></p></div></section>";

console.log(islegal(html1));
console.log(islegal(html2));
console.log(islegal(html3));
console.log(islegal(html4));
console.log(islegal(html5));
