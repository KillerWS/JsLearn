class TreeNode{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.children = [];
    }

}

function buildTree(items){
    let roots;
    const map = {}; // 存储每个node 的引用， 用于节点间建立联系
    items.forEach(item => {
        const node = new TreeNode(item.id, item.name)
        map[item.id] = node;
    });

    //构建树
    items.forEach(item=>{
        const node = map[item.id];
        const parent = map[item.parentId];

        if(parent){
            parent.children.push(node);
        }else{
            roots=node;
        }
        
    })
    return roots;
}


// 测试数据
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