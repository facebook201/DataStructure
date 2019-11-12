

## 冒泡排序

### 步骤

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

### 动图演示

![border](https://github.com/hustcc/JS-Sorting-Algorithm/raw/master/res/bubbleSort.gif)



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
  return newArr;
}
```


