function permute(str, prefix = '', result = []) {
    if (str.length === 0) {   
        result.push(prefix);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let remaining = str.slice(0, i) + str.slice(i + 1);
        permute(remaining, prefix + str[i], result);
    }

    return result;
}

function printPermutations(str) {
    const permutations = permute(str);
    console.log(permutations)
    // for (const perm of permutations) {
    //     console.log(perm.split('').join(' '));
    // }
}

// 使用示例
printPermutations('123');