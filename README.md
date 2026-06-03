# 個人形象網站

用 [Astro](https://astro.build) 打造的深色科技風個人形象網站，部署於 GitHub Pages。

## 本地開發

```bash
npm install      # 安裝套件（第一次才需要）
npm run dev      # 啟動開發伺服器 → http://localhost:4321
npm run build    # 編譯成靜態檔到 dist/
npm run preview  # 預覽編譯後的結果
```

## ✏️ 怎麼改內容

所有個人資料集中在 **`src/data/site.ts`**：

- `profile` — 名字、職稱、標語、自我介紹、大頭貼
- `socials` — Email / GitHub / LinkedIn 等連結
- `experiences` — 履歷時間軸
- `skills` — 技能標籤
- `projects` — 作品集卡片

改完存檔，`npm run dev` 會即時更新畫面。

放大頭貼：把圖片丟到 `public/avatar.jpg`，再把 `site.ts` 裡的 `avatar` 改成 `'/avatar.jpg'`。

## 換顏色

改 `src/styles/global.css` 最上面 `:root` 裡的色彩變數即可。

## 部署到 GitHub Pages

1. 把這個專案推到 GitHub repo
2. 到 repo 的 **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**
3. 之後每次 push 到 `main`，`.github/workflows/deploy.yml` 會自動 build 並上線

⚠️ 部署前記得改 `astro.config.mjs` 裡的 `site`（和 `base`，視 repo 名稱而定，檔案裡有說明）。
