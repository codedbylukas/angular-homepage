
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
    'index.csr.html': {size: 4845, hash: 'a0c703b53b9d83c0390352c7f9ee696693232b6c208a3d6b004b63a683bab42d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '8cc84e0c34b2261958ab96b500b17f41ffee14954975cb4d15c7f710972534d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9356, hash: '6a33998b46a2cebfed748f8cfb770e3acb2ebe4b6c5e6f8408531946af4845d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'b9c41d6f6642627cc09424974e37c7e69cad55a6d8793f13bd8f88df9c362545', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '5678ca5e9c73579add5ea9cb347cbc2df1b939726bb317f25d83a56cd06395a1', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
