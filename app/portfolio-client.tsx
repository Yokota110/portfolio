"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck,
  ChefHat,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Languages,
  Layers3,
  Mail,
  MapPin,
  PackageCheck,
  ServerCog,
  Sparkles,
  UsersRound
} from "lucide-react";

type Locale = "en" | "ja";
type ProjectVisual = "stock" | "table" | "recruit";

type Project = {
  name: string;
  domain: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  source: string;
  visual: ProjectVisual;
};

type Copy = {
  nav: {
    about: string;
    work: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    viewProjects: string;
    github: string;
    label: string;
    metrics: Array<{ value: string; label: string }>;
    techRail: string[];
  };
  focus: Array<{ title: string; text: string }>;
  about: {
    eyebrow: string;
    title: string;
    profileTitle: string;
    profile: string[];
    strengths: Array<{ title: string; text: string }>;
  };
  work: {
    eyebrow: string;
    title: string;
    text: string;
    live: string;
    source: string;
    projects: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Array<{ period: string; title: string; description: string }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: Array<{ title: string; items: string[] }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    languages: string[];
  };
};

const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      about: "About",
      work: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Full Stack Engineer · Japan-ready SaaS · 10+ Years",
      title: "Full Stack SaaS Engineer for Japan-ready products.",
      lead:
        "I build business-focused web products with Next.js, React, TypeScript, NestJS, PostgreSQL, AWS, Docker, and practical operational UX.",
      viewProjects: "View Projects",
      github: "GitHub",
      label: "Yokota Ishun · Full Stack Engineer",
      metrics: [
        { value: "10+", label: "Years in web systems" },
        { value: "3", label: "Production-style SaaS demos" },
        { value: "JLPT N2", label: "Japanese certification" }
      ],
      techRail: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "AWS", "Docker", "SaaS"]
    },
    focus: [
      {
        title: "Product-minded engineering",
        text: "Requirements, UI, API, data model, deployment, and maintenance."
      },
      {
        title: "Japan and APAC workflows",
        text: "Inventory, reservations, recruiting, EC, DX, and AI/OCR integration."
      },
      {
        title: "Remote-first delivery",
        text: "Freelance-ready communication across Japan, China, and global teams."
      }
    ],
    about: {
      eyebrow: "About",
      title: "Full stack engineer for business-critical web products.",
      profileTitle: "Profile",
      profile: [
        "I have built and maintained web systems for more than a decade, moving from enterprise software development at Neusoft to SaaS and DX platforms at Neusoft Reach, then to freelance full stack delivery in Japan.",
        "My current work spans SaaS applications, EC sites, cloud environments, Shopify custom apps, WordPress builds, and AI/OCR service integration."
      ],
      strengths: [
        {
          title: "End-to-end ownership",
          text: "Requirements, design, implementation, testing, deployment, and ongoing improvement."
        },
        {
          title: "Operational UI",
          text: "Dense dashboards, tables, flows, charts, permissions, and responsive admin screens."
        },
        {
          title: "Scalable backends",
          text: "REST APIs, auth, multi-tenant data models, PostgreSQL design, and Docker environments."
        }
      ]
    },
    work: {
      eyebrow: "Selected Work",
      title: "Portfolio projects presented like real SaaS products.",
      text:
        "These projects show product thinking, domain modeling, dashboard design, and full stack implementation with modern TypeScript tooling.",
      live: "Live Site",
      source: "Source",
      projects: [
        {
          name: "StockFlow",
          domain: "Inventory SaaS · Japan SMEs",
          description:
            "Production-grade inventory management platform with RBAC, KPI dashboards, product catalog, stock movement ledger, purchase orders, suppliers, and analytics.",
          highlights: [
            "JPY, Asia/Tokyo, and Japanese consumption tax workflows.",
            "Multi-tenant API design with shared TypeScript domain types.",
            "Dense operational screens built for repeat business use."
          ],
          stack: ["Next.js 15", "NestJS 11", "PostgreSQL", "Prisma"],
          live: "https://stockflow-ai-web.vercel.app",
          source: "https://github.com/Yokota110/stockflow-ai",
          visual: "stock"
        },
        {
          name: "TableBook",
          domain: "Reservation SaaS · Japan and Singapore",
          description:
            "Restaurant reservation platform for customers and operators, including discovery, real-time availability, booking history, table management, and analytics.",
          highlights: [
            "Customer search and filtering across Tokyo, Kyoto, Osaka, and Singapore.",
            "Operator workflows for reservations, tables, revenue, and occupancy.",
            "AWS-ready backend architecture with Vercel-ready frontend delivery."
          ],
          stack: ["Next.js 15", "NestJS", "TanStack Query", "Zod"],
          live: "https://tablebook-ai.vercel.app/",
          source: "https://github.com/Yokota110/tablebook-ai",
          visual: "table"
        },
        {
          name: "RecruitFlow AI",
          domain: "ATS SaaS · AI candidate intelligence",
          description:
            "Applicant tracking system with AI-style match scoring, candidate intelligence, Kanban pipeline, interview scheduling, notifications, and executive analytics.",
          highlights: [
            "Deterministic match engine with strengths, risks, and interview questions.",
            "Drag-and-drop pipeline with audit history and recruiter attribution.",
            "Executive dashboard for hiring funnel, sources, velocity, and performance."
          ],
          stack: ["React 19", "Tailwind v4", "@dnd-kit", "JWT"],
          live: "https://recruitflow-ai-web.vercel.app/",
          source: "https://github.com/Yokota110/recruitflow-ai",
          visual: "recruit"
        }
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "From enterprise systems to independent SaaS delivery.",
      items: [
        {
          period: "2023 - Present",
          title: "Freelance Full Stack Engineer",
          description:
            "Web application development, SaaS delivery, EC site construction, IT consulting, AWS/Docker environments, Shopify custom apps, WordPress, and AI/OCR integrations."
        },
        {
          period: "2018 - 2022",
          title: "Neusoft Reach · Full Stack Engineer",
          description:
            "Built cloud services, SaaS platforms, and DX solutions using React, Node.js, PHP/Laravel, PostgreSQL, Docker, code review, and system improvement practices."
        },
        {
          period: "2015 - 2018",
          title: "Neusoft · Software Engineer",
          description:
            "Developed and maintained enterprise web and business management systems with Java, JavaScript, MySQL, database design, SQL optimization, and testing."
        },
        {
          period: "2011 - 2015",
          title: "Shenyang University of Technology",
          description: "Department of Information Engineering."
        }
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "Practical stack for shipping full stack products.",
      groups: [
        { title: "Frontend", items: ["TypeScript", "React", "Next.js", "JavaScript", "CSS", "Figma"] },
        { title: "Backend", items: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "Django", "Java"] },
        { title: "Data and Cloud", items: ["PostgreSQL", "MySQL", "AWS", "Docker", "Database Design"] },
        { title: "Commerce and Delivery", items: ["Shopify", "WordPress", "AI/OCR", "EC Sites", "SaaS"] }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Available for full stack web roles and SaaS product work.",
      text: "Based in Shiki, Saitama. Remote-first work is preferred, with flexible collaboration across Japan Standard Time.",
      languages: ["Chinese Native", "Japanese JLPT N2", "English Business"]
    }
  },
  ja: {
    nav: {
      about: "概要",
      work: "実績",
      experience: "経歴",
      skills: "スキル",
      contact: "連絡先"
    },
    hero: {
      eyebrow: "フルスタックエンジニア · 日本向けSaaS · 10年以上",
      title: "日本の業務に強いSaaSを設計から実装まで。",
      lead:
        "Next.js、React、TypeScript、NestJS、PostgreSQL、AWS、Dockerを中心に、業務フローに馴染むWebプロダクトを開発しています。",
      viewProjects: "実績を見る",
      github: "GitHub",
      label: "横田 伊春 · フルスタックエンジニア",
      metrics: [
        { value: "10+", label: "Webシステム開発経験" },
        { value: "3", label: "SaaSポートフォリオ" },
        { value: "JLPT N2", label: "日本語能力試験" }
      ],
      techRail: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "AWS", "Docker", "SaaS"]
    },
    focus: [
      {
        title: "プロダクト視点の開発",
        text: "要件、UI、API、データ設計、デプロイ、保守まで一貫して対応。"
      },
      {
        title: "日本・APAC業務フロー",
        text: "在庫、予約、採用、EC、DX、AI/OCR連携に対応。"
      },
      {
        title: "リモート中心の納品",
        text: "日本、中国、グローバルチームと柔軟に連携。"
      }
    ],
    about: {
      eyebrow: "概要",
      title: "業務システムとSaaSに強いフルスタックエンジニア。",
      profileTitle: "プロフィール",
      profile: [
        "ソフトウェアエンジニアとして10年以上のWebシステム開発経験があります。Neusoftで企業向けシステムを経験し、Neusoft ReachではSaaS・DXプラットフォーム開発に携わりました。",
        "現在は日本でフリーランスとして、SaaS、ECサイト、クラウド環境、Shopifyカスタムアプリ、WordPress、AI/OCR連携を含む開発を担当しています。"
      ],
      strengths: [
        {
          title: "一貫した開発対応",
          text: "要件定義、設計、実装、テスト、運用改善まで担当できます。"
        },
        {
          title: "業務UIの設計",
          text: "ダッシュボード、テーブル、権限、チャート、管理画面を使いやすく設計します。"
        },
        {
          title: "拡張性のあるバックエンド",
          text: "REST API、認証、マルチテナント、PostgreSQL、Docker環境を構築します。"
        }
      ]
    },
    work: {
      eyebrow: "実績",
      title: "実運用を想定したSaaSポートフォリオ。",
      text:
        "ドメイン設計、ダッシュボードUI、API、データモデル、TypeScript中心のフルスタック実装を示すプロジェクトです。",
      live: "サイトを見る",
      source: "コードを見る",
      projects: [
        {
          name: "StockFlow",
          domain: "在庫管理SaaS · 日本の中小企業向け",
          description:
            "RBAC、KPIダッシュボード、商品管理、在庫移動履歴、発注、仕入先、分析を備えた在庫管理プラットフォームです。",
          highlights: [
            "JPY、Asia/Tokyo、日本の消費税ワークフローに対応。",
            "共有TypeScript型を使ったマルチテナントAPI設計。",
            "日常業務で使いやすい密度の高い管理画面。"
          ],
          stack: ["Next.js 15", "NestJS 11", "PostgreSQL", "Prisma"],
          live: "https://stockflow-ai-web.vercel.app",
          source: "https://github.com/Yokota110/stockflow-ai",
          visual: "stock"
        },
        {
          name: "TableBook",
          domain: "予約SaaS · 日本とシンガポール",
          description:
            "レストラン検索、空席確認、予約履歴、テーブル管理、分析を備えた飲食店予約プラットフォームです。",
          highlights: [
            "東京、京都、大阪、シンガポールの検索・フィルタリング。",
            "予約、席、売上、稼働率を扱う店舗運営業務。",
            "AWSを想定したバックエンドとVercel向けフロントエンド。"
          ],
          stack: ["Next.js 15", "NestJS", "TanStack Query", "Zod"],
          live: "https://tablebook-ai.vercel.app/",
          source: "https://github.com/Yokota110/tablebook-ai",
          visual: "table"
        },
        {
          name: "RecruitFlow AI",
          domain: "ATS SaaS · AI候補者分析",
          description:
            "マッチスコア、候補者インサイト、Kanbanパイプライン、面接管理、通知、経営向け分析を備えたATSです。",
          highlights: [
            "強み、懸念、面接質問を生成するマッチングエンジン。",
            "ドラッグ&ドロップの選考パイプラインと履歴管理。",
            "採用ファネル、流入元、採用速度を可視化するダッシュボード。"
          ],
          stack: ["React 19", "Tailwind v4", "@dnd-kit", "JWT"],
          live: "https://recruitflow-ai-web.vercel.app/",
          source: "https://github.com/Yokota110/recruitflow-ai",
          visual: "recruit"
        }
      ]
    },
    experience: {
      eyebrow: "経歴",
      title: "企業システムからSaaS開発まで幅広く担当。",
      items: [
        {
          period: "2023 - 現在",
          title: "フリーランス · フルスタックエンジニア",
          description:
            "Webアプリ、SaaS、EC、ITコンサルティング、AWS/Docker環境、Shopify、WordPress、AI/OCR連携を担当。"
        },
        {
          period: "2018 - 2022",
          title: "Neusoft Reach · フルスタックエンジニア",
          description:
            "React、Node.js、PHP/Laravel、PostgreSQL、Dockerを用いたクラウドサービス、SaaS、DXソリューション開発。"
        },
        {
          period: "2015 - 2018",
          title: "Neusoft · ソフトウェアエンジニア",
          description:
            "Java、JavaScript、MySQLを用いた企業向けWebシステムと業務管理システムの開発・保守。"
        },
        {
          period: "2011 - 2015",
          title: "瀋陽工業大学",
          description: "情報工程学科卒業。"
        }
      ]
    },
    skills: {
      eyebrow: "スキル",
      title: "フルスタック開発を支える実務スキル。",
      groups: [
        { title: "フロントエンド", items: ["TypeScript", "React", "Next.js", "JavaScript", "CSS", "Figma"] },
        { title: "バックエンド", items: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "Django", "Java"] },
        { title: "データ・クラウド", items: ["PostgreSQL", "MySQL", "AWS", "Docker", "データベース設計"] },
        { title: "EC・納品", items: ["Shopify", "WordPress", "AI/OCR", "ECサイト", "SaaS"] }
      ]
    },
    contact: {
      eyebrow: "連絡先",
      title: "フルスタック開発・SaaS開発の相談を受け付けています。",
      text: "埼玉県志木市在住。フルリモートを中心に、日本時間で柔軟に連携できます。",
      languages: ["中国語 ネイティブ", "日本語 JLPT N2", "英語 ビジネス"]
    }
  }
};

const skillIcons = [Code2, ServerCog, Database, Cloud];
const strengthIcons = [Layers3, Sparkles, ServerCog];
const focusIcons = [BriefcaseBusiness, MapPin, UsersRound];

function ProjectVisualCard({ type }: { type: ProjectVisual }) {
  if (type === "table") {
    return (
      <div className="project-visual visual-table" aria-hidden="true">
        <ChefHat className="visual-icon" size={34} />
        <div className="reservation-map">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="visual-timeline" />
      </div>
    );
  }

  if (type === "recruit") {
    return (
      <div className="project-visual visual-recruit" aria-hidden="true">
        <Bot className="visual-icon" size={34} />
        <div className="score-ring">
          <span>92</span>
        </div>
        <div className="pipeline-bars">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-stock" aria-hidden="true">
      <PackageCheck className="visual-icon" size={34} />
      <div className="visual-topline" />
      <div className="visual-ledger">
        <i />
        <i />
        <i />
      </div>
      <div className="visual-chart">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];
  const repeatedTech = useMemo(() => [...t.hero.techRail, ...t.hero.techRail], [t.hero.techRail]);

  return (
    <>
      <a className="skip-link" href="#work">
        {t.nav.work}
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Yokota Ishun home">
          <span className="brand-mark">
            <Boxes size={18} strokeWidth={2.5} />
          </span>
          <span>Yokota Ishun</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <button
          className="language-toggle"
          type="button"
          onClick={() => setLocale((current) => (current === "en" ? "ja" : "en"))}
          aria-label="Switch language"
        >
          <Languages size={17} />
          <span>{locale === "en" ? "日本語" : "EN"}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="ambient-grid" aria-hidden="true" />
          <div className="hero-line hero-line-one" aria-hidden="true" />
          <div className="hero-line hero-line-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#work">
                <Sparkles size={18} />
                <span>{t.hero.viewProjects}</span>
              </a>
              <a className="button button-secondary" href="https://github.com/Yokota110" target="_blank" rel="noreferrer">
                <GitBranch size={18} />
                <span>{t.hero.github}</span>
              </a>
            </div>

            <dl className="hero-metrics" aria-label="Career highlights">
              {t.hero.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="portrait-stage" aria-label={t.hero.label}>
            <div className="portrait-card">
              <Image
                className="portrait-image"
                src="/me.png"
                alt="Yokota Ishun portrait"
                fill
                priority
                sizes="(max-width: 900px) 78vw, 430px"
              />
              <div className="portrait-sheen" />
            </div>
            <div className="portrait-meta">
              <span>{t.hero.label}</span>
              <span>Next.js · NestJS · AWS</span>
            </div>
            <div className="floating-code floating-code-one">
              <Code2 size={16} />
              <span>TypeScript</span>
            </div>
            <div className="floating-code floating-code-two">
              <Database size={16} />
              <span>PostgreSQL</span>
            </div>
          </div>
        </section>

        <section className="tech-marquee" aria-label="Technology stack">
          <div className="marquee-track">
            {repeatedTech.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="signal-band" aria-label="Professional focus">
          {t.focus.map((item, index) => {
            const Icon = focusIcons[index];
            return (
              <div key={item.title}>
                <Icon size={21} />
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            );
          })}
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>

          <div className="about-grid">
            <article className="profile-card">
              <h3>{t.about.profileTitle}</h3>
              {t.about.profile.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <div className="focus-list" aria-label="Core strengths">
              {t.about.strengths.map((strength, index) => {
                const Icon = strengthIcons[index];
                return (
                  <article key={strength.title}>
                    <span>0{index + 1}</span>
                    <Icon size={24} />
                    <h3>{strength.title}</h3>
                    <p>{strength.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="work">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2>{t.work.title}</h2>
            <p>{t.work.text}</p>
          </div>

          <div className="project-grid">
            {t.work.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-copy">
                  <p className="project-kicker">{project.domain}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-points">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ArrowUpRight size={17} />
                      <span>{t.work.live}</span>
                    </a>
                    <a href={project.source} target="_blank" rel="noreferrer">
                      <GitBranch size={17} />
                      <span>{t.work.source}</span>
                    </a>
                  </div>
                </div>
                <ProjectVisualCard type={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">{t.experience.eyebrow}</p>
            <h2>{t.experience.title}</h2>
          </div>

          <div className="timeline" aria-label="Work history">
            {t.experience.items.map((experience) => (
              <article key={experience.title}>
                <time>{experience.period}</time>
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="section-heading">
            <p className="eyebrow">{t.skills.eyebrow}</p>
            <h2>{t.skills.title}</h2>
          </div>

          <div className="skills-grid">
            {t.skills.groups.map((skillGroup, index) => {
              const Icon = skillIcons[index];
              return (
                <article key={skillGroup.title}>
                  <Icon size={25} />
                  <h3>{skillGroup.title}</h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <address className="contact-actions">
            <a href="mailto:suzaku93110@gmail.com">
              <Mail size={18} />
              <span>suzaku93110@gmail.com</span>
            </a>
            <a href="https://github.com/Yokota110" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              <span>github.com/Yokota110</span>
            </a>
          </address>

          <div className="language-strip" aria-label="Languages">
            {t.contact.languages.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Yokota Ishun</span>
        <span>Full Stack SaaS Engineer</span>
      </footer>
    </>
  );
}
