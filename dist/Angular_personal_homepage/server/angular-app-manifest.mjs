
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
    'index.csr.html': {size: 4845, hash: 'c8fb68dfbe34b79b11de0b6bbfd8b292e01832ff62f1846541591da52c4f56a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '310443de3ead212fe5f4210b440ff7d6cbc971ec15ee35fa2748cd8692a5b301', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '0292bbe011569fe76ea69438b9cef68c80aeb0141abb7e0c60ea74804d535648', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 6402, hash: '0acea24db7e8bcdf4ca8639286406d413a6e310f1173b66ad44c70daac09bbfa', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9317, hash: '38e6c83e05c7fa872e0f4d79ee17893a8a8848064e3893f97aee0e7a6d8f3f7d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
