# 项目作品集

这是我的个人项目作品集网站，用于展示我参与或完成的项目、技术方案、实践过程、竞赛经历、软件著作权和阶段性成果。

## 本地预览

在仓库根目录运行：

```powershell
python -m http.server 4175
```

然后访问 <http://localhost:4175>。

这是纯前端静态网站，不需要 Node.js、数据库或后端服务。项目内容和交互数据内置在 `script.js` 中，联系表单通过访客的邮件客户端发送邮件。

## GitHub Pages

仓库已按 GitHub Pages 的根目录部署方式组织。发布设置：

1. 打开仓库的 `Settings` → `Pages`。
2. 在 `Build and deployment` 中选择 `Deploy from a branch`。
3. 选择分支 `main` 和目录 `/ (root)`，点击 `Save`。

发布后访问：<https://boyikao.github.io/portfolio/>

## 文件说明

- `index.html`：页面结构和作品集内容入口。
- `style.css`：视觉系统、响应式布局和动效。
- `script.js`：项目筛选、详情抽屉、代码展示和联系表单交互。
- `assets/`：公开展示所需的项目实物图片。

## 公开内容边界

仓库只保留适合公开展示的网页源码、精简项目说明、代码片段和项目实物图片。原始 DOCX、PPTX、ZIP、完整 CSV/XLS/XLSX、证书扫描件和软著 PDF 未直接上传，以避免泄露个人信息、原始样本或内部资料。

项目素材来源于 `D:/桌面/作品集/`。正式公开前仍应检查图片中是否包含他人正脸、学校内部信息或不希望公开的设备细节。
