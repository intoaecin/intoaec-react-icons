const fs = require('fs');
const path = require('path');

// Define the directory to search for .tsx files
const assetsDir = path.join(__dirname, 'src/assets');

// Function to recursively get all .tsx files
const getAllTsxFiles = (dir, files = []) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  return files;
};

// Get all .tsx files from the assets directory
const tsxFiles = getAllTsxFiles(assetsDir);

// Generate import statements and collect icon names
const importStatements = tsxFiles.map(file => {
  const relativePath = `.${file.replace(assetsDir, '').replace(/\\/g, '/').replace('.tsx', '')}`;
  const componentName = path.basename(file, '.tsx');
  return `import ${componentName} from "${relativePath}";`;
}).join('\n');

const iconNames = tsxFiles.map(file => {
  const componentName = path.basename(file, '.tsx');
  return componentName;
}).join(', ');

const iconsObject = `const icons = { ${iconNames} };`;

const exportStatement = 'export default icons;';

// Combine everything into a single string
const fileContent = `${importStatements}\n\n${iconsObject}\n\n${exportStatement}`;

// Write to index.ts file in the assets directory
const indexPath = path.join(assetsDir, 'index.ts');
fs.writeFileSync(indexPath, fileContent);

console.log(`index.ts has been created with ${tsxFiles.length} icons.`);
