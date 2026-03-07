const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix expertCitations source property
    const citationRegex = /expertCitations:\s*\[([\s\S]*?)\]/g;
    content = content.replace(citationRegex, (match, inner) => {
        let replacedInner = inner.replace(/quote:\s*('.*?'),?/g, "quote: $1,\n            source: 'مقابلة حصرية لتوثيق تحديات الطائف الجبلية',");
        return `expertCitations: [${replacedInner}]`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed expertCitations source property in Taif files.');
