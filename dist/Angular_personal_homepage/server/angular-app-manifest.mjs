
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
    'index.csr.html': {size: 4845, hash: '8ccfd0e1471dc1602b4b76639dfd2fdec724fd429ce19dd983d248085e29267e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'cfe60fa2a8708cbdfb9469bb8de32de329e9d5a36e9475dd86d8309968db95d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '1f1a97af8a834e37b41b0e79470165a755045692115ea767487393b554dcda31', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9480, hash: '6af7b8ab63edf19e6dc519ba12689d43704b348eb742f4d821a8e1af58e52f2f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7105, hash: '88b0444f174523f90938304ab294fc4e74aa79bbfad4921f918f1d5efa49a285', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '32b62207a6135b22ab83c19933ba941af84517a9e937ed6202b66ecd9618b3b8', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
