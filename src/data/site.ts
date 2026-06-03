// =====================================================================
//  ✏️  你的個人資料都在這裡改 — 改完存檔，全站文字就會跟著更新
// =====================================================================

export const profile = {
  // 基本資料
  name: '劉璿鈞',
  // 顯示在大標題下方的職稱／一句話標語
  title: '後端工程師 / SRE 工程師',
  tagline: '持續跳出舒適圈。',
  // 「關於我」段落（可以寫 2~4 句）
  about: [
    '我是熱愛電腦科學的工程師，寫過很多程式 —— 從電腦視覺、訓練 AI，到網頁程式與各種腳本都有涉獵。',
    '希望能成為默默貢獻世界的工程師（前提是不會餓死 😄）。',
  ],
  // 大頭貼路徑：把圖片放到 public/avatar.jpg，這裡就會自動顯示。
  // 不想放照片就設成 null。
  avatar: null as string | null,
};

// 社群／聯絡連結 — 不需要的整行刪掉即可
export const socials = [
  { label: 'Email', href: 'mailto:superjimalex@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/LanZBoY', icon: 'github' },
];

// =====================================================================
//  履歷 / 經歷（時間軸）— 最新的放最上面
// =====================================================================
export const experiences = [
  {
    period: '2026/3 — 現在',
    role: 'Python 後端工程師',
    company: '遊戲橘子數位科技',
    description:
      '主導 dev / uat / prod 三套 EKS 環境的可觀測性平台自建化，整合 Grafana、Prometheus、Loki、Tempo 統一 Metrics / Logs / Traces 三大訊號。設計分層採集架構並於 gateway 層導入 OpenTelemetry Tail Sampling，以自建 Prometheus + Loki / Tempo (S3) 承載觀測資料，將雲端觀測成本降低約 80%。',
  },
  {
    period: '2024/11 — 2026/2',
    role: '後端工程師',
    company: '采璣資訊',
    description:
      '針對效能瓶頸重構查詢邏輯，將特定功能查詢速度提升 10 倍；建置高併發 IoT 資料接收架構（Async + Message Queue 流量削峰）。設計容器化 (Docker) CI/CD 流水線，管理跨平台 (AWS / AKS) Kubernetes 叢集，以滾動更新達成零停機部署與 99.9% SLA。並推動 AI Agent 輔助開發與標準化 Code Review，提升開發效率約 60~70%。',
  },
  {
    period: '2020/7 — 2021/6',
    role: '後端實習生',
    company: '精誠隨想行動科技',
    description:
      '獨立設計並建置 Jenkins 自動化部署流程 (CI/CD)，大幅縮短部署時間並消除人為失誤。以 Java (Jersey) 開發後端 API，導入 Redis 快取降低 MS SQL / MongoDB 負載；落實 Git 版本控制規範，協助團隊程式碼合併與衝突解決。',
  },
];

// 技能標籤
export const skills = [
  'Python', 'Go', 'Java', 'ASP.NET',
  'Docker', 'Kubernetes', 'AWS', 'EKS / AKS',
  'CI/CD', 'Grafana', 'Prometheus', 'Loki', 'Tempo', 'OpenTelemetry',
  'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis',
];

// =====================================================================
//  作品集 Portfolio — 一個物件就是一張卡片
// =====================================================================
export const projects = [
  {
    title: '台中榮總埔里分院｜醫療資訊系統與流程自動化',
    description:
      '替代役期間開發多項醫療資訊系統：以 Python 爬蟲自動化醫院評鑑資料核對，將人工填寫從 2 個月縮短至 2 小時（效率提升 600 倍）；開發庫存管理 App 取代紙本記錄；建置洗手液即時監控系統，優化護理巡視人力。',
    tags: ['Python', 'Automation', '行動 App', 'IoT'],
    link: null,
    repo: null,
    video: null,
  },
  {
    title: '基於電子健康數據之 ICU 醫療資源優化預測研究',
    description:
      '運用機器學習分析電子健康紀錄 (EHR)，精準預測 ICU 病患臨床轉歸（出院 / 死亡），實現預防性床位管理與設備調度，有效提升重症醫療資源的分配效率。',
    tags: ['Machine Learning', 'EHR', '醫療資料'],
    link: 'https://sites.google.com/view/unhappy1023/%E9%A6%96%E9%A0%81',
    repo: null,
    video: null,
  },
  {
    title: 'Gogokids 程式邏輯桌遊輔助工具',
    description:
      '以 Python (OpenCV) 驗證影像辨識核心邏輯，再移植至 Unity 進行效能優化與封裝，完成從原型到量產的流程。用自動化視覺辨識取代人工推演，解決實體桌遊運算耗時的痛點，大幅提升遊戲流暢度。',
    tags: ['Python', 'OpenCV', 'Unity', '影像辨識'],
    link: null,
    repo: 'https://github.com/LanZBoY/BoardGameImgPyCv2',
    video: null,
  },
  {
    title: '臺中城中城：古蹟導覽與商圈活化 App',
    description:
      '設計 O2O 任務打卡系統，以闖關機制將線上使用者導流至線下商家消費；實作數位導覽與即時組隊同步 (Real-time Sync) 功能，並整合 3D 數位孿生 (Digital Twin) 技術，優化古蹟導覽體驗。',
    tags: ['O2O', 'Real-time Sync', '3D Digital Twin'],
    link: null,
    repo: 'https://github.com/LanZBoY/taiZhongOldTownGuideApp',
    video: 'https://www.youtube.com/watch?v=DaWJB_TbFpI',
  },
];
