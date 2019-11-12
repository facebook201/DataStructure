

## 冒泡排序





```javascript
let arr = [5, 2, 1, 3, 34, 8];

function bubbleSort(arr) {
  let newArr = arr.slice(0);
  let len = newArr.length;
  /**
   * 如果排序到某个位置 已经排序完成了 所以没有必要再循环比较了 就跳出
   */
  for (let i = 0; i < len - 1; ++i) {
    // 标志位 判断是否已经排序好了 排好了就不要在内层循环比较
    let hasSort = false;
    for (let j = 0; j < len - 1 - i; ++j) {
      if (newArr[j] > newArr[j + 1]) {
        hasSort = true;
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
    if (!hasSort) {
      break;
    }
    console.log(newArr, '第' + i + '次');
  }
}
```


