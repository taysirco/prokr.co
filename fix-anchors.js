const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix trustAnchors array elements
    // We will look for GOV.XXX or AMANA.XXX inside trustAnchors: [ ... ]
    const anchorsRegex = /trustAnchors:\s*\[([\s\S]*?)\],/g;
    content = content.replace(anchorsRegex, (match, inner) => {
        // Find each item like GOV.NWC,
        let replacedInner = inner.replace(/(GOV\.[A-Z_]+|AMANA\.[A-Z_]+)\s*,?/g, (m, anchor) => {
            return `{ ...${anchor}, role: 'جهة حكومية معتمدة للرقابة والضمان بالطائف' },\n`;
        });
        return `trustAnchors: [\n${replacedInner}    ],`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed trustAnchors role properties in Taif files.');
