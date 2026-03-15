
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
    'index.csr.html': {size: 4845, hash: '1c3a7f8210cef323f2fccdf6cf4754f5254f433c45596957863b2cabd9d8a278', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '2a7fb24841a8e816845906452d8da0dee5e81f4da48b6ef1cec5422e44e2b302', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'cc31ead65c112d5b071b0dfe16e53c3d021b0b4bd53156c0e63071cbc2574bd3', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9199, hash: '113b68cac64d56c719ba6ffeb7a640c0aba6e7fe2c297d3ad13a10f853d8bc1b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '08cc8de86d68653351904ed22e534bb7d3d9ff9d4d7616da254307f02e7051d9', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7328, hash: 'a860532c6909122bab7c104bbc3dc9e1a38325ba442aed843a21eb6727c52fe1', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
