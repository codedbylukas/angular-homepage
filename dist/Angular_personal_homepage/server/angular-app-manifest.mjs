
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
    'index.csr.html': {size: 4845, hash: '87d3a1ca62a5222854fe36a4e863e344e49180d5c90a76b47902d41b798dcdeb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '3481db12f9bb5ca0cdd2447359d192e045167bcf14e10606fa3437e3942dddc6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: 'b3ed760e24bfcceed767b8cc05b7d340b5562d4dab5c9b53137a05a92a0e52b5', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9199, hash: 'd58a20012094237db03a2c983ee136206284ce24190a21bae45ff940d44a03de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7328, hash: '8d5c7e0ad395762b5649c8293ec96cb57e0fb92c57c8acc205c7f4922b468754', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: 'cd57af666fc9be72f814a7b96fae9c15901ae59fb2121e1c8bdf1debfa479759', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
