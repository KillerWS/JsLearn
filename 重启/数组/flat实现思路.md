# Array.flat() 实现思路

## 什么是 flat？

**flat()** 方法会按照指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```javascript
[1, [2, [3, 4]]].flat(2)  
// 结果: [1, 2, 3, 4]
```

---

## 核心思路

### 方法1: 递归实现（推荐）

```javascript
Array.prototype.myFlat = function(depth = 1) {
    // 1. 如果深度为0或负数，直接返回原数组的拷贝
    if (depth <= 0) {
        return this.slice();
    }
    
    // 2. 使用 reduce 遍历数组
    return this.reduce((result, item) => {
        // 3. 如果当前项是数组，递归调用 flat，深度减1
        if (Array.isArray(item)) {
            return result.concat(item.myFlat(depth - 1));
        }
        // 4. 如果不是数组，直接添加到结果中
        return result.concat(item);
    }, []);
}
```

---

### 方法2: 循环 + 栈实现

```javascript
Array.prototype.myFlat = function(depth = 1) {
    const result = [];
    const stack = this.map(item => [item, depth]);
    
    while (stack.length > 0) {
        const [item, currentDepth] = stack.pop();
        
        if (Array.isArray(item) && currentDepth > 0) {
            // 如果是数组且还有深度，拆开压入栈
            stack.push(...item.map(i => [i, currentDepth - 1]));
        } else {
            // 否则直接加入结果（注意是 unshift，保持顺序）
            result.unshift(item);
        }
    }
    
    return result;
}
```

---

### 方法3: for 循环实现（简单直观）

```javascript
Array.prototype.myFlat = function(depth = 1) {
    if (depth <= 0) return this.slice();
    
    let result = [];
    
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        
        if (Array.isArray(item)) {
            // 递归扁平化
            result = result.concat(item.myFlat(depth - 1));
        } else {
            result.push(item);
        }
    }
    
    return result;
}
```

---

## 执行过程示例

```javascript
[1, [2, [3, 4]]].myFlat(2)
```

### 第一层递归 (depth=2)
```
遍历: 1, [2, [3, 4]]
  - 1 不是数组 → 加入结果: [1]
  - [2, [3, 4]] 是数组 → 递归 flat(1)
```

### 第二层递归 (depth=1)
```
遍历: 2, [3, 4]
  - 2 不是数组 → 加入结果: [2]
  - [3, 4] 是数组 → 递归 flat(0)
```

### 第三层递归 (depth=0)
```
depth=0，直接返回: [3, 4]
```

### 合并结果
```
[1] + [2] + [3, 4] = [1, 2, 3, 4]
```

---

## 关键点

### 1. 深度控制
- `depth = 1`: 默认只扁平化一层
- `depth = 0`: 不扁平化
- `depth = Infinity`: 完全扁平化
- `depth < 0`: 当作0处理

### 2. 空位处理
```javascript
[1, , 3].flat()  // [1, 3] - 空位被移除
```

### 3. 不修改原数组
```javascript
const arr = [1, [2, 3]];
arr.flat();
console.log(arr);  // [1, [2, 3]] - 原数组不变
```

---

## 实现要点

1. **递归终止条件**: `depth <= 0` 时返回
2. **判断是否为数组**: `Array.isArray(item)`
3. **深度递减**: 每次递归 `depth - 1`
4. **合并结果**: 使用 `concat` 或 `push`
5. **过滤空位**: 使用 `reduce` 自动过滤 undefined

---

## 测试建议

编写实现后，运行测试确保：
- ✓ 基础扁平化正确
- ✓ 深度控制正确
- ✓ 边界情况（空数组、深度0、负数深度）
- ✓ 特殊值（undefined, null, 空位）
- ✓ 与原生 flat() 结果一致

