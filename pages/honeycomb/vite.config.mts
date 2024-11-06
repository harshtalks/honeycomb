import { resolve } from 'node:path';
import { withPageConfig } from '@extension/vite-config';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const uiDir = resolve(rootDir, './src/components/ui/index.ts');

export default withPageConfig({
  resolve: {
    alias: {
      '@src': srcDir,
      ui: uiDir,
    },
  },
  publicDir: resolve(rootDir, 'public'),
  build: {
    outDir: resolve(rootDir, '..', '..', 'dist', 'honeycomb'),
  },
  server: {
    port: 4321,
  },
});
