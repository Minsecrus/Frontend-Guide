---
layout: ../../layouts/DocLayout.astro
title: "III. 基本开发环境和工具 / III.5 构建工具和打包器：优化生产代码"
order: 14
slug: "14-iii-iii-5"
---
### **III.5 构建工具和打包器：优化生产代码**

**目的**：转换和打包代码以用于生产环境，优化性能、处理模块和处理资产。

- [**Webpack**](https://webpack.js.org/)：强大的模块打包器，它创建模块的依赖图并将它们打包成优化的资产。支持各种模块格式（ES 模块、[CommonJS](http://www.commonjs.org/)、[AMD](https://www.amd.com/)）并使用加载器进行预处理。
- [**Vite**](https://vitejs.dev/)：现代构建工具，利用原生 ES 模块在开发中实现快速 HMR（热模块替换），并利用 [Rollup](https://rollupjs.org/) 进行优化的生产构建。
- [**esbuild**](https://esbuild.github.io/)：用 [Go](https://go.dev/) 编写的超高速 JavaScript 打包器，以其原生编译和大量并行处理带来的卓越速度而闻名。
- [**Rollup**](https://rollupjs.org/)：模块打包器，将独立的模块编译成更大的输出，擅长“tree-shaking”未使用的代码以获得更小的包。通常用于库。
- [**Turbopack**](https://turbo.build/pack)：用 [Rust](https://www.rust-lang.org/) 编写的增量打包器，针对 JavaScript 和 TypeScript 进行了优化，内置于 [Next.js](https://nextjs.org/) 中。具有统一图、增量计算和惰性打包以提高速度。
- **SWC (Speedy Web Compiler)**：基于 [Rust](https://www.rust-lang.org/) 的 TypeScript/JavaScript 编译器，用于编译和压缩，通常集成到 Next.js 等框架中。

基于 Rust 的工具（esbuild、Turbopack、SWC）和基于原生 ES 模块的开发服务器（Vite）的出现和采用 标志着行业向开发和构建过程中极致性能优化的重大趋势。这直接影响了开发者生产力（更快的反馈循环）和最终用户体验（更小、更快的包），突出了工具选择与项目成功指标之间的因果关系。

#### **表格：领先构建工具/打包器比较**

| 工具名称                                  | 核心技术                                   | 主要用例                                 | 关键特性（示例）                                                                                                    | 性能特点                                  |
| :---------------------------------------- | :----------------------------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| [**Webpack**](https://webpack.js.org/)    | JavaScript                                 | 应用程序打包                             | Loaders, Plugins, Code Splitting                                                                                    | 稳定，功能全面                            |
| [**Vite**](https://vitejs.dev/)           | JavaScript/[Rollup](https://rollupjs.org/) | 开发服务器，应用程序打包                 | 快速 HMR, 原生 ESM, [Rollup](https://rollupjs.org/) 打包                                                            | 开发速度快，生产优化                      |
| [**esbuild**](https://esbuild.github.io/) | [Go](https://go.dev/)                      | 打包、转换、压缩                         | 原生编译、高度并行、极速                                                                                            | 极速                                      |
| [**Rollup**](https://rollupjs.org/)       | JavaScript                                 | 库打包                                   | Tree-shaking, ES 模块优先                                                                                           | 包体积小，效率高                          |
| [**Turbopack**](https://turbo.build/pack) | [Rust](https://www.rust-lang.org/)         | [Next.js](https://nextjs.org/) 开发/构建 | 统一图、增量计算、惰性打包                                                                                          | 极速，[Next.js](https://nextjs.org/) 专用 |
| [**SWC**](https://swc.rs/)                | [Rust](https://www.rust-lang.org/)         | 编译、压缩                               | 超快编译、[TypeScript](https://www.typescriptlang.org/)/[JSX](https://react.dev/learn/writing-markup-with-jsx) 支持 | 极速                                      |

这个表格对于理解现代前端工作流的基石至关重要。它帮助学习者理解速度、灵活性和生态系统成熟度之间的权衡，指导他们选择与项目规模和性能目标相符的工具。

