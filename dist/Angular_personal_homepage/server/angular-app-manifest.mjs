
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4845, hash: '3891f1112f059d1cfd0874987633f39671b8ff5b5f906ae541961b8824250b70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'cfa3f643bc87459834fae13a4b1536e768f68032f9716a1ac2b9d09b0c3793e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 6317, hash: '4f46137ed500c9206f87ecbc1b5de687c7a1bc94add10250c23c5e1221d77568', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'b83d3a1631e896d464b5b9d8f97d5948064746b5404ea385d5bb8c800f4ccd6e', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9317, hash: 'cecf157ed0dc3284e397349a4647a0e2aad17fa9cc1a9cffcb27bb84de31cc00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
