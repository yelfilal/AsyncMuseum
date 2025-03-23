
export default {
  basePath: 'https://yelfilal.github.io/AsyncMuseum',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
