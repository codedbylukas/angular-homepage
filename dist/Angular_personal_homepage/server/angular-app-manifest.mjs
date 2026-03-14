
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/data-security"
  },
  {
    "renderMode": 2,
    "route": "/sand-site"
  },
  {
    "renderMode": 2,
    "route": "/fun-facts"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4845, hash: '18f8dc016fb734ddd8859b8a2ca2e35073a146d17707ea066b1b14d0cb350797', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '7dfc981e6a62c57c4f973fca7a9d268cd79980620d3473d6dce9c0940c444a59', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9480, hash: 'daa4aa40640777d1b19b9aa5c6912635cf9ff88ceecdd7eb822aedc1e56a25d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7105, hash: 'b916f422b1f43961d84b6136706f7c0f697af69fb8c1d2d1ba222ef85ec88019', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'c33143eeac4d361d2c8d76219724f8b96cc0a822a069f77d1829db666781edf0', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: 'a90d3dabc4cfe597cc6c42eaaccaf0b452c496360f2a7b9412b201ae5b739c64', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
