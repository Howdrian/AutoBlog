# 部署指南

## 🚀 Vercel部署步骤

### 1. GitHub仓库配置
```bash
# 1. 在GitHub创建新仓库 (示例: AutoBlog)
# 2. 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Vercel部署配置

#### 在Vercel Dashboard中：
1. 点击 "New Project"
2. 选择您的GitHub仓库
3. 项目设置：
   - **Framework**: Astro (自动检测)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

#### 环境变量设置：
```env
PUBLIC_SANITY_PROJECT_ID=pc4vypln
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. 自定义域名（可选）
1. 在Vercel项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照提示配置DNS记录

### 4. 部署后配置

#### 更新站点URL：
在 `src/site.config.ts` 中更新：
```typescript
url: "https://getsomedrink.vercel.app/"
```

#### Sanity CORS配置：
```bash
sanity cors add https://getsomedrink.vercel.app
```

## 🛠️ 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 📝 内容管理

1. 在 [sanity.io](https://sanity.io) 创建项目
2. 获取项目ID并更新 `.env` 文件
3. 运行 `sanity login` 登录
4. 运行 `sanity cors add http://localhost:4322` 添加本地开发域名
5. 访问 `https://your-project.sanity.studio/` 管理内容

## 🔍 功能说明

- **搜索**: 按 `Ctrl+K` 或 `Cmd+K` 打开搜索
- **标签筛选**: 在搜索结果中按标签筛选
- **主题切换**: 点击右上角月亮/太阳图标
- **响应式**: 支持各种设备尺寸

## 📊 性能优化

- 静态生成 (SSG)
- 图片自动优化
- CSS/JS 压缩
- CDN 加速 (Vercel)
- Lighthouse 满分优化

## 🐛 常见问题

### 构建失败
检查 `package.json` 中的依赖版本，确保兼容性。

### 搜索不工作
搜索功能只在生产环境有效，本地开发请运行 `pnpm build && pnpm preview`。

### Sanity内容不显示
检查环境变量配置和CORS设置。
