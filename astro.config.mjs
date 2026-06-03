import { defineConfig } from 'astro/config';

// =============================================================
//  GitHub Pages 部署設定
// -------------------------------------------------------------
//  情況 A：repo 名稱叫「你的帳號.github.io」
//     → site: 'https://你的帳號.github.io'
//     → base 不用設（保持註解掉）
//
//  情況 B：repo 名稱叫別的（例如 personal-page）
//     → site: 'https://你的帳號.github.io'
//     → 把下面的 base 解除註解，改成 '/personal-page'
// =============================================================
export default defineConfig({
  site: 'https://LanZBoY.github.io',
  // base: '/personal-page',
});
