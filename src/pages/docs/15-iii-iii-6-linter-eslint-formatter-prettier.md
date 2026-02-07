---
layout: ../../layouts/DocLayout.astro
title: "III. 基本开发环境和工具 / III.6 代码质量和一致性：Linter (ESLint) 和 Formatter (Prettier)"
order: 15
slug: "15-iii-iii-6-linter-eslint-formatter-prettier"
---
### **III.6 代码质量和一致性：Linter (ESLint) 和 Formatter (Prettier)**

- **Linter ([ESLint](https://eslint.org/))**：一种工具，运行一组规则来发现可能的问题、强制执行最佳实践并维护 JavaScript 和 TypeScript 代码库的样式一致性。 [typescript-eslint](https://typescript-eslint.io/) 使 ESLint 能够支持 TypeScript。
- **Formatter ([Prettier](https://prettier.io/))**：一种预设风格的代码格式化工具，它删除原始样式并确保所有输出代码符合一致的样式，支持多种语言。它与大多数编辑器集成，并可以在保存时运行。

Linter 和 Formatter 的结合使用 是团队协作和代码可维护性的最佳实践。Linter 强制执行逻辑和结构规则，而 Formatter 处理样式一致性。这减少了代码审查期间的认知负荷，并防止了“样式战争”，直接提高了开发者体验和代码质量。

#### **表格：ESLint 和 Prettier 比较**

| 工具名称                             | 主要目的           | 配置方式           | 集成方式         | 语言支持（示例）                                                     | 优点（示例）         |
| :----------------------------------- | :----------------- | :----------------- | :--------------- | :------------------------------------------------------------------- | :------------------- |
| [**ESLint**](https://eslint.org/)    | 代码质量、最佳实践 | 灵活，高度可配置   | 编辑器、构建工具 | JavaScript, [TypeScript](https://www.typescriptlang.org/)            | 捕获错误，强制规范   |
| [**Prettier**](https://prettier.io/) | 代码格式化         | 预设风格，少量选项 | 编辑器、CLI      | JavaScript, [TypeScript](https://www.typescriptlang.org/), HTML, CSS | 样式一致性，节省精力 |

这个表格对于阐明 Linter 和 Formatter 独特但互补的作用很有价值。它帮助学习者理解为什么两者对于专业的开发工作流都是必要的，以及它们如何促进可维护性和协作。

