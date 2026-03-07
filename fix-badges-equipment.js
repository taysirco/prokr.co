const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix verificationBadges
    const badgeRegex = /verificationBadges:\s*\[([\s\S]*?)\]\s*,/g;
    content = content.replace(badgeRegex, (match, inner) => {
        // If it's already an object, skip it
        if (inner.includes('{')) return match;

        const strRegex = /['"]([^'"]+)['"]/g;
        const newBadges = [];
        let m;
        while ((m = strRegex.exec(inner)) !== null) {
            newBadges.push(`        { badge: '${m[1].replace(/'/g, "\\'")}', authority: 'اعتماد الطائف', icon: 'shield-check' }`);
        }
        return `verificationBadges: [\n${newBadges.join(',\n')}\n    ],`;
    });

    // Fix equipment
    const eqRegex = /equipment:\s*\[([\s\S]*?)\]\s*,/g;
    content = content.replace(eqRegex, (match, inner) => {
        // If it's already an object, skip it
        if (inner.includes('{')) return match;

        const strRegex = /['"]([^'"]+)['"]/g;
        const newEq = [];
        let m;
        while ((m = strRegex.exec(inner)) !== null) {
            let str = m[1];
            // Expecting "Name (Use)"
            let name = str;
            let use = 'للاستخدام الفني المعتمد';

            const parenMatch = str.match(/^(.*?) \((.*?)\)$/);
            if (parenMatch) {
                name = parenMatch[1].trim();
                use = parenMatch[2].trim();
            } else {
                const parenMatch2 = str.match(/^(.*?)\((.*?)\)$/);
                if (parenMatch2) {
                    name = parenMatch2[1].trim();
                    use = parenMatch2[2].trim();
                }
            }
            newEq.push(`        { name: '${name.replace(/'/g, "\\'")}', use: '${use.replace(/'/g, "\\'")}' }`);
        }
        return `equipment: [\n${newEq.join(',\n')}\n    ],`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed verificationBadges and equipment structural issues in Taif files.');
