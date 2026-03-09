const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix expertCitations expert object
    // Replace `expert: EXPERTS.NAME,` with `expert: EXPERTS.NAME.name,`
    const expertRegex = /expert:\s*EXPERTS\.([A-Z_]+),/g;
    content = content.replace(expertRegex, "expert: EXPERTS.$1.name,");

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed expertCitations in Taif files.');
