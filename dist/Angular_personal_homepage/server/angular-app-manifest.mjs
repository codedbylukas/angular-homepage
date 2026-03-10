
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/data-security"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4819, hash: 'f7eeace7ef3afa9705161d97934fd4f7e8d44d9b12a3fd47f5e63577a0427f08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'a58bab7c328c68a72d90c80b30fd72c88f435416c06abebc7d72cf1893ef6251', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'data-security/index.html': {size: 6865, hash: 'b6b32a2ef465c279e5245eb9d7aad1dcd9b58ff585b174d5ad1745e5f0bc61cb', text: () => import('./assets-chunks/data-security_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6793, hash: '4f266e4181e74915ae9547f8042a33344afbdcda376ee09664c39f774659c9b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PLCZNYGP.css': {size: 4196, hash: 'AUbWDwYrwR4', text: () => import('./assets-chunks/styles-PLCZNYGP_css.mjs').then(m => m.default)}
  },
};
