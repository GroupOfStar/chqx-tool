import { describe, it, expect, expectTypeOf } from 'vitest';
import { getParameters, randomHexColor, judgeDeviceType } from '../src/util';

describe('getParameters ', () => {
  it('两个参数，应该返回对象', () => {
    const query = getParameters('https://www.google.com/seach?q=1&w=new');
    expect(query).toEqual({ q: '1', w: 'new' });
  });

  it.todo('一个参数，应该返回一个空对象', () => {
    const query = getParameters('https://www.google.com/seach?q');
    expect(query).toEqual({});
  });
});

describe('randomHexColor', () => {
  it('应该是个合法的表示颜色的字符串', () => {
    const color = randomHexColor();
    expectTypeOf(color).toBeString();
    expect(color).toContain('#');
    expect(color).toHaveLength(7);
  });
});

describe.todo('elementIsInFocus', () => {
  it('返回文档中当前获得焦点的元素', () => {});
});

describe.todo('judgeDeviceType 检查设备类型', () => {
  it('应该返回设备类型 PC 或 Mobile', () => {
    expect([judgeDeviceType()]).toContainEqual(['PC', 'Mobile']);
  });
});
