# 设计原则



## 面向对象的六大原则

* 单一职责 SRP
* 开发封闭 OCP
* 里式替换 LSP
* 依赖倒置 DIP
* 接口分离 ISP
* 最少知识 LKP



### 单一职责原则
**一个对象或方法只做一件事情** 适用范围有接口、方法、类。接口和方法必须保证单一职责

```jsx
// 
const OprType = {
  UPDATE_NAME: 'update_name',
  UPDATE_PASSWORD: 'update_password'
};
// 错误示范
interface UserOpr {
  boolean updateUserInformation(User, OprType);
}

class UserOprImplement implements UserOpr {
  updateUserInformation(user, oprType): boolean {
    if (oprType === OprType.UPDATE_NAME) {
      // 更新姓名
    } else if (oprType === OprType.UPDATE_PASSWORD) {
      // 更新密码
    }
    return true;
  }  
}
```



### 开发封闭原则
类、方法对其扩展开放，对其修改封闭。在不修改的前提下进行扩展，有新的需求出现时，我们对其扩展现有的方法，对象。
修改关闭 不能对实体进行任何的修改。


### 里氏替换原则
所有引用基类的地方必须能透明地使用其子类对象。简单来说就是父亲有的，子类就一定有，父类有的子类不能修改 但是可以增加。

```jsx
class Father {
  braisedRibs() {
    console.log('红烧排骨');
  }
}

class Son extends Father {
  braisedRibs() {
    console.log('红烧糖醋排骨');
  }
}

let s = new Son();
s.braisedRibs();
```

上面输出红烧糖醋排骨就是不对的 我们不能去修改父类一样的方法 我们应该新增一个方法

```jsx
class Father {
  braisedRibs() {
    console.log('红烧排骨');
  }
}

class Son extends Father {
  braisedRibs() {
    console.log('红烧糖醋排骨');
  }
  braisedSweetAndSourPorkRibs() {
    console.log('红烧糖醋排骨');
  }
}

let s = new Son();
// 保证原有的方法不变 去新增一个方法
s.braisedRibs();
s.braisedSweetAndSourPorkRibs();
```



### 依赖倒置原则
**高层次的模块不应该依赖于低层次的模块，它们应该依赖于抽象，抽象不应该依赖于具体实现，具体实现应该依赖于抽象**

