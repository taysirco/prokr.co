import * as fs from 'fs';
import * as path from 'path';

const LOW_VOLUME_SERVICES = [
    'moving-out',
    'sanitization',
    'mattress-cleaning',
    'kitchen-cleaning',
    'floor-cleaning',
    'floor-polishing',
    'palaces-cleaning',
    'shops-cleaning',
    'insects-spraying',
    'cockroach-control',
    'rodent-control',
    'ants-control',
    'snakes-control'
];

const PROTECTED_CITIES = ['riyadh', 'jeddah']; // Keeping Dammam for pruning too, as it only needs ~17 pages

const baseDir = path.join(process.cwd(), 'src', 'lib', 'overrides', 'pages');
const registryPath = path.join(process.cwd(), 'src', 'lib', 'overrides', 'registry.ts');

async function prunePages() {
    console.log('--- STARTING GLOBAL PRUNING ---');
    const cities = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

    let deletedCount = 0;

    // 1. Delete physical files and edit index.ts
    for (const city of cities) {
        if (PROTECTED_CITIES.includes(city)) continue; // Don't prune top-tier cities automatically

        const cityDir = path.join(baseDir, city);
        const indexFilePath = path.join(cityDir, 'index.ts');

        if (!fs.existsSync(indexFilePath)) continue;

        let indexContent = fs.readFileSync(indexFilePath, 'utf-8');
        let indexChanged = false;

        for (const service of LOW_VOLUME_SERVICES) {
            const filePath = path.join(cityDir, `${service}.ts`);

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                deletedCount++;
                console.log(`Deleted: ${city}/${service}.ts`);
            }

            // Remove export from index.ts
            const exportNamePattern = new RegExp(`export { override as [a-zA-Z]+ } from '\\.\\/${service}';\\n?`, 'g');
            if (exportNamePattern.test(indexContent)) {
                indexContent = indexContent.replace(exportNamePattern, '');
                indexChanged = true;
            }
        }

        if (indexChanged) {
            fs.writeFileSync(indexFilePath, indexContent);
            console.log(`Updated index.ts for ${city}`);
        }
    }

    // 2. Remove entries from registry.ts
    console.log('Updating registry.ts...');
    let registryContent = fs.readFileSync(registryPath, 'utf-8');

    for (const city of cities) {
        if (PROTECTED_CITIES.includes(city)) continue;

        for (const service of LOW_VOLUME_SERVICES) {
            // Remove import
            const importPatternMatch = new RegExp(`import { ([a-zA-Z]+) } from '\\.\\/pages\\/${city}';\\n?`, 'g');
            // Actually, imports are at the top, like: import { madinahPestControl, madinahAntsControl, ... } from './pages/madinah';
            // We need a smarter way or just remove the map entries. Let's just remove the map entries first.
            const mapPattern = new RegExp(`[ \\t]*\\[makeOverrideKey\\('${city}', '${service}'\\)\\]: [a-zA-Z]+,\\n?`, 'g');
            registryContent = registryContent.replace(mapPattern, '');
        }
    }

    fs.writeFileSync(registryPath, registryContent);
    console.log(`Done. Deleted ${deletedCount} files.`);
}

prunePages().catch(console.error);
