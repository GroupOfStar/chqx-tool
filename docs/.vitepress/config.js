import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/chqx-tool/',
  lang: 'en-US',
  title: 'Chqx Tool',
  description: 'frontend docs',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    siteTitle: 'Chqx Tool',
    logo: '/logo.svg',
    lastUpdatedText: '最后更新',
    outline: { label: '本页目录' },
    docFooter: {
      prev: '下一页',
      next: '上一页',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/chqx-tool',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present chqx-tool',
    },
    nav: [{ text: '配置', link: '/config/', activeMatch: '/config/' }],
    sidebar: {
      '/': [
        {
          text: 'Util',
          items: [
            { text: 'getParameters', link: '/config/getParameters' },
            { text: 'randomHexColor', link: '/config/randomHexColor' },
            { text: 'elementIsInFocus', link: '/config/elementIsInFocus' },
            { text: 'judgeDeviceType', link: '/config/judgeDeviceType' },
            { text: 'copyText', link: '/config/copyText' },
            { text: 'getSelectedText', link: '/config/getSelectedText' },
            { text: 'rgbToHex', link: '/config/rgbToHex' },
            { text: 'toCamel', link: '/config/toCamel' },
            { text: 'smoothScroll', link: '/config/smoothScroll' },
          ],
        },
        {
          text: 'Type',
          items: [
            { text: 'getTypeOf', link: '/config/getTypeOf' },
            { text: 'isEmpty', link: '/config/isEmpty' },
            { text: 'isNumber', link: '/config/isNumber' },
            { text: 'isString', link: '/config/isString' },
            { text: 'isObject', link: '/config/isObject' },
            { text: 'isNull', link: '/config/isNull' },
            { text: 'isArray', link: '/config/isArray' },
            { text: 'isUndefined', link: '/config/isUndefined' },
            { text: 'isTrue', link: '/config/isTrue' },
            { text: 'isElement', link: '/config/isElement' },
          ],
        },
        {
          text: 'String',
          items: [{ text: 'reverse', link: '/config/reverse' }],
        },
        //   {
        //     text: 'Number',
        //     items: [
        //       { text: 'sum', link: '/utils/sum' },

        //       { text: 'fahrenheitToCelsius', link: '/utils/fahrenheitToCelsius' },
        //       { text: 'celsiusToFahrenheit', link: '/utils/celsiusToFahrenheit' },
        //       { text: 'average', link: '/utils/average' },
        //     ],
        //   },
        //   {
        //     text: 'Array',
        //     items: [
        //       { text: 'uniqueArr', link: '/utils/uniqueArr' },
        //       { text: 'shuffle', link: '/utils/shuffle' },
        //     ],
        //   },
        //   {
        //     text: 'Date',
        //     items: [
        //       { text: 'isWeekday', link: '/utils/isWeekday' },
        //       { text: 'dayDiff', link: '/utils/dayDiff' },
        //     ],
        //   },
      ],
    },
  },
});
