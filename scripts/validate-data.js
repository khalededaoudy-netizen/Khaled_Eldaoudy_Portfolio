/**
 * validate-data.js
 * 
 * Validates:
 * 1. That every image / file path referenced in /data/*.json exists on disk.
 * 2. That every bilingual text field has both 'en' and 'ar' non-empty strings.
 * 3. Prints a clear, organized terminal report of missing assets and translations.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');

const filesToValidate = [
  'projects.json',
  'competitions.json',
  'leadership.json',
  'training.json',
  'certificates.json',
  'profile.json',
  'entrepreneurship.json',
  'i18n.json'
];

let totalIssues = 0;
let missingImages = [];
let missingTranslations = [];
let checkedEntriesCount = 0;

console.log('\n============================================================');
console.log('🔍 Running Data & Asset Validation for Khaled Portfolio');
console.log('============================================================\n');

/**
 * Checks if a relative path from ROOT_DIR exists.
 */
function checkFileExists(relPath, sourceFile, entryId, fieldName) {
  if (!relPath || typeof relPath !== 'string' || relPath.trim() === '') return;
  const normalizedRel = relPath.replace(/^[/\\]+/, '');
  const fullPath = path.join(ROOT_DIR, normalizedRel);
  if (!fs.existsSync(fullPath)) {
    missingImages.push({
      file: sourceFile,
      id: entryId || 'unknown',
      field: fieldName,
      path: relPath
    });
    totalIssues++;
  }
}

/**
 * Checks if a bilingual object has both 'en' and 'ar' strings.
 */
function checkBilingual(obj, sourceFile, entryId, fieldName) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    missingTranslations.push({
      file: sourceFile,
      id: entryId,
      field: fieldName,
      issue: 'Not a bilingual object {en, ar}'
    });
    totalIssues++;
    return;
  }

  const en = obj.en;
  const ar = obj.ar;

  const missing = [];
  if (typeof en !== 'string' || en.trim() === '') missing.push('en');
  if (typeof ar !== 'string' || ar.trim() === '') missing.push('ar');

  if (missing.length > 0) {
    missingTranslations.push({
      file: sourceFile,
      id: entryId,
      field: fieldName,
      issue: `Missing or empty: [${missing.join(', ')}]`
    });
    totalIssues++;
  }
}

// 1. Validate projects.json
function validateProjects() {
  const file = 'projects.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.title, file, id, 'title');
    checkBilingual(item.summary, file, id, 'summary');
    checkBilingual(item.description, file, id, 'description');
    checkBilingual(item.role, file, id, 'role');

    if (item.cover) checkFileExists(item.cover, file, id, 'cover');
    if (Array.isArray(item.images)) {
      item.images.forEach((img, i) => checkFileExists(img, file, id, `images[${i}]`));
    }
  });
}

// 2. Validate competitions.json
function validateCompetitions() {
  const file = 'competitions.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.name, file, id, 'name');
    checkBilingual(item.organizer, file, id, 'organizer');
    checkBilingual(item.result, file, id, 'result');
    checkBilingual(item.description, file, id, 'description');

    if (item.cover) checkFileExists(item.cover, file, id, 'cover');
    if (Array.isArray(item.images)) {
      item.images.forEach((img, i) => checkFileExists(img, file, id, `images[${i}]`));
    }
  });
}

// 3. Validate leadership.json
function validateLeadership() {
  const file = 'leadership.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.role, file, id, 'role');
    checkBilingual(item.organization, file, id, 'organization');
    checkBilingual(item.description, file, id, 'description');

    if (Array.isArray(item.images)) {
      item.images.forEach((img, i) => checkFileExists(img, file, id, `images[${i}]`));
    }
  });
}

// 4. Validate training.json
function validateTraining() {
  const file = 'training.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.provider, file, id, 'provider');
    checkBilingual(item.program, file, id, 'program');
    checkBilingual(item.description, file, id, 'description');

    if (Array.isArray(item.images)) {
      item.images.forEach((img, i) => checkFileExists(img, file, id, `images[${i}]`));
    }
  });
}

// 5. Validate certificates.json
function validateCertificates() {
  const file = 'certificates.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.title, file, id, 'title');
    checkBilingual(item.issuer, file, id, 'issuer');
    if (item.image) checkFileExists(item.image, file, id, 'image');
  });
}

// 6. Validate profile.json
function validateProfile() {
  const file = 'profile.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const item = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  checkedEntriesCount++;
  checkBilingual(item.name, file, 'profile', 'name');
  checkBilingual(item.title, file, 'profile', 'title');
  checkBilingual(item.bio, file, 'profile', 'bio');
  checkBilingual(item.location, file, 'profile', 'location');

  if (item.photo) {
    checkFileExists(item.photo, file, 'profile', 'photo');
  }

  if (item.cv_path) {
    if (typeof item.cv_path === 'string') {
      checkFileExists(item.cv_path, file, 'profile', 'cv_path');
    } else if (typeof item.cv_path === 'object') {
      if (item.cv_path.en) checkFileExists(item.cv_path.en, file, 'profile', 'cv_path.en');
      if (item.cv_path.ar) checkFileExists(item.cv_path.ar, file, 'profile', 'cv_path.ar');
    }
  }

  if (Array.isArray(item.stats)) {
    item.stats.forEach((s, i) => {
      checkBilingual(s.label, file, `stat-${s.id || i}`, 'label');
    });
  }
}

// 7. Validate entrepreneurship.json
function validateEntrepreneurship() {
  const file = 'entrepreneurship.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.forEach((item, idx) => {
    checkedEntriesCount++;
    const id = item.id || `index-${idx}`;
    checkBilingual(item.role, file, id, 'role');
    checkBilingual(item.title, file, id, 'title');
    checkBilingual(item.description, file, id, 'description');
  });
}

// 8. Validate i18n.json
function validateI18n() {
  const file = 'i18n.json';
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  for (const [sectionKey, sectionObj] of Object.entries(data)) {
    if (typeof sectionObj === 'object' && sectionObj !== null) {
      for (const [k, v] of Object.entries(sectionObj)) {
        checkedEntriesCount++;
        checkBilingual(v, file, sectionKey, k);
      }
    }
  }
}

// Execute all validations
try {
  validateProjects();
  validateCompetitions();
  validateLeadership();
  validateTraining();
  validateCertificates();
  validateProfile();
  validateEntrepreneurship();
  validateI18n();
} catch (err) {
  console.error('❌ Error parsing JSON files:', err.message);
  process.exit(1);
}

// Print Results Report
console.log(`📊 Checked ${checkedEntriesCount} data items across 7 files.\n`);

if (missingTranslations.length > 0) {
  console.log(`⚠️  MISSING TRANSLATIONS (${missingTranslations.length} issues):`);
  missingTranslations.forEach((item, idx) => {
    console.log(`  ${idx + 1}. [${item.file}] -> Entry: "${item.id}" -> Field: "${item.field}" (${item.issue})`);
  });
  console.log('');
} else {
  console.log('✅ All text fields have valid bilingual (en / ar) translations.');
}

if (missingImages.length > 0) {
  console.log(`\n📁 REFERENCED ASSETS NOT YET PLACED IN /assets/ (${missingImages.length} missing):`);
  missingImages.forEach((item, idx) => {
    console.log(`  ${idx + 1}. [${item.file}] -> Entry: "${item.id}" -> ${item.field}: ${item.path}`);
  });
  console.log('\n💡 Note: As you add your photos/PDFs into the respective /assets subfolders, these will resolve.');
} else {
  console.log('✅ All referenced image & file paths exist.');
}

console.log('\n------------------------------------------------------------');
if (totalIssues === 0) {
  console.log('🎉 Validation Result: 100% Complete! Everything is in place.');
  process.exit(0);
} else {
  console.log(`ℹ️  Validation Result: Found ${totalIssues} pending items to fill or add.`);
  // We exit with 0 or 1 depending on whether it's an initial scaffold check
  // For npm run validate, exiting with 1 lets CI/scripts know there are missing files.
  process.exit(missingTranslations.length > 0 ? 1 : 0);
}

