const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');

const deps = [];

if (dependencies) deps.concat(Object.keys(dependencies));
if (peerDependencies) deps.concat(Object.keys(peerDependencies));

const sharedConfig = {
  entryPoints: ['src/handler.ts'],
  bundle: true,
  minify: false,
  external: deps
}

build({
  ...sharedConfig,
  platform: 'node',
  outdir: 'dist'
})