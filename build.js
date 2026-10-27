const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const itemsToCopy = [
  'index.html',
  'interventions.html',
  'dockets.html',
  'report.html',
  'donate.html',
  'robots.txt',
  'sitemap.xml',
  'css',
  'js',
  'data',
  'images',
  '_headers'
];

itemsToCopy.forEach((item) => {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(outDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
  }
});

// Clean URL support: also write directory index files so both /page and /page.html resolve directly
const cleanPages = ['interventions', 'dockets', 'report', 'donate'];
cleanPages.forEach((page) => {
  const pageDir = path.join(outDir, page);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  fs.copyFileSync(path.join(__dirname, `${page}.html`), path.join(pageDir, 'index.html'));
});

console.log('Build completed successfully: Static assets and clean URLs generated in out/.');
