# 判断是否为Null

## 一、源码参考

```js

import getTypeOf from './getTypeOf'

export const isNull = (target) => {
  return target === null && getTypeOf(target) === 'null'
}
```

## 二、示例

```js
import { isNull } from 'vivace-tool'
console.log(isNull(null)) // true
console.log(isNull({})) // false
```
