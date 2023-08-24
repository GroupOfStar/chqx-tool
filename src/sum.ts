export function sum(...args: number[]) {
  return Array.from(args).reduce((start, result) => {
    return start + result;
  }, 0);
}
