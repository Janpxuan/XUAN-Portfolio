# 个人作品集网站框架文档

> 版本说明：本版基于当前确认的浅色 iOS / Glassmorphism 风格效果图进行重新整理。  
> 页面以单页式作品集为主，不包含全屏 PDF 预览；作品展示采用手风琴式项目卡片，Other Works 采用每行 4 张的网格展示。

---

## 1. 项目定位

本项目是一个面向求职、合作与个人品牌展示的个人作品集网站。

网站整体风格参考当前效果图，采用：

- 浅色背景
- iOS 风格视觉语言
- 玻璃拟态卡片
- 柔和蓝紫渐变
- 大留白
- 圆角组件
- 轻量阴影
- 清晰的模块层级

网站核心目标是让访问者快速了解：

1. 你是谁
2. 你的设计岗位与能力方向
3. 你的工作经历
4. 你的重点项目
5. 你的其他视觉作品
6. 如何快速联系你

---

## 2. 页面整体结构

网站采用单页式结构，页面从上到下依次为：

```text
Home Page
├── Header 顶部导航
├── Hero 首屏
├── Work Experience 工作经历
├── Featured Projects 重点项目
├── Other Works 其他作品
├── Contact 联系区域
└── Footer 页脚
```

---

## 3. 视觉风格规范

## 3.1 整体风格关键词

```text
iOS Style
Glassmorphism
Soft Gradient
Clean Layout
Rounded Cards
Minimal Portfolio
Light UI
Premium Designer Website
```

---

## 3.2 色彩方向

### 主背景

以浅色为主，使用柔和蓝紫渐变营造干净、轻盈的视觉氛围。

```text
Background: #F7FAFF / #FFFFFF
Gradient: Light Blue → Lavender → Soft Purple
```

### 主文字

```text
Primary Text: 深蓝黑 / 接近 #0F172A
Secondary Text: 灰蓝色 / 接近 #64748B
Muted Text: 浅灰蓝 / 接近 #94A3B8
```

### 品牌强调色

```text
Primary Accent: Blue / #4F7CFF
Secondary Accent: Purple / #8B5CF6
Success Accent: Green / #22C55E
```

---

## 3.3 组件风格

所有主要模块采用轻量卡片化设计。

```text
Card Background: rgba(255,255,255,0.72)
Card Border: rgba(226,232,240,0.8)
Card Radius: 20px - 32px
Card Shadow: 轻量柔和阴影
Blur: 可使用 backdrop-filter blur
```

---

## 3.4 页面间距

页面楼层之间采用统一间距：

```text
Section Gap: 88px
```

主要楼层包括：

```text
Hero → Work Experience: 88px
Work Experience → Featured Projects: 88px
Featured Projects → Other Works: 88px
Other Works → Contact: 88px
```

说明：

- 楼层间隔统一为 88px，用于保持页面呼吸感。
- 模块内部间距可根据内容密度控制在 24px、32px、40px。
- Featured Projects 中 3 个项目卡片的间距为 20px。

---

# 4. Header 顶部导航

## 4.1 模块目标

顶部导航用于展示个人品牌名称，并提供快速跳转入口。

---

## 4.2 内容结构

```text
左侧：Yuntun + 蓝紫渐变圆点
中间：Work / About / Other Works / Contact
右侧：主题切换图标
```

---

## 4.3 导航项

```text
Work
About
Other Works
Contact
```

当前版本为单页结构，导航点击后滚动到对应楼层。

---

## 4.4 视觉建议

- Header 高度保持轻量。
- 背景可使用半透明白色。
- 吸顶时可加入轻微 blur 效果。
- 导航文字保持小号、清晰、克制。
- 右侧主题图标可作为后续深浅色切换入口。

---

# 5. Hero 首屏

## 5.1 模块目标

Hero 首屏用于建立第一印象，让访问者快速知道：

- 姓名
- 岗位
- 个人定位
- 联系方式
- 工作经验
- 目标岗位
- 作品入口

---

## 5.2 内容结构

```text
姓名
岗位
可用状态标签
一句个人介绍
电话
工作经验
目标岗位
View Works 按钮
Contact Me 按钮
右侧视觉图形
```

---

## 5.3 页面文案

```text
Yuntun

UI/UX Designer

I create clear, engaging and
human-centered digital experiences.
```

状态标签：

```text
Available for new opportunities
```

信息组：

```text
Phone
+86 138 8888 8888

Experience
3+ Years Experience

Position
UI/UX Designer / Product Designer
```

按钮：

```text
View Works
Contact Me
```

---

## 5.4 右侧视觉图形

右侧使用抽象玻璃拟态视觉图，作为个人品牌视觉锚点。

视觉元素建议：

- 半透明玻璃卡片
- 蓝紫渐变光效
- 柔和圆形球体
- 层叠卡片
- 设计理念短句

文案示例：

```text
Design
with clarity
and empathy.
```

---

## 5.5 交互建议

| 元素 | 交互 |
|---|---|
| View Works | 点击滚动到 Featured Projects |
| Contact Me | 点击滚动到 Contact |
| 电话信息 | 可点击复制 |
| 状态标签 | 可轻微闪烁或保持静态 |
| 右侧视觉图形 | 可加入轻微浮动动画 |

---

# 6. Work Experience 工作经历

## 6.1 模块目标

工作经历区用于展示职业背景，增强可信度。

---

## 6.2 模块位置

该模块位于 Hero 下方，与 Hero 保持 88px 楼层间距。

---

## 6.3 内容结构

```text
标题
副标题
时间线
3 个经历卡片
```

---

## 6.4 标题文案

```text
Work Experience
My professional journey so far.
```

---

## 6.5 展示形式

采用横向时间线 + 3 张经历卡片。

```text
Timeline
├── 01 Aurora Tech
├── 02 Nebula Studio
└── 03 Linker Inc.
```

每张卡片包含：

```text
编号
公司首字母图标
公司名称
岗位
时间
职责描述
```

---

## 6.6 内容示例

### Experience 01

```text
Aurora Tech
UI/UX Designer
2021.06 — Present

Responsible for product experience design
from 0-1. Covering research, interaction
and visual design.
```

### Experience 02

```text
Nebula Studio
Product Designer
2020.03 — 2021.05

Focused on improving user experience
and designing system for B2B SaaS
products.
```

### Experience 03

```text
Linker Inc.
UI Designer
2018.07 — 2020.02

Worked on interface design and visual
optimization for multiple mobile
applications.
```

---

## 6.7 视觉建议

- 三张卡片横向排列。
- 卡片之间保持均衡间距。
- 时间线节点与卡片编号对应。
- 图标使用蓝、紫、绿三种色块区分。
- 卡片保持白色半透明底 + 柔和阴影。

---

# 7. Featured Projects 重点项目

## 7.1 模块目标

Featured Projects 是首页核心模块，用于展示 3 个重点作品项目。

当前版本不做全屏预览，不展示 PDF 弹窗。

项目展示方式为：

```text
手风琴式项目列表
```

默认只展开一个重点项目，其他项目为收起状态。

---

## 7.2 模块位置

该模块位于 Work Experience 下方，与上一楼层保持 88px 间距。

---

## 7.3 标题文案

```text
Featured Projects
Selected case studies.
```

---

## 7.4 项目数量

```text
3 个重点项目
```

---

## 7.5 项目卡片间距

```text
Project Item Gap: 20px
```

说明：

- 三张项目卡片之间的垂直间距统一为 20px。
- 展开项目与收起项目之间也保持 20px。
- 用统一间距增强列表节奏与可读性。

---

## 7.6 项目展示结构

```text
Featured Projects
├── Project 01 展开状态
├── Project 02 收起状态
└── Project 03 收起状态
```

---

## 7.7 展开项目结构

展开状态包含：

```text
项目图标
项目名称
项目类型
项目封面
项目简介
项目标签
View Project 按钮
收起按钮
```

---

## 7.8 收起项目结构

收起状态包含：

```text
项目图标
项目名称
项目类型
展开按钮
```

---

## 7.9 示例项目

### Project 01：Wander — Travel Planner

```text
Wander — Travel Planner
Mobile App · Travel

A smart travel planner that helps users discover, plan and
organize personalized trips with ease.

Tags:
Research
UX Design
UI Design
```

按钮：

```text
View Project
```

### Project 02：Finova — Finance Dashboard

```text
Finova — Finance Dashboard
Web App · Fintech
```

### Project 03：Flowy — Meditation App

```text
Flowy — Meditation App
Mobile App · Mental Health
```

---

## 7.10 交互逻辑

```text
默认状态：
Project 01 展开
Project 02 收起
Project 03 收起

点击 Project 02：
Project 01 收起
Project 02 展开
Project 03 收起

点击 Project 03：
Project 01 收起
Project 02 收起
Project 03 展开
```

---

## 7.11 点击行为

当前版本取消全屏 PDF 预览。

点击 `View Project` 后建议采用以下方案之一：

### 方案 A：跳转项目详情页

```text
/project/wander
```

适合后续做完整 Case Study 页面。

### 方案 B：滚动展开更多项目内容

```text
在当前页面展开更多项目说明
```

适合单页式作品集。

### 方案 C：打开项目独立链接

```text
打开 Behance / Notion / PDF 文件链接
```

适合快速上线。

推荐第一阶段使用：

```text
View Project → 项目详情页
```

---

# 8. Other Works 其他作品

## 8.1 模块目标

Other Works 用于展示更多设计作品，补充视觉广度和审美风格。

该模块不承担深度项目说明，重点是快速呈现视觉成果。

---

## 8.2 模块位置

该模块位于 Featured Projects 下方，与上一楼层保持 88px 间距。

---

## 8.3 标题文案

```text
Other Works
A collection of designs and explorations.
```

按钮：

```text
View More
```

---

## 8.4 展示数量

当前效果图中 Other Works 以每行 4 张图片展示。

建议正式版本可配置为：

```text
8 张 / 12 张
```

第一阶段可使用 8 张，后续扩展到 12 张。

---

## 8.5 网格规则

```text
Desktop: 4 columns
Tablet: 2 columns
Mobile: 1 column
```

当前桌面端要求：

```text
每行 4 张
```

---

## 8.6 单张作品卡片结构

默认情况下只展示图片。

Hover 后可展示：

```text
作品名称
作品类型
年份
```

---

## 8.7 图片内容方向

可展示以下类型作品：

```text
移动端界面
Web Dashboard
品牌视觉
海报设计
AIGC 视觉
产品渲染
插画探索
运营视觉
```

---

## 8.8 示例作品

```text
Travel Illustration
Finance App UI
Aurora Smart Watch
Dashboard UI
Leafy Plant Care App
Messages App UI
Echoes of Light
Smart Home Control
```

---

## 8.9 交互建议

| 操作 | 效果 |
|---|---|
| Hover 图片 | 图片轻微放大 |
| Hover 图片 | 显示半透明蒙层 |
| Hover 图片 | 显示作品标题 |
| 点击图片 | 打开轻量图片预览 |
| View More | 跳转更多作品页 |

---

# 9. Contact 联系区域

## 9.1 模块目标

Contact 区域用于完成最终转化，让访问者能够快速复制联系方式。

---

## 9.2 模块位置

该模块位于 Other Works 下方，与上一楼层保持 88px 间距。

---

## 9.3 内容结构

```text
标题
描述
Phone 卡片
WeChat 卡片
Email 卡片
```

---

## 9.4 标题文案

```text
Let’s work together.
```

描述：

```text
I’m currently open to new opportunities.
Feel free to reach out.
```

---

## 9.5 联系卡片

### Phone

```text
Phone
+86 138 8888 8888
Click to copy
```

### WeChat

```text
WeChat
yuntun_design
Click to copy
```

### Email

```text
Email
hello@yuntun.design
Click to copy
```

---

## 9.6 联系卡片交互

| 操作 | 效果 |
|---|---|
| Hover 卡片 | 卡片轻微上浮 |
| 点击卡片 | 复制内容 |
| 复制成功 | 显示 Copied |
| Email 卡片 | 可支持 mailto |
| 移动端点击 | 同样复制内容 |

---

# 10. Footer 页脚

## 10.1 内容结构

```text
© 2024 Yuntun. All rights reserved.
Back to Top 按钮
```

---

## 10.2 交互建议

- 右下角保留返回顶部按钮。
- 点击后平滑滚动回 Hero。
- Footer 保持简洁，不增加过多信息。

---

# 11. 响应式规则

## 11.1 桌面端

```text
Hero: 左文案 + 右视觉图形
Experience: 3 columns
Featured Projects: Accordion layout
Other Works: 4 columns
Contact: 左文案 + 右 3 张联系卡片
```

---

## 11.2 平板端

```text
Hero: 上下布局或压缩双栏
Experience: 2 columns
Featured Projects: 单列
Other Works: 2 columns
Contact: 2 columns 或单列
```

---

## 11.3 移动端

```text
Hero: 单列
Experience: 单列时间线
Featured Projects: 单列手风琴
Other Works: 1 column
Contact: 单列卡片
```

---

# 12. 技术结构建议

## 12.1 推荐技术栈

```text
Next.js
Tailwind CSS
Framer Motion
TypeScript
Vercel
```

当前版本已取消全屏 PDF 预览，因此不需要优先接入 `react-pdf` 或 `PDF.js`。

后续如需要项目 PDF 预览，可作为第二阶段功能补充。

---

## 12.2 组件拆分

```text
components/
├── Header.tsx
├── Hero.tsx
├── Experience.tsx
├── FeaturedProjects.tsx
├── ProjectAccordionItem.tsx
├── OtherWorksGrid.tsx
├── Contact.tsx
├── ContactCard.tsx
├── Footer.tsx
└── BackToTop.tsx
```

---

## 12.3 数据文件

```text
data/
├── profile.ts
├── navigation.ts
├── experiences.ts
├── projects.ts
├── otherWorks.ts
└── contact.ts
```

---

## 12.4 数据结构建议

### profile.ts

```ts
export const profile = {
  name: "Yuntun",
  role: "UI/UX Designer",
  status: "Available for new opportunities",
  description: "I create clear, engaging and human-centered digital experiences.",
  phone: "+86 138 8888 8888",
  experience: "3+ Years Experience",
  position: "UI/UX Designer / Product Designer",
};
```

### projects.ts

```ts
export const projects = [
  {
    id: "wander",
    icon: "W",
    title: "Wander — Travel Planner",
    type: "Mobile App · Travel",
    description:
      "A smart travel planner that helps users discover, plan and organize personalized trips with ease.",
    tags: ["Research", "UX Design", "UI Design"],
    cover: "/images/projects/wander.jpg",
    link: "/projects/wander",
  },
  {
    id: "finova",
    icon: "F",
    title: "Finova — Finance Dashboard",
    type: "Web App · Fintech",
    cover: "/images/projects/finova.jpg",
    link: "/projects/finova",
  },
  {
    id: "flowy",
    icon: "~",
    title: "Flowy — Meditation App",
    type: "Mobile App · Mental Health",
    cover: "/images/projects/flowy.jpg",
    link: "/projects/flowy",
  },
];
```

### otherWorks.ts

```ts
export const otherWorks = [
  {
    title: "Travel Illustration",
    type: "Illustration",
    image: "/images/works/work-01.jpg",
  },
  {
    title: "Finance App UI",
    type: "Mobile UI",
    image: "/images/works/work-02.jpg",
  },
  {
    title: "Aurora Smart Watch",
    type: "Product Design",
    image: "/images/works/work-03.jpg",
  },
  {
    title: "Dashboard UI",
    type: "Web UI",
    image: "/images/works/work-04.jpg",
  },
];
```

---

# 13. 页面开发优先级

## 13.1 第一阶段：MVP

```text
Header
Hero
Work Experience
Featured Projects 手风琴
Other Works 4 列网格
Contact 卡片复制
Footer
响应式适配
```

---

## 13.2 第二阶段：体验增强

```text
滚动进入动画
Hero 玻璃图形浮动动画
项目卡片展开动画
Other Works hover 蒙层
复制成功 Toast
返回顶部动画
```

---

## 13.3 第三阶段：内容扩展

```text
项目详情页
更多作品页
中英文切换
深浅色模式
PDF / Case Study 独立预览
CMS 内容管理
```

---

# 14. 当前版本核心规则汇总

```text
页面风格：浅色 iOS / Glassmorphism
页面结构：单页式作品集
外层样式：无外部白边，无整体圆角容器
楼层间距：88px
Featured Projects：3 个项目，手风琴形式
Featured Projects 卡片间距：20px
PDF 全屏预览：当前版本取消
Other Works：桌面端每行 4 张
Contact：3 张可复制联系方式卡片
```

---

# 15. 核心体验总结

当前版本的网站体验可以总结为：

> 一个以浅色 iOS 风格为基础，通过 Hero 建立个人品牌印象、通过工作经历建立专业可信度、通过手风琴项目卡片展示重点案例、通过 4 列作品网格补充视觉广度，并最终通过联系卡片完成转化的个人作品集网站。

整体页面应保持：

- 干净
- 轻盈
- 专业
- 有呼吸感
- 视觉统一
- 交互克制
- 适合设计师个人品牌展示
