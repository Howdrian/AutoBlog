# 🌵 我的个人博客

使用 Astro Cactus + Sanity CMS 构建的现代化个人博客，支持强大的搜索功能和网页端内容管理。

## ✨ 功能特色

- 🚀 **Astro 5 + TypeScript** - 现代静态站点生成器
- 🔍 **Pagefind 搜索** - 支持标签筛选和快捷键 (`Ctrl+K`)
- 📝 **Sanity CMS** - 专业的网页端内容管理系统
- 🎨 **TailwindCSS 4** - 现代化响应式设计
- 🌓 **深色模式** - 自动主题切换
- ⚡ **极致性能** - Lighthouse 满分优化
- 📱 **完全响应式** - 适配所有设备
- 🛡️ **SEO 友好** - 完善的元数据和结构化数据

## 🛠️ 技术栈

- **框架**: Astro 5
- **样式**: TailwindCSS 4 + Tailwind Typography
- **内容管理**: Sanity CMS
- **搜索**: Pagefind 静态搜索
- **部署**: Vercel
- **语言**: TypeScript

## 📦 快速开始

```bash
# 克隆项目
git clone https://github.com/Howdrian/AutoBlog.git
cd AutoBlog

# 准备并安装依赖
corepack enable pnpm
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 🌐 部署

### Vercel 部署 (推荐)

1. 在 [Vercel](https://vercel.com) 中导入此 GitHub 仓库
2. Vercel 会自动检测 Astro 并配置构建设置
3. 添加环境变量（见下方配置）
4. 点击部署即可

### 环境变量配置

```env
PUBLIC_SANITY_PROJECT_ID=pc4vypln
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

## 📝 内容管理

### Sanity CMS 设置

1. 在 [sanity.io](https://sanity.io) 创建新项目
2. 获取项目 ID 并更新环境变量
3. 配置 CORS 允许您的域名
4. 访问 `https://pc4vypln.sanity.studio/` 开始创作

### 本地 Sanity Studio

```bash
# 安装 Sanity CLI
npm install -g @sanity/cli

# 登录 Sanity
sanity login

# 添加 CORS (开发环境)
sanity cors add http://localhost:4322

# 添加 CORS (生产环境)
sanity cors add https://getsomedrink.vercel.app
```

## 🔍 使用指南

### 搜索功能
- 按 `Ctrl+K` (Windows/Linux) 或 `Cmd+K` (Mac) 打开搜索
- 支持标签筛选和模糊搜索
- 实时搜索结果展示

### 创作工作流
1. 在 Sanity Studio 中创建文章
2. 设置标题、描述、标签等元数据
3. 编写 Markdown 内容
4. 发布后自动同步到网站

### 主题定制
- 支持明暗主题自动切换
- 可在 `src/site.config.ts` 中自定义配置
- TailwindCSS 支持完全自定义样式

## 📊 性能优化

- **静态生成**: 预渲染所有页面
- **图片优化**: 自动压缩和格式转换
- **代码分割**: 按需加载 JavaScript
- **CDN 加速**: Vercel 全球 CDN
- **搜索优化**: 静态索引，无需服务器

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📄 许可证

MIT License

## 🔗 相关链接

- [Astro 文档](https://docs.astro.build/)
- [Astro Cactus 主题](https://github.com/chrismwilliams/astro-theme-cactus)
- [Sanity CMS](https://www.sanity.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel 部署](https://vercel.com/)

---

⭐ 如果这个项目对您有帮助，请给个 Star！
