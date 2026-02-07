---
layout: ../../layouts/DocLayout.astro
title: "V. 高级主题和专业开发最佳实践 / V.9 国际化 (internationalization, i18n) 和本地化 (localization, l10n)：全球化应用程序"
order: 37
slug: "37-v-v-9-internationalization-i18n-localization-l10n"
---
### **V.9 国际化 (internationalization, i18n) 和本地化 (localization, l10n)：全球化应用程序**

**目的**：设计和准备应用程序以在世界各地的不同区域和语言中使用。

- **关键方面**：
  - **文本翻译**：管理和显示多种语言的文本。
  - **RTL（从右到左）布局**：使用 CSS direction: rtl 实现从右到左书写的语言（例如，阿拉伯语、希伯来语）的布局。
  - **日期/数字/货币格式**：使用 JavaScript 的原生 [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API（Intl.DateTimeFormat、Intl.NumberFormat）根据区域约定本地化度量单位、日期、时间、数字和货币。
  - **时区和日历**：处理时区差异和各种日历系统。
- **库**：
  - [**react-i18next**](https://react.i18next.com/)：功能丰富，基于 [i18next](https://www.i18next.com/)，支持嵌套翻译、复数和通过 Intl 对象进行本地化格式化。
  - [**vue-i18n**](https://vue-i18n.intlify.dev/)：为 Vue.js 应用程序提供基本功能，旨在在 Vue 的响应式系统中实现直观和高效。
  - **FormatJS ([react-intl](https://formatjs.io/docs/react-intl/))**：一套 i18n 库，高度关注标准（[ICU](https://icu.unicode.org/) 消息语法、[Unicode CLDR](https://cldr.unicode.org/)）。
  - [**Intlayer**](https://intlayer.org/zh) 是现代国际化（i18n）和内容管理解决方案（CMS），支持 React、Next.js、Vue 等框架。AI 驱动，提供类型安全的多语言内容管理、SSR 支持、字典格式（JSON/Markdown）和无缝集成。简化 i18n 复杂性（如嵌套翻译、复数），适用于多语言应用。比传统库更灵活、可扩展。

国际化不仅仅是简单的文本翻译；它还包括格式和布局中的文化细微差别。利用

[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) 等原生浏览器 API 进行日期/数字/货币格式化是最佳实践，与自定义实现相比，可以提高性能并减少包大小。这直接影响了全球市场覆盖和用户满意度。

#### **表格：流行国际化库比较**

| 库名称                                          | 框架兼容性                  | 功能（示例）                                                                                         | 灵活性 | 学习曲线 | 性能/包大小 | 标准遵循 |
| :---------------------------------------------- | :-------------------------- | :--------------------------------------------------------------------------------------------------- | :----- | :------- | :---------- | :------- |
| [**react-i18next**](https://react.i18next.com/) | [React](https://react.dev/) | 嵌套翻译，复数，语言检测，日期/数字格式化                                                            | 高     | 中等     | 较大        | 良好     |
| [**vue-i18n**](https://vue-i18n.intlify.dev/)   | [Vue](https://vuejs.org/)   | 消息格式化，复数，日期/时间本地化                                                                    | 良好   | 较低     | 良好        | 良好     |
| [**FormatJS**](https://formatjs.io/)            | [React](https://react.dev/) | [ICU](https://icu.unicode.org/) 消息语法，[Unicode CLDR](https://cldr.unicode.org/)，日期/数字格式化 | 良好   | 中等     | 较小        | 优秀     |

这个表格帮助学习者根据他们选择的框架和具体的本地化需求选择合适的 i18n 库，突出了全面国际化超越简单字符串替换的重要性。

