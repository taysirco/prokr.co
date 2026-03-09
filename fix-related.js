const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix relatedServices
    const relRegex = /\{\s*slug:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]\s*\}/g;
    content = content.replace(relRegex, "{ slug: '$1', context: '$2', priority: 1 }");

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed relatedServices structural issues in Taif files.');
