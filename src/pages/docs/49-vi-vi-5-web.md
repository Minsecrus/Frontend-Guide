---
layout: ../../layouts/DocLayout.astro
title: "VI. 新兴技术和专业领域 / VI.5 Web 音频和媒体流：实时音频/视频处理"
order: 49
slug: "49-vi-vi-5-web"
---

**目的**：在浏览器中实现高级音频处理、实时通信和媒体捕获/录制。

- [**Web Audio API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)：强大的音频控制系统，允许模块化路由、添加效果、创建可视化和空间效果。补充 `<audio>` 元素以进行复杂处理。
- **Media Streams API (Media Capture and Streams API)**：支持流式传输音频和视频数据，允许访问用户摄像头/麦克风 (getUserMedia()) 和媒体轨道操作。
- **Media Source Extensions (MSE)**：支持无插件的基于 Web 的流媒体，允许通过 JavaScript 为 `<audio>` 和 `<video>` 元素创建媒体流，并对获取进行细粒度控制。
- **[WebRTC](https://webrtc.org/) (Web Real-Time Communication)**：使 Web 应用程序能够捕获和流式传输音频/视频，并在浏览器之间点对点交换任意数据而无需经过中心服务器中转，从而促进电话会议和实时应用程序。

这些 API（Web Audio、Media Streams、WebRTC）是浏览器中复杂实时多媒体应用程序（例如，视频会议、在线 DAW）的关键推动者。它们代表了 Web 功能超越静态内容的重大扩展，有效地带来了更丰富的交互式体验。
