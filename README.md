# 通序历史

纯离线的中国历史通识 App：全景时间线、历代朝代库、帝王谱系、大事纪年、典故成语、知识图谱、古今地名与干支换算。所有内容均内置在前端，不依赖任何后端服务，也不申请网络权限。

## 技术栈

React 19 + TypeScript + Vite + Tailwind CSS v4，使用 Capacitor 8 打包 Android（包名 `com.tongxulishi.app`）。

## 本地运行

**环境要求：** Node.js 22.12+

1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`（默认 http://localhost:3000）
3. 类型检查：`npm run lint`
4. 生产构建：`npm run build`

## 打包 Android

```bash
npm run cap:sync   # 构建前端并同步到 android/app/src/main/assets/public
npm run cap:open   # 在 Android Studio 中打开并出包
```

注意：每次改动前端后，必须重新执行 `npm run cap:sync`，否则 APK 内嵌的仍是旧构建产物。

## 数据与隐私

收藏与搜索历史仅保存在设备本地（LocalStorage）。应用无账户体系、无第三方 SDK、无网络权限。
