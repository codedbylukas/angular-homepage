
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
    'index.csr.html': {size: 4845, hash: 'd6c785ad0d03111cb2e5c0a493f3fb3814dc2622d5aefcc285f809fce956d1a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '8d28dd786d62b3bbee3eb92da2d6f7ec0a7125b858c0955a4861474592e5fbbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '17829c262a6d9d34263c2f30fd69024f7c2db6771973d3e8497502a28bc57627', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 5112, hash: '522f354cdc3b3b1465802147bc730b633d28186f81e5f641ed73684f5dd079ac', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9303, hash: '05122d74352226ef299da1ec4e03946b1143621d18d871bb41a3cb6896fb72c0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
