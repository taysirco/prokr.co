const fs = require('fs');
const path = require('path');

const taifDir = path.join(__dirname, 'src/lib/overrides/pages/taif');
const files = fs.readdirSync(taifDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(taifDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Fix pricing block
    const pricingRegex = /pricing:\s*\{\s*title:\s*['"][^'"]+['"],\s*items:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(pricingRegex, (match, itemsBlock) => {
        const itemRegex = /\{\s*service:\s*['"]([^'"]+)['"],\s*price:\s*['"]([^'"]+)['"],\s*duration:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],?\s*\}/g;
        const newItems = [];
        let m;
        while ((m = itemRegex.exec(itemsBlock)) !== null) {
            let minPrice = 100;
            const numMatch = m[2].match(/(\d+)/);
            if (numMatch) minPrice = parseInt(numMatch[1], 10);
            let unit = m[2].includes('م²') ? 'م²' : 'خدمة';
            newItems.push(`        { type: '${m[1].replace(/'/g, "\\'")}', unit: '${unit}', minPrice: ${minPrice}, maxPrice: ${minPrice * 2}, time: '${m[3].replace(/'/g, "\\'")}' }`);
        }
        return `pricing: [\n${newItems.join(',\n')}\n    ],`;
    });

    // 2. Fix faq block
    const faqRegex = /faq:\s*\{\s*title:\s*['"][^'"]+['"],\s*items:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(faqRegex, (match, itemsBlock) => {
        const qRegex = /\{\s*question:\s*['"]([^'"]+)['"],\s*answer:\s*['"]([^'"]+)['"],?\s*\}/g;
        const newQs = [];
        let m;
        while ((m = qRegex.exec(itemsBlock)) !== null) {
            newQs.push(`        { question: '${m[1].replace(/'/g, "\\'")}', answer: '${m[2].replace(/'/g, "\\'")}' }`);
        }
        return `faq: [\n${newQs.join(',\n')}\n    ],`;
    });

    // 3. Fix expertTips block
    const tipsRegex = /expertTips:\s*\{\s*title:\s*['"][^'"]+['"],\s*tips:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(tipsRegex, (match, itemsBlock) => {
        const strRegex = /['"]([^'"]+)['"]/g;
        const newTips = [];
        let m;
        while ((m = strRegex.exec(itemsBlock)) !== null) {
            newTips.push(`        '${m[1].replace(/'/g, "\\'")}'`);
        }
        return `expertTips: [\n${newTips.join(',\n')}\n    ],`;
    });

    // 4. Fix warnings block
    const warRegex = /warnings:\s*\{\s*title:\s*['"][^'"]+['"],\s*warnings:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(warRegex, (match, itemsBlock) => {
        const strRegex = /['"]([^'"]+)['"]/g;
        const newWar = [];
        let m;
        while ((m = strRegex.exec(itemsBlock)) !== null) {
            newWar.push(`        '${m[1].replace(/'/g, "\\'")}'`);
        }
        return `warnings: [\n${newWar.join(',\n')}\n    ],`;
    });

    // 5. Fix hiddenObjections block => it was mapped as { fear, solution }
    const objRegex = /hiddenObjections:\s*\{\s*title:\s*['"][^'"]+['"],\s*objections:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(objRegex, (match, itemsBlock) => {
        const itemRegex = /\{\s*objection:\s*['"]([^'"]+)['"],\s*answer:\s*['"]([^'"]+)['"],?\s*\}/g;
        const newObj = [];
        let m;
        while ((m = itemRegex.exec(itemsBlock)) !== null) {
            newObj.push(`        { fear: '${m[1].replace(/'/g, "\\'")}', solution: '${m[2].replace(/'/g, "\\'")}' }`);
        }
        return `hiddenObjections: [\n${newObj.join(',\n')}\n    ],`;
    });

    // 6. Fix counterNarratives block => it mapped as { myth, truth }
    // It's already mostly Array of { myth, truth }, but it might be wrapped in { title, narratives: [] }. Let's check Taif files
    const nRegex = /counterNarratives:\s*\{\s*title:\s*['"][^'"]+['"],\s*narratives:\s*\[([\s\S]*?)\],\s*\},/g;
    content = content.replace(nRegex, (match, itemsBlock) => {
        const mythRegex = /\{\s*myth:\s*['"]([^'"]+)['"],\s*truth:\s*['"]([^'"]+)['"],?\s*\}/g;
        const newMyth = [];
        let m;
        while ((m = mythRegex.exec(itemsBlock)) !== null) {
            newMyth.push(`        { myth: '${m[1].replace(/'/g, "\\'")}', truth: '${m[2].replace(/'/g, "\\'")}' }`);
        }
        return `counterNarratives: [\n${newMyth.join(',\n')}\n    ],`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed all structural issues across pricing, faq, expertTips, warnings, hiddenObjections, and counterNarratives in Taif!');
