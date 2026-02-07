---
layout: ../../layouts/DocLayout.astro
title: "VI. 新兴技术和专业领域 / VI.8 边缘计算：Cloudflare Workers、Vercel Edge Functions、Deno Deploy"
order: 52
slug: "52-vi-vi-8-cloudflare-workersvercel-edge-functionsdeno-deploy"
---
### **VI.8 边缘计算：Cloudflare Workers、Vercel Edge Functions、Deno Deploy**

**目的**：在更靠近用户的地方（网络“边缘”）运行无服务器函数，以减少延迟并提高性能。

- [**Cloudflare Workers**](https://workers.cloudflare.com/)：在 Cloudflare 全球网络上运行的无服务器函数，提供低延迟。
- [**Vercel Edge Functions**](https://vercel.com/docs/functions/edge-functions)：在 Vercel 边缘网络上运行的无服务器函数，通常利用 Cloudflare Workers。
- [**Deno Deploy**](https://deno.com/deploy)：无服务器平台，用于在全球 Deno 边缘基础设施上部署 JavaScript、TypeScript 和 WebAssembly 代码。

边缘计算 是对传统中心化服务器架构局限性的直接响应，特别是对于全球应用程序而言。通过将计算移至更靠近用户的位置，它有效地减少了延迟（TTFB、E2E 延迟）并提高了感知性能，这对于现代 Web 体验至关重要。

#### **表格：边缘计算平台比较**

| 平台名称                                                                      | 提供商                        | 核心技术（示例）                                       | 性能（延迟，TTFB） | 基础设施（CDN，多云）                                                       | 功能（示例）                                      |
| :---------------------------------------------------------------------------- | :---------------------------- | :----------------------------------------------------- | :----------------- | :-------------------------------------------------------------------------- | :------------------------------------------------ |
| [**Cloudflare Workers**](https://workers.cloudflare.com/)                     | Cloudflare                    | Workers                                                | 极低延迟           | 全球 CDN                                                                    | 无服务器函数，背景函数，D1 数据库，R2 存储        |
| [**Vercel Edge Functions**](https://vercel.com/docs/functions/edge-functions) | [Vercel](https://vercel.com/) | [Edge](https://www.microsoft.com/en-us/edge) Functions | 较高延迟           | 多云 (GCP, AWS)，利用 [Cloudflare Workers](https://workers.cloudflare.com/) | 无服务器函数，背景函数，Postgres 数据库，实时分析 |
| [**Deno Deploy**](https://deno.com/deploy)                                    | Deno                          | Deno Runtime                                           | 良好               | Deno 边缘基础设施                                                           | 无服务器函数，背景函数，内置 KV 存储              |

这个表格帮助学习者理解边缘计算的格局，这是高性能全球应用程序的关键部署策略。它突出了不同提供商如何利用分布式基础设施来最小化延迟和增强可伸缩性。

