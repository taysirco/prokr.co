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

const PROTECTED_CITIES = ['riyadh', 'jeddah'];

const registryPath = path.join(process.cwd(), 'src', 'lib', 'overrides', 'registry.ts');

async function fixRegistry() {
    let content = fs.readFileSync(registryPath, 'utf-8');
    const lines = content.split('\n');
    const newLines = [];

    for (const line of lines) {
        let shouldKeep = true;

        // Check if line is an import for a deleted service
        if (line.trim().startsWith('import { override as ') || line.trim().startsWith('import {')) {
            for (const service of LOW_VOLUME_SERVICES) {
                if (line.includes(`'./pages/`) && line.includes(`/${service}'`)) {
                    // Check if the city is projected
                    let isProtected = false;
                    for (const protectedCity of PROTECTED_CITIES) {
                        if (line.includes(`./pages/${protectedCity}/`)) {
                            isProtected = true;
                            break;
                        }
                    }

                    if (!isProtected) {
                        shouldKeep = false;
                        break;
                    }
                }
            }
        }

        if (shouldKeep) {
            newLines.push(line);
        }
    }

    fs.writeFileSync(registryPath, newLines.join('\n'));
    console.log('Fixed registry.ts imports');
}

fixRegistry().catch(console.error);
