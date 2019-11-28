# 基础知识部分

## 高阶函数

### 高阶函数实现 AOP
AOP（面向切面编程）主要是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常等。抽离出来之后 再动态植入到业务逻辑模块，这样保持业务逻辑模块的纯净和高内聚性，其次可以方便的复用某些模块功能。

在JavaScript中实现 AOP，都是指把一个函数 “动态植入” 另一个函数中。例如装饰者模式。


### 分时函数
就短时间要多的大量工作分成多块时间来完成，避免卡死。比如创建DOM，1秒钟创建1000个节点改为每隔200毫秒创建8个。
```javascript
// timeChunck
/**
 * @param array 创建要用到的数据
 * @param fn    创建的逻辑函数
 * @param count 创建的节点数
 */
const timeChunk = function (array, fn, count) {
  var obj, j;
  var len = array.length;

  var start = function() {
    for (var i = 0; i < Math.min(count || 1, array.length); i++) {
      var obj = array.shift();
      fn(obj);
    }
  };
};
```



