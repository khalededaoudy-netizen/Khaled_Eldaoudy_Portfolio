const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('============================================================');
console.log('📦 Building Production Distribution: dist/');
console.log('============================================================');

// 1. Clean previous dist
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Public individual root files
const ROOT_FILES = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml'
];

ROOT_FILES.forEach(file => {
  const src = path.join(ROOT_DIR, file);
  const dest = path.join(DIST_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✓ Copied root file: ${file}`);
  } else {
    console.warn(`  ⚠️ Warning: Root file ${file} not found!`);
  }
});

// 3. Public directories
const PUBLIC_DIRS = ['css', 'js', 'data', 'assets'];

// Filter to prevent copying unwanted files
const EXCLUDED_EXTENSIONS = ['.md', '.py', '.log', '.tmp', '.DS_Store'];
const EXCLUDED_NAMES = ['Thumbs.db', 'ehthumbs.db'];

function copyDirectory(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXCLUDED_EXTENSIONS.includes(ext) || EXCLUDED_NAMES.includes(entry.name)) {
        console.log(`  ↳ Skipping excluded file: ${entry.name}`);
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

PUBLIC_DIRS.forEach(dir => {
  const src = path.join(ROOT_DIR, dir);
  const dest = path.join(DIST_DIR, dir);
  copyDirectory(src, dest);
  console.log(`  ✓ Copied directory: ${dir}/`);
});

// 4. Strict Post-Build Security Audit
console.log('\n🔒 Running Security & Isolation Audit on dist/...');

function scanDir(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(scanDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allDistFiles = scanDir(DIST_DIR);
console.log(`  Total files in dist/: ${allDistFiles.length}`);

// Check for leaks
const leakedMarkdown = allDistFiles.filter(f => f.endsWith('.md'));
const leakedScripts = allDistFiles.filter(f => f.endsWith('.py') || f.includes('scripts'));
const leakedCaptures = allDistFiles.filter(f => f.includes('screenshots'));

let hasError = false;

if (leakedMarkdown.length > 0) {
  console.error('  ❌ ERROR: Markdown file leaked into dist/:', leakedMarkdown);
  hasError = true;
}
if (leakedScripts.length > 0) {
  console.error('  ❌ ERROR: Test script leaked into dist/:', leakedScripts);
  hasError = true;
}
if (leakedCaptures.length > 0) {
  console.error('  ❌ ERROR: Screenshots leaked into dist/:', leakedCaptures);
  hasError = true;
}

if (!hasError) {
  console.log('  ✅ Clean build: Zero private files, zero audit reports in dist/');
  console.log('============================================================');
  console.log('🎉 Production distribution dist/ successfully prepared!\n');
} else {
  process.exit(1);
}

