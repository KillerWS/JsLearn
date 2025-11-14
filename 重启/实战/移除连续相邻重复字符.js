


function removeDuplicates(s){
    let stack = [];
    
    for(let i = 0;i<s.length;i++){
        if(stack.length === 0){
            stack.push(s[i]);
        }else{
            if(stack[stack.length -1] === s[i]){
                stack.pop();
            }else{
                stack.push(s[i]);
            }

        }
        
    }
    

    console.log(stack.join(''));

}


removeDuplicates("abbaca")

// removeDuplicatesK("deeedbbcccbdaa", 3) // 输出 "aa"