---
layout: ../../layouts/DocLayout.astro
title: "VI. 新兴技术和专业领域 / VI.3 跨平台开发：移动端 (React Native, Capacitor)，桌面端 (Electron, Tauri)"
order: 47
slug: "47-vi-vi-3-react-native-capacitor-electron-tauri"
---

**目的**：使用单一代码库（通常使用 Web 技术）为多个平台（iOS、Android、Windows、macOS、Linux）构建应用程序。

## **VI.3.1 移动应用程序开发**

- [**React Native**](https://reactnative.dev/)：使用 React 语法为 Android 和 iOS 创建原生移动应用程序，与原生 API 和组件交互。提供原生 UI 和性能。
- [**Capacitor**](https://capacitorjs.com/)：Ionic 开发的跨平台工具，使用原生 WebView 将 Web 应用程序（HTML、CSS、JS）转换为 iOS/Android 应用程序。兼容各种 JS 框架并支持 PWA。

React Native 和 Capacitor 之间的选择 反映了一个根本性的权衡：原生 UI/性能 (React Native) 与 Web 开发者熟悉度/PWA 支持 (Capacitor)。这个决定有效地影响了开发速度、性能上限以及重用现有 Web 代码库的能力。

### **表格：移动应用程序开发框架比较**

| 框架名称                                     | 核心技术           | 渲染（原生 UI/WebView） | 原生功能访问         | 性能 | 学习曲线 | [PWA](https://web.dev/progressive-web-apps/) 支持 | 理想用例（示例）                                                                 |
| :------------------------------------------- | :----------------- | :---------------------- | :------------------- | :--- | :------- | :------------------------------------------------ | :------------------------------------------------------------------------------- |
| [**React Native**](https://reactnative.dev/) | JavaScript/Native  | 原生 UI                 | 直接访问原生 API     | 较高 | 较陡峭   | 否                                                | 追求原生性能和体验，复杂应用                                                     |
| [**Capacitor**](https://capacitorjs.com/)    | JavaScript/WebView | WebView                 | 通过插件访问原生 API | 中等 | 较低     | 是                                                | 将现有 Web 应用转换为移动应用，[PWA](https://web.dev/progressive-web-apps/) 优先 |

这个表格对于理解跨平台移动开发方法的核心差异和权衡至关重要。它突出了不同框架如何在原生性能和 Web 开发便利性之间取得平衡。

## **VI.3.2 桌面应用程序开发**

- [**Electron**](https://www.electronjs.org/)：捆绑 Chromium 实例和 Node.js 以使用 Web 技术构建跨平台桌面应用程序。导致应用程序体积较大和资源消耗较高。
- [**Tauri**](https://tauri.app/)：使用操作系统的原生 WebView 和 Rust 进行后端逻辑，与 Electron 相比，应用程序体积更小、内存使用更低、启动时间更快，并注重安全性。

Tauri 基于 Rust 的后端，使用原生 WebView，优先考虑资源效率和安全性，它的出现挑战了 Electron 的主导地位。这一趋势反映了对使用 Web 技术构建更具性能和轻量级桌面应用程序的需求，直接影响了用户体验和系统资源使用。

### **表格：桌面应用程序开发框架比较**

| 框架名称                                    | 核心技术                                          | 应用程序大小 | 资源使用（CPU/RAM） | 启动时间 | 安全模型           | 开发者体验                                        |
| :------------------------------------------ | :------------------------------------------------ | :----------- | :------------------ | :------- | :----------------- | :------------------------------------------------ |
| [**Electron**](https://www.electronjs.org/) | 捆绑 Chromium + [Node.js](https://nodejs.org/)    | 较大         | 较高                | 较慢     | 较高暴露风险       | 熟悉 Web 技术                                     |
| [**Tauri**](https://tauri.app/)             | 原生 WebView + [Rust](https://www.rust-lang.org/) | 极小         | 较低                | 极快     | 细粒度权限，沙盒化 | 性能优先，[Rust](https://www.rust-lang.org/) 后端 |

这个表格清晰地比较了两个领先的桌面框架，强调了架构选择对性能、资源效率和安全性的影响，这些是桌面应用程序的关键因素。

