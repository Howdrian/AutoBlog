# 📝 Sanity CMS 配置指南

## 🚀 快速开始

### 1. 创建Sanity项目

1. **访问Sanity官网**：https://sanity.io
2. **注册/登录账号**：推荐使用GitHub账号登录
3. **创建新项目**：
   - 点击 "Create project"
   - 项目名称：`我的个人博客` 或您喜欢的名称
   - 选择数据集：`production`
   - 选择地区：`Asia Pacific` (亚太地区，访问更快)

### 2. 获取项目配置信息

创建项目后，您会看到：
```
Project ID: pc4vypln
Dataset: production
```

### 3. 更新环境变量

在项目根目录的 `.env` 文件中更新：
```env
PUBLIC_SANITY_PROJECT_ID=pc4vypln
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-09-18
```

**重要**：在Vercel中也要添加相同的环境变量！

### 4. 使用Sanity CLI (推荐使用npx)

**推荐方式：使用npx（无需安装）**
```bash
# 登录到您的Sanity账号
npx @sanity/cli login

# 验证登录状态
npx @sanity/cli whoami

# 配置CORS
npx @sanity/cli cors add http://localhost:4322 --credentials
npx @sanity/cli cors add https://getsomedrink.vercel.app --credentials
```

**或者本地安装（项目级别，已配置）**
```bash
# 已经在项目中安装了@sanity/cli
# 可以使用项目脚本：

# 登录Sanity
pnpm sanity:login

# 或直接使用npx
npx sanity login
npx sanity whoami

# 配置CORS（开发环境）
pnpm sanity:cors http://localhost:4322 --credentials

# 配置CORS（生产环境）
pnpm sanity:cors https://getsomedrink.vercel.app --credentials
```

### 5. 配置CORS (跨域访问权限)

```bash
# 开发环境
npx @sanity/cli cors add http://localhost:4322 --credentials

# 生产环境 (部署到Vercel后执行)
npx @sanity/cli cors add https://getsomedrink.vercel.app --credentials
```

## 🛠️ 使用Sanity Studio

### 方法1：在线Studio (推荐)
访问：`https://pc4vypln.sanity.studio/`

### 方法2：本地Studio
```bash
# 使用项目脚本（推荐）
pnpm sanity:studio

# 或使用npx
npx sanity start

# 访问：http://localhost:3333
```

## 📋 内容管理

### 创建博客文章
1. 在Studio中点击 "博客文章"
2. 填写文章信息：
   - **标题**：文章标题 (必填)
   - **URL路径**：自动生成，可修改
   - **描述**：文章摘要 (必填)
   - **发布日期**：选择发布时间
   - **标签**：添加相关标签
   - **内容**：文章正文 (Markdown格式)

### 文章状态管理
- **草稿**：未发布的文章
- **特色文章**：在首页高亮显示
- **封面图片**：可选，添加文章封面

## 🔧 常见问题

### Q: 为什么看不到我创建的文章？
A: 检查以下几点：
1. 确保文章未标记为"草稿"
2. 检查环境变量是否正确设置
3. 确认CORS配置是否正确

### Q: 本地开发时无法连接Sanity？
A: 执行以下命令：
```bash
npx @sanity/cli cors add http://localhost:4322 --credentials
```

### Q: 部署后无法访问Sanity？
A: 添加生产环境CORS：
```bash
npx @sanity/cli cors add https://getsomedrink.vercel.app --credentials
```

### Q: API版本有什么影响？
A: 
- `2024-09-18`: 最新功能，推荐新项目使用
- `2024-01-01`: 稳定版本，保守选择
- 版本锁定可确保API行为一致性

## 🎯 下一步

1. ✅ 创建Sanity项目
2. ✅ 更新环境变量
3. ✅ 配置CORS权限
4. 📝 创建第一篇博客文章
5. 🚀 在网站上查看效果

## 🆘 需要帮助？

- [Sanity官方文档](https://www.sanity.io/docs)
- [Astro + Sanity集成指南](https://docs.astro.build/en/guides/cms/sanity/)
- [Sanity Schema类型](https://www.sanity.io/docs/schema-types)

---

💡 **提示**：完成配置后，您可以在 `/admin` 路径查看管理页面状态！
