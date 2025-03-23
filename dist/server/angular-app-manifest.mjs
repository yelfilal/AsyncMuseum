
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 23718, hash: '96b6579f92ebc0199c52ec5b62d95719262a3d0da985c6a8e0762fc0224593b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: 'afd45f96dfb55e2c962c4684aa318e18a84e3847d9f590cbf04b99880ef8af45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
