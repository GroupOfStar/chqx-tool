import { getTypeOf } from './getTypeOf';

export const isNumber = (target: any) => {
  return typeof target === 'number' && getTypeOf(target) === 'number';
};
