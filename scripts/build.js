import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/src', { recursive: true });
copyFileSync('index.html', 'dist/index.html');
copyFileSync('src/main.js', 'dist/src/main.js');
copyFileSync('src/styles.css', 'dist/src/styles.css');
console.log('Static survey form built to dist/');
