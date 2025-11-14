// 生成树

class TreeNode{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.children = [];

    }

}   
    //one
    // function buildTree(items){

    //     const map = {};
    //     const root = [];

    //     // 先创建节点
    //     items.forEach(item => {
    //         map[item.id] = new TreeNode(item.id, item.name);

    //     });

    //     //创建树结构
    //     items.forEach(item=>{
    //         const node =map[item.id];
    //         const parent =map[item.parentId];
    //         if(parent){
    //             parent.children.push(node);
    //         }else{
    //             root.push(node);
    //         }
    //     })
    //     return root
    // }

  // 测试数据
  
  //two
  function buildTree(items){
    let map = {} // 注意是一个map {} 不是 Map();
    let root = []
    items.forEach(element => {
        map[element.id] =  new TreeNode(element.id, element.name)
    }); // 都搞成 树的节点
     
    items.forEach(element => {
        const node =  map[element.id]
        const parent = map[element.parentId]

        if(parent){
            parent.children.push(node);
        }else{
            root.push(node)
        }
    })
    return root;

  }

  const items = [
    { id: 1, name: '节点1', parentId: null },
    { id: 2, name: '节点1.1', parentId: 3 },
    { id: 3, name: '节点1.2', parentId: 1 },
    { id: 4, name: '节点2', parentId: 3 },
    { id: 5, name: '节点2.1', parentId: 4 },
    { id: 6, name: '节点2.2', parentId: 4 },
  ];
  
  // 生成树
  const tree = buildTree(items);
  
  console.log(tree)

    // 打印树结构
//   function printTree(node, level = 0) {
//     const indent = '  '.repeat(level);
//     console.log(`${indent}- ${node.name} (id: ${node.id})`);
//     node.children.forEach(child => printTree(child, level + 1));
//   }
//   tree.forEach(root => printTree(root));