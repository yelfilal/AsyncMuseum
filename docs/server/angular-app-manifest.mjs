
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AsyncMuseum',
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
    'index.csr.html': {size: 23729, hash: '5535a511dabe13cb93d587c49ad3bfab3b081577f60ce96bc9f6dc8a0fea9078', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17303, hash: 'd8d2e6d847374747d6ada3ec9bddcfd79f7d59181d829280931e642187fcae14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
