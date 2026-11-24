import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const htmlPages = [
  'index.html',
  'about.html',
  'robot.html',
  'outreach.html',
  'achievements.html',
  'sponsors.html',
  'contact.html',
];

export default defineConfig(() => {
  const input = Object.fromEntries(
    htmlPages.map((file) => [
      file.replace('.html', ''),
      path.resolve(__dirname, file),
    ]),
  );

  return {
    base: './',
    plugins: [
      {
        name: 'copy-static-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const rootAssets = path.resolve(__dirname, 'assets');
          const distAssets = path.resolve(distDir, 'assets');
          if (fs.existsSync(distDir) && fs.existsSync(rootAssets)) {
            fs.cpSync(rootAssets, distAssets, {recursive: true, force: true});
          }
          const noJekyllSrc = path.resolve(__dirname, '.nojekyll');
          if (fs.existsSync(noJekyllSrc) && fs.existsSync(distDir)) {
            fs.copyFileSync(noJekyllSrc, path.resolve(distDir, '.nojekyll'));
          }
        },
      },
    ],
    build: {
      rollupOptions: {
        input,
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
