export const isEmpty = (obj: object) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
