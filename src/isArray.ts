import { getTypeOf } from './getTypeOf';

export const isArray = (target: any) => {
  return Array.isArray(target) && getTypeOf(target) === 'array';
};
