# 现代 Web 前端开发指南

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

## GitHub Actions 自动部署（GitHub Pages）

仓库已内置工作流：`.github/workflows/deploy.yml`。  
当 `main` 分支有新提交（或手动触发）时，会自动构建并部署 `dist/` 到 GitHub Pages。
当前部署基路径固定为 `/FrontEnd`，目标地址为 `https://<GitHub用户名>.github.io/FrontEnd/`。

使用前请确认：

1. 仓库 `Settings -> Pages -> Source` 已设置为 **GitHub Actions**
2. 默认分支为 `main`（如果不是，请同步修改工作流触发分支）

## 脚本

- `pnpm run dev`：本地开发
- `pnpm run build`：静态构建
- `pnpm run preview`：预览构建产物

## 许可

本项目内容采用 **CC BY-NC-SA 4.0** 许可协议。详见 `LICENSE`。
