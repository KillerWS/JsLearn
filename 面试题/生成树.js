class TreeNode {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.children = [];
    }
  }
  
  function buildTree(items) {
    const map = {}; // 用于存储每个节点的引用
    const roots = []; // 存储根节点
  
    // 第一步：创建所有节点并存储在 map 中
    items.forEach(item => {
      const node = new TreeNode(item.id, item.name);
      map[item.id] = node;
    });
  
    // 第二步：构建树结构
    items.forEach(item => {
      const node = map[item.id];
      const parent = map[item.parentId];
  
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    });
  
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

  // 打印树结构
//   function printTree(node, level = 0) {
//     const indent = '  '.repeat(level);
//     console.log(`${indent}- ${node.name} (id: ${node.id})`);
//     node.children.forEach(child => printTree(child, level + 1));
//   }
  
//   tree.forEach(root => printTree(root));