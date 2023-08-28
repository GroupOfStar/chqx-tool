# 判断是否为数组

## 一、源码参考

```js

import getTypeOf from './getTypeOf'

export const isArray = (target) => {
  return Array.isArray(target) && getTypeOf(target) === 'array'
}
```

## 二、示例

```js
import { isArray } from 'vivace-tool'
console.log(isArray([1])) // true
console.log(isArray({})) // false
```
