
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
    'index.csr.html': {size: 4845, hash: '4a082d60721ed3c5f95d80fd6b98b21ca70a459358290f625c7f08b9f9becbb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '37064574f25869a3a11a9976238cc613d4ab67403179c05ee0dfba97ac52a20e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sand-site/index.html': {size: 7002, hash: '0d51938e4592c29b70eb0bd1d45bb0793cc81fd56b9c66ce77fddf42485c5d04', text: () => import('./assets-chunks/sand-site_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9199, hash: '18bfbd1176fbfbd58a3a9dd545469a8fb8d6ada17e5b96353052c36a8f080c9b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'todo-list/index.html': {size: 8149, hash: 'e5c2ad5f8492ca60c7ebb6a14a71209e0c7de88c18386df0838fe96e06df55b8', text: () => import('./assets-chunks/todo-list_index_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6891, hash: '03ccf7a36a04f0bccef2bde18fd77412ff7b2dee51eb1ca8a59b9f8e14b70a64', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'fun-facts/index.html': {size: 7328, hash: '6cee5a6e93cf2c15df49202b4fd994aa4b33153b1f2e99ad48f2f0ec5cfb96fb', text: () => import('./assets-chunks/fun-facts_index_html.mjs').then(m => m.default)},
    'styles-WKIBCZ2A.css': {size: 4221, hash: 'X1vJgGzT4bM', text: () => import('./assets-chunks/styles-WKIBCZ2A_css.mjs').then(m => m.default)}
  },
};
