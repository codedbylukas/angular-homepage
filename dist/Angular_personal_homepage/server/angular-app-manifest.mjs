
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
    'index.csr.html': {size: 4845, hash: '2b5151e3eda919928053fe1187d8d6b28f48e7b96f8f091ff64f07d6f77a0695', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '61a7cae97c915f69a2b468061faf90ea29c582f5b5e49a5f15fbdefd9e05e6e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '8b60171137c36d4360adb7639abd9d848f81ced2fb6ce413af3a88a74d3a79fe', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: 'f96aa691f8bdc4c93379c06592b4a8b379b54ff8b63f0f7f0c8a7410620e9692', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'todo-list/index.html': {size: 7675, hash: '53c895f054e1f20b515a5d9f5c135dec9fd9376d62cc83dc071ab47191d72321', text: () => import('./assets-chunks/todo-list_index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7328, hash: 'a5b67767509675203380ef9c94dcf5cc35fe51cba9334cebef325296152078be', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9319, hash: 'c11da5bfaea85bd9a9bf08bf5d8fd8438c1a1424fba8d9dbda02259435df3909', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
