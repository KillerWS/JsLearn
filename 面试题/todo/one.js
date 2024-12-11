
// 栈
1, 2, 4

function solve(inorder, postorder){
    let len =inorder.length
    for(let i=0;i<len;i++){
        if(inorder[i]!==postorder[i]){
            // 根节点
            new TreeNode(inorder[i], []);
        }
    }
}


solve([9,3,15,20,7], [9,15,7,20,3]);

        3
    9      20
1 2         5 6

1 2 9  3 ...
1 2 9  3 
