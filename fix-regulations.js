const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/overrides/pages/taif/bird-control.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/REGULATIONS\.MOH_GUIDELINES/g, 'REGULATIONS.BALADI_HEALTH');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed MOH_GUIDELINES in bird-control.ts');
