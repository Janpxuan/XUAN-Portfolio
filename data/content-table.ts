export const contentTable = {
  seo: {
    title: "XUAN Portfolio",
    description: "A light iOS glassmorphism portfolio for UI/UX designer Yuntun.",
  },
  header: {
    brand: "Yuntun",
    logoImage: {
      src: "/header-logo.svg",
      alt: "Header logo",
    },
    navigation: [
      { label: "About", href: "#experience" },
      { label: "Work", href: "#featured-projects" },
      { label: "Other Works", href: "#other-works" },
      { label: "Contact", href: "#contact" },
    ],
    contactAnchorLabel: "Go to contact",
  },
  hero: {
    status: "Available for new opportunities",
    name: "禤振鹏",
    role: "UI/UX Designer",
    description: "Committed to creating clear, user-centered digital experiences.",
    facts: [
      { label: "Phone", value: "+86 139 0236 4952" },
      { label: "Experience", value: "4年+ 工作经验" },
      { label: "Position", value: "UI/UX Designer / AI Designer" },
    ],
    primaryAction: {
      label: "查看作品",
      href: "#featured-projects",
    },
    secondaryAction: {
      label: "联系我",
      href: "#contact",
    },
    visual: {
      eyebrow: "Design",
      image: {
        src: "/hero/personal-photo.png",
        alt: "Personal portrait photo",
      },
      chips: ["UX", "UI", "AI"],
    },
  },
  experience: {
    title: "Work Experience",
    subtitle: "我迄今为止的旅程",
    items: [
      {
        number: "01",
        icon: "Y",
        avatarSrc: "/work-experience/guangzhou-university.png",
        company: "广州大学",
        role: "美术学",
        period: "2016-2020",
        color: "from-slate-700 to-slate-500",
        description:
          "广州大学美术学专业，4年UI/UX工作经验，深度参与产品开发全流程。对AI怀揣着无限热情，掌握AI助力提速设计工作的能力，同时擅长IP设计以及运营设计能力",
      },
      {
        number: "02",
        icon: "A",
        avatarSrc: "/work-experience/tourbox.png",
        company: "合肥图哇科技有限公司",
        role: "UI 设计",
        period: "2025.06.03 - 2025.12.15",
        color: "from-blue-500 to-cyan-400",
        description:
          "参与图哇科技 TourBox 产品线 UI 设计，负责电脑、iPad 客户端及网页端页面。深入各端设计，熟悉软硬件结合，协同推进上线，助力产品达成目标",
      },
      {
        number: "03",
        icon: "N",
        avatarSrc: "/work-experience/dongguan-yunxiang.png",
        company: "东莞韵想信息科技有限责任公司",
        role: "UI/UX 设计",
        period: "2024.01 - 2025.04",
        color: "from-violet-500 to-fuchsia-400",
        description:
          "在开发者社区项目，深入体验设计，做需求分析、竞品调研与视觉设计。协同开发、测试跟进上线检视。与业务团队紧密沟通，明确目标，精雕页面交互与视觉，助力达成业务目标",
      },
      {
        number: "04",
        icon: "L",
        avatarSrc: "/work-experience/momo.png",
        company: "清远墨墨教育科技有限公司",
        role: "UI 设计 · 产品助理",
        period: "2021.06 - 2023.06",
        color: "from-emerald-500 to-teal-400",
        description:
          "聚焦 C 端（App 和 Web）页面设计，运营设计，搭建 APP 设计规范。全程跟进产品设计，参与需求等分析，梳理痛点，定义风格，输出方案，并据上线及用户反馈优化体验与设计质量",
      },
    ],
  },
  featuredProjects: {
    title: "Featured Projects",
    subtitle: "精选项目展示，使用PC浏览体验更佳",
    items: [
      {
        id: "wander",
        title: "墨墨记忆卡 - Redesign",
        type: "Mobile App",
        description:
          "“墨墨记忆卡”（曾用名：Markji）是以高效记忆算法作为支撑，面向泛知识领域市场，为希望进行知识领域深入学习和搭建自己的知识体系的用户提供的学习平台。其涵盖多种方式、多种内容的学习工具",
        tags: ["Mobile Design", "Redesign", "Visual Design"],
        href: "#contact",
        pdfSrc: "/pdfs/momo-redesign.pdf",
        coverImage: {
          src: "/project-covers/momo-redesign.png",
          alt: "墨墨记忆卡改版项目封面",
        },
      },
      {
        id: "finova",
        title: "TourBox Console",
        type: "Web and Pad",
        description:
          "TourBox Console业务线包含PC客户端、平板客户端、网页端等多个平台的内容。其中PC客户端和平板客户端的主要内容是围绕应用驱动进行，而网页端则是围绕购物、宣发、支持服务进行",
        tags: ["Web Design", "iPad App", "Hardware and software"],
        href: "#contact",
        pdfSrc: "/pdfs/tourbox-console.pdf",
        coverImage: {
          src: "/project-covers/tourbox-console.png",
          alt: "TourBox Console 项目封面",
        },
      },
      {
        id: "flowy",
        title: "墨墨年度记忆报告",
        type: "Operations Design",
        description:
          "墨墨背单词以年度记忆报告的形式记录了所有背单词用户的学习故事。根据每个人不同的学习情况产出专属用户自身的年度记忆报告，年度记忆报告着眼于记录用户一年来的成长轨迹，助力用户不断成长。",
        tags: ["Operations", "Storytelling", "Visual Design"],
        href: "#contact",
        pdfSrc: "/pdfs/momo-annual-report.pdf",
        coverImage: {
          src: "/project-covers/momo-annual-report.png",
          alt: "墨墨年度记忆报告项目封面",
        },
      },
    ],
  },
  otherWorks: {
    title: "IP Design",
    subtitle: "独眼萌物的小合集",
    action: {
      label: "View More",
      href: "#contact",
    },
    items: [
      {
        title: "Travel Illustration",
        type: "Illustration",
        year: "2024",
        tone: "from-sky-200 via-blue-100 to-indigo-200",
        image: {
          src: "/other-works/1.png",
          alt: "Other Works cover 1",
        },
      },
      {
        title: "Finance App UI",
        type: "Mobile UI",
        year: "2024",
        tone: "from-emerald-200 via-teal-100 to-cyan-200",
        image: {
          src: "/other-works/3.png",
          alt: "Other Works cover 3",
        },
      },
      {
        title: "Aurora Smart Watch",
        type: "Product Design",
        year: "2023",
        tone: "from-violet-200 via-purple-100 to-blue-200",
        image: {
          src: "/other-works/2.png",
          alt: "Other Works cover 2",
        },
      },
      {
        title: "Dashboard UI",
        type: "Web UI",
        year: "2023",
        tone: "from-slate-200 via-blue-100 to-sky-200",
        image: {
          src: "/other-works/4.png",
          alt: "Other Works cover 4",
        },
      },
      {
        title: "Leafy Plant Care App",
        type: "Mobile UI",
        year: "2023",
        tone: "from-lime-200 via-emerald-100 to-teal-200",
        image: {
          src: "/other-works/5.png",
          alt: "Other Works cover 5",
        },
      },
      {
        title: "Messages App UI",
        type: "Interaction",
        year: "2022",
        tone: "from-blue-200 via-indigo-100 to-violet-200",
        image: {
          src: "/other-works/6.png",
          alt: "Other Works cover 6",
        },
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's work together.",
    description: "准备好开始下一个数字项目了吗？给我发一封邮件，让我们一起创造令人惊艳的作品吧！",
    methods: [
      {
        label: "Phone",
        value: "+86 139 0236 4952",
      },
      {
        label: "WeChat",
        value: "xuan-1555",
      },
      {
        label: "Email",
        value: "1247642269@qq.com",
      },
    ],
  },
  footer: {
    copyright: "© 2026 XUANZHENPENG. All rights reserved.",
    backToTopLabel: "Back to Top",
  },
} as const;

export type FeaturedProject = (typeof contentTable.featuredProjects.items)[number];
export type ContactMethod = (typeof contentTable.contact.methods)[number];
