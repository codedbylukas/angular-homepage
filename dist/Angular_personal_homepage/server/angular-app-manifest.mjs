
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
  },
  {
    "renderMode": 2,
    "route": "/todo-list"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4845, hash: '710556e251c9b383ed1d8fc93d8ba60e1d801aa971e17fbf2bcd32d8c1a9699b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '0f137b3bb715ac2f3de808873cec637d3b25c1deaeb5ec590c147530f051359c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7328, hash: '26f8ce27c6ff7542c8505d1a1efc0363072df669503b8d0cd5f704f6ffd4d4e7', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'todo-list/index.html': {size: 8277, hash: '5ad8622da882aff9fda434062de4430c0f49cf6ea9269d8ab6d880cf77cd1bfb', text: () => import('./assets-chunks/todo-list_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '91f5063e2b52f7756f9e88773d37a4143df9837569623c0be5326619137a04f0', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '6d5e5b82e9a37d166d8e4a1cc4aff1ce62fcaee275718fb538dc70c85fed42ef', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9319, hash: '191b628e78edaafe3c3e913cc62a56fca2812c536595b953d484198615ff581b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
