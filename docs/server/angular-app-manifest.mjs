
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/async-museum',
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
    'index.csr.html': {size: 23730, hash: 'ebab80e4ef8c49e7362d8bd3b6813938a16573f83492ca95ddee7067cd4fdd27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17304, hash: 'ba21fc55b115de466dcaa25ff74a8a3266cd9cd9dd7fc75e0a93793d12da5461', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
