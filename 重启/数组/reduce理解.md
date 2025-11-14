# Reduce 核心理解

## 关键点：为什么是 `=` 而不是 `+=` ？

### ❌ 错误写法（你之前的代码）
```javascript
accumulator += callback(accumulator, this[i])
```

### ✅ 正确写法
```javascript
accumulator = callback(accumulator, this[i])
```

---

## 详细解释

### 例子1：求和（用 += 看起来能工作，但其实有问题）

```javascript
[1, 2, 3].myReduce((acc, cur) => acc + cur, 0)

// 如果用 accumulator += callback(...)
// 第1次: accumulator = 0 += (0 + 1) = 0 + 1 = 1 ✓
// 第2次: accumulator = 1 += (1 + 2) = 1 + 3 = 4 ✗ (错了！)
// 期望是 3，实际是 4

// 如果用 accumulator = callback(...)
// 第1次: accumulator = (0 + 1) = 1 ✓
// 第2次: accumulator = (1 + 2) = 3 ✓
// 第3次: accumulator = (3 + 3) = 6 ✓
```

### 例子2：求积（用 += 就完全错了）

```javascript
[2, 3, 4].myReduce((acc, cur) => acc * cur, 1)

// 如果用 accumulator += callback(...)
// 第1次: accumulator = 1 += (1 * 2) = 1 + 2 = 3 ✗ (应该是2)
// 第2次: accumulator = 3 += (3 * 3) = 3 + 9 = 12 ✗ (应该是6)
// 完全错误！

// 如果用 accumulator = callback(...)
// 第1次: accumulator = (1 * 2) = 2 ✓
// 第2次: accumulator = (2 * 3) = 6 ✓
// 第3次: accumulator = (6 * 4) = 24 ✓
```

---

## 核心理解

**reduce 的精髓：**
- callback 函数返回什么，accumulator 就变成什么
- 不是"加上"callback 的返回值，而是"变成"callback 的返回值
- 这样才能灵活处理各种操作（求和、求积、找最大值、数组拼接等）

---

## 执行流程图

```
初始: accumulator = 0

遍历 [1, 2, 3]
  
  i=0: accumulator = callback(0, 1) 
       → callback 返回 0+1=1
       → accumulator 变成 1

  i=1: accumulator = callback(1, 2)
       → callback 返回 1+2=3
       → accumulator 变成 3

  i=2: accumulator = callback(3, 3)
       → callback 返回 3+3=6
       → accumulator 变成 6

返回: 6
```

