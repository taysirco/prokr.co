import { CITIES, SERVICES } from './src/lib/seed';
import { hasPageOverride } from './src/lib/overrides/registry';

const unusedServices = [];
const usedServices = [];

for (const service of SERVICES) {
    let used = false;
    for (const city of CITIES) {
        if (hasPageOverride(city.slug, service.slug)) {
            used = true;
            break;
        }
    }
    if (used) {
        usedServices.push(service.slug);
    } else {
        unusedServices.push(service.slug);
    }
}

console.log("Unused Services:");
console.log(unusedServices.join("\n"));
console.log("\nUsed Services:");
console.log(usedServices.join("\n"));
