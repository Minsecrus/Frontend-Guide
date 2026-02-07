# 现代 Web 前端开发指南（Astro 版）

把原始长文 `前端.md` 自动拆分为可导航的 Astro 文档站点。

## 特性

- 自动按章节拆分：优先按 `##`，长章节自动按 `###` 继续拆分
- 侧边栏分级目录：按父章节分组展示子页面
- 侧边栏可折叠：支持分组展开/收起
- 状态持久化：记住分组展开状态和侧边栏滚动位置
- 静态构建：输出到 `dist/`

## 目录结构

- `前端.md`：原始大文档
- `scripts/split-front-end-guide.mjs`：拆分脚本
- `src/pages/docs/*.md`：拆分后文档页面（自动生成）
- `src/data/docs.ts`：导航元数据（自动生成）
- `src/layouts/DocLayout.astro`：文档布局与侧边栏交互

## 使用方式

```bash
pnpm install
pnpm run split
pnpm run dev
```

生产构建：

```bash
pnpm run build
```

## 脚本

- `pnpm run split`：重新拆分 `前端.md` 并生成页面与导航数据
- `pnpm run dev`：本地开发
- `pnpm run build`：静态构建
- `pnpm run preview`：预览构建产物

## 许可

本项目内容采用 **CC BY-NC-SA 4.0** 许可协议。详见 `LICENSE`。
