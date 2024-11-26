function minEditDistance(str1, str2, ic, dc, rc) {
    const len1 = str1.length;
    const len2 = str2.length;
  
    // 创建一个二维数组dp，用于存储子问题的解
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
  
    // 初始化边界情况
    for (let i = 0; i <= len1; i++) {
      dp[i][0] = i * dc;
    }
    for (let j = 0; j <= len2; j++) {
      dp[0][j] = j * ic;
    }
  
    // 填充dp数组
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // 字符相同，无需操作
        } else {
          dp[i][j] =
            Math.min(
              dp[i - 1][j] + dc, // 删除操作
              dp[i][j - 1] + ic, // 插入操作
              dp[i - 1][j - 1] + rc // 替换操作
            );
        }
      }
    }
  
    // 返回将str1编辑成str2的最小代价
    return dp[len1][len2];
  }
  
  // 示例
  const str1 = "kitten";
  const str2 = "sitting";
  const ic = 1;
  const dc = 1;
  const rc = 1;
  
  console.log(minEditDistance(str1, str2, ic, dc, rc)); // 输出：3