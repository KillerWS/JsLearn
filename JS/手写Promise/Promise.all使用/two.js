function deepClone(item, map = new WeakMap()) {
    // 处理 null 和非对象
    if (item === null || typeof item !== 'object') {
        return item;
    }

    // 特殊处理日期对象
    if (item instanceof Date) {
        return new Date(item.getTime());
    }

    // 检查是否有循环引用
    if (map.has(item)) {
        return map.get(item);
    }

    // 初始化返回对象，保持原型链
    let result;
    if (Array.isArray(item)) {
        result = [];
    } else {
        result = Object.create(Object.getPrototypeOf(item));
    }

    // 在递归复制前存储到map中以处理循环引用
    map.set(item, result);

    // 递归复制所有可枚举的自有属性
    for (const key in item) {
        if (item.hasOwnProperty(key)) {
            result[key] = deepClone(item[key], map);
        }
    }
    return result;
}
