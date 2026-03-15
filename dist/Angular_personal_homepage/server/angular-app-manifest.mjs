
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
    'index.csr.html': {size: 4845, hash: '1e6d43fc01a58a15c663025691b73645712adb0ca12602da1d9cb97d79f418c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '04901047337931afc250ac57d94ad1359e7f066c452aca516aefe645182a2039', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7105, hash: 'f38bd1ff028e3c5c5b1d50dcbc24c3fd11b12f2847d085dacfc2048d1d7211ea', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'f6eb67dcaf439c10e6ca4de3e8cce399f68dba396e6b96adfb8aebe39222451f', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: 'e97f833b0b9027b4284cd004224b9f61e9a2485e357779a9a4ee9d5f892eb87e', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9199, hash: '003d6d770e8cfbe1a7d8b72a4d8298bc6f1d5a09de4f4406c0dcd668754abcb8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
