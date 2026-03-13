
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
    'index.csr.html': {size: 4845, hash: '2fc256fa67ee02a87817f874312dc90ea0045a331d24720bda15c2b0ea55bd8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '84cf2658f48c27638306c8911c9197b3884ff950ebe74099d4eab30e4babda99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9480, hash: '67117e7ab9f864195600f1022c19f8b145369733f4734fed30bf093f839a2a95', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '457825b3540df7214124ee188c868e824bedb32906d69d1d3c079e8f8f96bacb', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7105, hash: '4550e4448e24a5de000f5b9fc1eae339c197d505665da0d24609ea0c056f306a', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '9a7c4740114dd659e1b1b9b1d8b0e5dea9867ca7b61bded970ffb67f8f6d739b', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
