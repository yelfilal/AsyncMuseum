
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://yelfilal.github.io/AsyncMuseum/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/exposition/exposition.component.ts": [
    {
      "path": "chunk-UFGHCEAW.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/virtual-visit/virtual-visit.component.ts": [
    {
      "path": "chunk-AZY5KH5C.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/contact/contact.component.ts": [
    {
      "path": "chunk-Z6OI7KI4.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 23756, hash: '0fe5289ee8b4869cce9eb6908b6ee38042f6b4b95604dd5243bccfa620acf33a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17330, hash: '13d4e19737e41db015783c54f8b455ea72ca939229acbda1fe25ba4502b65c0a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
