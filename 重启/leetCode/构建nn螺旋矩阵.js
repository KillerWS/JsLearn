function generateMatrix(n) {

    let ans = new Array(n).fill().map(() => new Array(n).fill(0));

    let top = 0, bottom =n-1, left = 0, right = n - 1; //四个边界
    
    let i=0, j = 0;
    let dir = 0; // 0→, 1↓, 2←, 3↑ 一个标记

    for(let v = 1;v<=n*n;v++){
        ans[i][j] = v;
        if(dir === 0){
            if(j < right) j++;
            else {dir = 1; top++;i++} //转向向下 dir = 1 
        }else if(dir === 1){
            if(i<bottom) i++;
            else{dir === 2; right--; j--}
        }else if(dir === 2){
            if(j>left) j--;
            else{ dir = 3; bottom--; i--}
        }else{
            if(i > top) i--;
            else{ dir = 0; left++;j++}
        }
    } 

    

    return ans;

}

console.log(generateMatrix(3))