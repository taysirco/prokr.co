const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove the injected duplicate source string if there is already another source key
    // We added `source: 'مقابلة حصرية لتوثيق تحديات الطائف الجبلية',`
    // Let's replace `source: 'مقابلة حصرية لتوثيق تحديات الطائف الجبلية', source:` with simply `source:`

    content = content.replace(/source:\s*'مقابلة حصرية لتوثيق تحديات الطائف الجبلية',\s*source:/g, 'source:');

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed duplicate source properties in Taif files.');
