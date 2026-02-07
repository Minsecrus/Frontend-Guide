---
layout: ../../layouts/DocLayout.astro
title: "IV. 前端框架和库：构建现代 UI / IV.5 htmx：超媒体驱动开发"
order: 24
slug: "24-iv-ui-iv-5-htmx"
---

**htmx** 允许使用 HTML 实现丰富的交互式 Web 界面，同时最小化 JavaScript 的使用。它通过响应服务器请求部分更新 HTML 来工作，利用 HTTP 方法和 hx-get、hx-target、hx-trigger、hx-swap 等属性。

**htmx 的哲学**是优先考虑稳定性，避免新的核心功能，专注于通用超媒体控制并支持辅助工具。

htmx 代表了一种对 JavaScript 密集型前端格局的理念的反思。它对超媒体驱动开发 的关注挑战了复杂交互必须完全存在于客户端的假设，为更简单、更快速、JavaScript 开销更少的应用程序提供了替代方案。这可以有效地缩短某些类型应用程序的开发周期。

