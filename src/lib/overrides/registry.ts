// ============================================
// Override Registry — جميع ملفات Override المخصصة
// يربط كل مفتاح صفحة (city-slug::service-slug) بملف Override
// ============================================

import type { PageOverride } from './types';

type OverrideKey = `${string}::${string}`;

function makeOverrideKey(citySlug: string, serviceSlug: string): OverrideKey {
    return `${citySlug}::${serviceSlug}`;
}

// ═══════════════════════════════════════
// JEDDAH IMPORTS (49 services)
// ═══════════════════════════════════════

// ─── Moving (5) ───
import { override as jeddahFurnitureMoving } from './pages/jeddah-furniture-moving';
import { override as jeddahFurnitureStorage } from './pages/jeddah-furniture-storage';
import { override as jeddahDyna } from './pages/jeddah-dyna';
import { override as jeddahMovingOut } from './pages/jeddah-moving-out';
import { override as jeddahDabab } from './pages/jeddah-dabab';

// ─── Cleaning (24) ───
import { override as jeddahCleaning } from './pages/jeddah-cleaning';
import { override as jeddahTanksCleaning } from './pages/jeddah-tanks-cleaning';
import { override as jeddahSofaCleaning } from './pages/jeddah-sofa-cleaning';
import { override as jeddahCarpetCleaning } from './pages/jeddah-carpet-cleaning';
import { override as jeddahSteamCleaning } from './pages/jeddah-steam-cleaning';
import { override as jeddahSanitization } from './pages/jeddah-sanitization';
import { override as jeddahAcCleaning } from './pages/jeddah-air-conditioner-cleaning';
import { override as jeddahMattressCleaning } from './pages/jeddah-mattress-cleaning';
import { override as jeddahPoolCleaning } from './pages/jeddah-swimming-pool-cleaning';
import { override as jeddahKitchenCleaning } from './pages/jeddah-kitchen-cleaning';
import { override as jeddahFacadeCleaning } from './pages/jeddah-glass-facades-cleaning';
import { override as jeddahFloorCleaning } from './pages/jeddah-floor-cleaning';
import { override as jeddahFloorPolishing } from './pages/jeddah-floor-polishing';
import { override as jeddahMarblePolishing } from './pages/jeddah-marble-polishing';
import { override as jeddahVillasCleaning } from './pages/jeddah-villas-cleaning';
import { override as jeddahApartmentsCleaning } from './pages/jeddah-apartments-cleaning';
import { override as jeddahPalacesCleaning } from './pages/jeddah-palaces-cleaning';
import { override as jeddahShopsCleaning } from './pages/jeddah-shops-cleaning';
import { override as jeddahOfficeCleaning } from './pages/jeddah-office-cleaning';
import { override as jeddahFurnitureCleaning } from './pages/jeddah-furniture-cleaning';
import { override as jeddahAutoCleaning } from './pages/jeddah-auto-cleaning';
import { override as jeddahOvenCleaning } from './pages/jeddah-oven-cleaning';
import { override as jeddahCouncilsCleaning } from './pages/jeddah-councils-cleaning';
import { override as jeddahHourlyCleaning } from './pages/jeddah-hourly-cleaning';
import { override as jeddahChimneyCleaning } from './pages/jeddah-restaurant-chimney-cleaning';

// ─── Pest Control (10) ───
import { override as jeddahPestControl } from './pages/jeddah-pest-control';
import { override as jeddahPesticideSpraying } from './pages/jeddah-pesticide-spraying';
import { override as jeddahInsectsSpraying } from './pages/jeddah-insects-spraying';
import { override as jeddahTermiteControl } from './pages/jeddah-termite-control';
import { override as jeddahCockroachControl } from './pages/jeddah-cockroach-control';
import { override as jeddahBedbugsControl } from './pages/jeddah-bedbugs-control';
import { override as jeddahRodentControl } from './pages/jeddah-rodent-control';
import { override as jeddahAntsControl } from './pages/jeddah-ants-control';
import { override as jeddahBirdControl } from './pages/jeddah-bird-control';
import { override as jeddahSnakesControl } from './pages/jeddah-snakes-control';

// ─── Leak Detection (3) ───
import { override as jeddahWaterLeakDetection } from './pages/jeddah-water-leak-detection';
import { override as jeddahTankLeakDetection } from './pages/jeddah-tank-leak-detection';
import { override as jeddahBathroomLeakDetection } from './pages/jeddah-bathroom-leak-detection';

// ─── Insulation (5) ───
import { override as jeddahTankInsulation } from './pages/jeddah-tank-insulation';
import { override as jeddahRoofInsulation } from './pages/jeddah-roof-insulation';
import { override as jeddahFoamInsulation } from './pages/jeddah-foam-insulation';
import { override as jeddahWaterInsulation } from './pages/jeddah-water-insulation';
import { override as jeddahThermalInsulation } from './pages/jeddah-thermal-insulation';

// ─── Sewage (2) ───
import { override as jeddahSewageUnblocking } from './pages/jeddah-sewage-unblocking';
import { override as jeddahSewageSuction } from './pages/jeddah-sewage-suction';

// ═══════════════════════════════════════
// RIYADH IMPORTS (49 services)
// ═══════════════════════════════════════

// ─── Moving (5) ───
import { override as riyadhFurnitureMoving } from './pages/riyadh-furniture-moving';
import { override as riyadhFurnitureStorage } from './pages/riyadh-furniture-storage';
import { override as riyadhDyna } from './pages/riyadh-dyna';
import { override as riyadhMovingOut } from './pages/riyadh-moving-out';
import { override as riyadhDabab } from './pages/riyadh-dabab';

// ─── Cleaning (25) ───
import { override as riyadhCleaning } from './pages/riyadh-cleaning';
import { override as riyadhTanksCleaning } from './pages/riyadh-tanks-cleaning';
import { override as riyadhSofaCleaning } from './pages/riyadh-sofa-cleaning';
import { override as riyadhCarpetCleaning } from './pages/riyadh-carpet-cleaning';
import { override as riyadhSteamCleaning } from './pages/riyadh-steam-cleaning';
import { override as riyadhSanitization } from './pages/riyadh-sanitization';
import { override as riyadhAcCleaning } from './pages/riyadh-air-conditioner-cleaning';
import { override as riyadhMattressCleaning } from './pages/riyadh-mattress-cleaning';
import { override as riyadhPoolCleaning } from './pages/riyadh-swimming-pool-cleaning';
import { override as riyadhKitchenCleaning } from './pages/riyadh-kitchen-cleaning';
import { override as riyadhFacadeCleaning } from './pages/riyadh-glass-facades-cleaning';
import { override as riyadhFloorCleaning } from './pages/riyadh-floor-cleaning';
import { override as riyadhFloorPolishing } from './pages/riyadh-floor-polishing';
import { override as riyadhMarblePolishing } from './pages/riyadh-marble-polishing';
import { override as riyadhVillasCleaning } from './pages/riyadh-villas-cleaning';
import { override as riyadhApartmentsCleaning } from './pages/riyadh-apartments-cleaning';
import { override as riyadhPalacesCleaning } from './pages/riyadh-palaces-cleaning';
import { override as riyadhShopsCleaning } from './pages/riyadh-shops-cleaning';
import { override as riyadhOfficeCleaning } from './pages/riyadh-office-cleaning';
import { override as riyadhFurnitureCleaning } from './pages/riyadh-furniture-cleaning';
import { override as riyadhAutoCleaning } from './pages/riyadh-auto-cleaning';
import { override as riyadhOvenCleaning } from './pages/riyadh-oven-cleaning';
import { override as riyadhCouncilsCleaning } from './pages/riyadh-councils-cleaning';
import { override as riyadhHourlyCleaning } from './pages/riyadh-hourly-cleaning';
import { override as riyadhChimneyCleaning } from './pages/riyadh-restaurant-chimney-cleaning';

// ─── Pest Control (10) ───
import { override as riyadhPestControl } from './pages/riyadh-pest-control';
import { override as riyadhPesticideSpraying } from './pages/riyadh-pesticide-spraying';
import { override as riyadhInsectsSpraying } from './pages/riyadh-insects-spraying';
import { override as riyadhTermiteControl } from './pages/riyadh-termite-control';
import { override as riyadhCockroachControl } from './pages/riyadh-cockroach-control';
import { override as riyadhBedbugsControl } from './pages/riyadh-bedbugs-control';
import { override as riyadhRodentControl } from './pages/riyadh-rodent-control';
import { override as riyadhAntsControl } from './pages/riyadh-ants-control';
import { override as riyadhBirdControl } from './pages/riyadh-bird-control';
import { override as riyadhSnakesControl } from './pages/riyadh-snakes-control';

// ─── Leak Detection (3) ───
import { override as riyadhWaterLeakDetection } from './pages/riyadh-water-leak-detection';
import { override as riyadhTankLeakDetection } from './pages/riyadh-tank-leak-detection';
import { override as riyadhBathroomLeakDetection } from './pages/riyadh-bathroom-leak-detection';

// ─── Insulation (5) ───
import { override as riyadhRoofInsulation } from './pages/riyadh-roof-insulation';
import { override as riyadhTankInsulation } from './pages/riyadh-tank-insulation';
import { override as riyadhFoamInsulation } from './pages/riyadh-foam-insulation';
import { override as riyadhWaterInsulation } from './pages/riyadh-water-insulation';
import { override as riyadhThermalInsulation } from './pages/riyadh-thermal-insulation';

// ─── Sewage (2) ───
import { override as riyadhSewageUnblocking } from './pages/riyadh-sewage-unblocking';
import { override as riyadhSewageSuction } from './pages/riyadh-sewage-suction';

// ═══════════════════════════════════════
// REGISTRY MAP
// ═══════════════════════════════════════

const PAGE_OVERRIDES: Record<OverrideKey, PageOverride> = {
    // ─── Jeddah: Moving (5/5) ✓ ───
    [makeOverrideKey('jeddah', 'furniture-moving')]: jeddahFurnitureMoving,
    [makeOverrideKey('jeddah', 'furniture-storage')]: jeddahFurnitureStorage,
    [makeOverrideKey('jeddah', 'dyna')]: jeddahDyna,
    [makeOverrideKey('jeddah', 'moving-out')]: jeddahMovingOut,
    [makeOverrideKey('jeddah', 'dabab')]: jeddahDabab,

    // ─── Jeddah: Cleaning (24/24) ✓ ───
    [makeOverrideKey('jeddah', 'cleaning')]: jeddahCleaning,
    [makeOverrideKey('jeddah', 'tanks-cleaning')]: jeddahTanksCleaning,
    [makeOverrideKey('jeddah', 'sofa-cleaning')]: jeddahSofaCleaning,
    [makeOverrideKey('jeddah', 'carpet-cleaning')]: jeddahCarpetCleaning,
    [makeOverrideKey('jeddah', 'steam-cleaning')]: jeddahSteamCleaning,
    [makeOverrideKey('jeddah', 'sanitization')]: jeddahSanitization,
    [makeOverrideKey('jeddah', 'air-conditioner-cleaning')]: jeddahAcCleaning,
    [makeOverrideKey('jeddah', 'glass-facades-cleaning')]: jeddahFacadeCleaning,
    [makeOverrideKey('jeddah', 'floor-cleaning')]: jeddahFloorCleaning,
    [makeOverrideKey('jeddah', 'floor-polishing')]: jeddahFloorPolishing,
    [makeOverrideKey('jeddah', 'marble-polishing')]: jeddahMarblePolishing,
    [makeOverrideKey('jeddah', 'villas-cleaning')]: jeddahVillasCleaning,
    [makeOverrideKey('jeddah', 'apartments-cleaning')]: jeddahApartmentsCleaning,
    [makeOverrideKey('jeddah', 'palaces-cleaning')]: jeddahPalacesCleaning,
    [makeOverrideKey('jeddah', 'shops-cleaning')]: jeddahShopsCleaning,
    [makeOverrideKey('jeddah', 'office-cleaning')]: jeddahOfficeCleaning,
    [makeOverrideKey('jeddah', 'furniture-cleaning')]: jeddahFurnitureCleaning,
    [makeOverrideKey('jeddah', 'kitchen-cleaning')]: jeddahKitchenCleaning,
    [makeOverrideKey('jeddah', 'swimming-pool-cleaning')]: jeddahPoolCleaning,
    [makeOverrideKey('jeddah', 'auto-cleaning')]: jeddahAutoCleaning,
    [makeOverrideKey('jeddah', 'oven-cleaning')]: jeddahOvenCleaning,
    [makeOverrideKey('jeddah', 'councils-cleaning')]: jeddahCouncilsCleaning,
    [makeOverrideKey('jeddah', 'hourly-cleaning')]: jeddahHourlyCleaning,
    [makeOverrideKey('jeddah', 'restaurant-chimney-cleaning')]: jeddahChimneyCleaning,
    [makeOverrideKey('jeddah', 'mattress-cleaning')]: jeddahMattressCleaning,

    // ─── Jeddah: Pest Control (10/10) ✓ ───
    [makeOverrideKey('jeddah', 'pest-control')]: jeddahPestControl,
    [makeOverrideKey('jeddah', 'pesticide-spraying')]: jeddahPesticideSpraying,
    [makeOverrideKey('jeddah', 'insects-spraying')]: jeddahInsectsSpraying,
    [makeOverrideKey('jeddah', 'termite-control')]: jeddahTermiteControl,
    [makeOverrideKey('jeddah', 'cockroach-control')]: jeddahCockroachControl,
    [makeOverrideKey('jeddah', 'bedbugs-control')]: jeddahBedbugsControl,
    [makeOverrideKey('jeddah', 'rodent-control')]: jeddahRodentControl,
    [makeOverrideKey('jeddah', 'ants-control')]: jeddahAntsControl,
    [makeOverrideKey('jeddah', 'bird-control')]: jeddahBirdControl,
    [makeOverrideKey('jeddah', 'snakes-control')]: jeddahSnakesControl,

    // ─── Jeddah: Leak Detection (3/3) ✓ ───
    [makeOverrideKey('jeddah', 'water-leak-detection')]: jeddahWaterLeakDetection,
    [makeOverrideKey('jeddah', 'tank-leak-detection')]: jeddahTankLeakDetection,
    [makeOverrideKey('jeddah', 'bathroom-leak-detection')]: jeddahBathroomLeakDetection,

    // ─── Jeddah: Insulation (5/5) ✓ ───
    [makeOverrideKey('jeddah', 'tank-insulation')]: jeddahTankInsulation,
    [makeOverrideKey('jeddah', 'roof-insulation')]: jeddahRoofInsulation,
    [makeOverrideKey('jeddah', 'foam-insulation')]: jeddahFoamInsulation,
    [makeOverrideKey('jeddah', 'water-insulation')]: jeddahWaterInsulation,
    [makeOverrideKey('jeddah', 'thermal-insulation')]: jeddahThermalInsulation,

    // ─── Jeddah: Sewage (2/2) ✓ ───
    [makeOverrideKey('jeddah', 'sewage-unblocking')]: jeddahSewageUnblocking,
    [makeOverrideKey('jeddah', 'sewage-suction')]: jeddahSewageSuction,

    // ═══════════════════════════════════════
    // RIYADH (49/49) ✓
    // ═══════════════════════════════════════

    // ─── Riyadh: Moving (5/5) ✓ ───
    [makeOverrideKey('riyadh', 'furniture-moving')]: riyadhFurnitureMoving,
    [makeOverrideKey('riyadh', 'furniture-storage')]: riyadhFurnitureStorage,
    [makeOverrideKey('riyadh', 'dyna')]: riyadhDyna,
    [makeOverrideKey('riyadh', 'moving-out')]: riyadhMovingOut,
    [makeOverrideKey('riyadh', 'dabab')]: riyadhDabab,

    // ─── Riyadh: Cleaning (25/25) ✓ ───
    [makeOverrideKey('riyadh', 'cleaning')]: riyadhCleaning,
    [makeOverrideKey('riyadh', 'tanks-cleaning')]: riyadhTanksCleaning,
    [makeOverrideKey('riyadh', 'sofa-cleaning')]: riyadhSofaCleaning,
    [makeOverrideKey('riyadh', 'carpet-cleaning')]: riyadhCarpetCleaning,
    [makeOverrideKey('riyadh', 'steam-cleaning')]: riyadhSteamCleaning,
    [makeOverrideKey('riyadh', 'sanitization')]: riyadhSanitization,
    [makeOverrideKey('riyadh', 'air-conditioner-cleaning')]: riyadhAcCleaning,
    [makeOverrideKey('riyadh', 'mattress-cleaning')]: riyadhMattressCleaning,
    [makeOverrideKey('riyadh', 'swimming-pool-cleaning')]: riyadhPoolCleaning,
    [makeOverrideKey('riyadh', 'kitchen-cleaning')]: riyadhKitchenCleaning,
    [makeOverrideKey('riyadh', 'glass-facades-cleaning')]: riyadhFacadeCleaning,
    [makeOverrideKey('riyadh', 'floor-cleaning')]: riyadhFloorCleaning,
    [makeOverrideKey('riyadh', 'floor-polishing')]: riyadhFloorPolishing,
    [makeOverrideKey('riyadh', 'marble-polishing')]: riyadhMarblePolishing,
    [makeOverrideKey('riyadh', 'villas-cleaning')]: riyadhVillasCleaning,
    [makeOverrideKey('riyadh', 'apartments-cleaning')]: riyadhApartmentsCleaning,
    [makeOverrideKey('riyadh', 'palaces-cleaning')]: riyadhPalacesCleaning,
    [makeOverrideKey('riyadh', 'shops-cleaning')]: riyadhShopsCleaning,
    [makeOverrideKey('riyadh', 'office-cleaning')]: riyadhOfficeCleaning,
    [makeOverrideKey('riyadh', 'furniture-cleaning')]: riyadhFurnitureCleaning,
    [makeOverrideKey('riyadh', 'auto-cleaning')]: riyadhAutoCleaning,
    [makeOverrideKey('riyadh', 'oven-cleaning')]: riyadhOvenCleaning,
    [makeOverrideKey('riyadh', 'councils-cleaning')]: riyadhCouncilsCleaning,
    [makeOverrideKey('riyadh', 'hourly-cleaning')]: riyadhHourlyCleaning,
    [makeOverrideKey('riyadh', 'restaurant-chimney-cleaning')]: riyadhChimneyCleaning,

    // ─── Riyadh: Pest Control (10/10) ✓ ───
    [makeOverrideKey('riyadh', 'pest-control')]: riyadhPestControl,
    [makeOverrideKey('riyadh', 'pesticide-spraying')]: riyadhPesticideSpraying,
    [makeOverrideKey('riyadh', 'insects-spraying')]: riyadhInsectsSpraying,
    [makeOverrideKey('riyadh', 'termite-control')]: riyadhTermiteControl,
    [makeOverrideKey('riyadh', 'cockroach-control')]: riyadhCockroachControl,
    [makeOverrideKey('riyadh', 'bedbugs-control')]: riyadhBedbugsControl,
    [makeOverrideKey('riyadh', 'rodent-control')]: riyadhRodentControl,
    [makeOverrideKey('riyadh', 'ants-control')]: riyadhAntsControl,
    [makeOverrideKey('riyadh', 'bird-control')]: riyadhBirdControl,
    [makeOverrideKey('riyadh', 'snakes-control')]: riyadhSnakesControl,

    // ─── Riyadh: Leak Detection (3/3) ✓ ───
    [makeOverrideKey('riyadh', 'water-leak-detection')]: riyadhWaterLeakDetection,
    [makeOverrideKey('riyadh', 'tank-leak-detection')]: riyadhTankLeakDetection,
    [makeOverrideKey('riyadh', 'bathroom-leak-detection')]: riyadhBathroomLeakDetection,

    // ─── Riyadh: Insulation (5/5) ✓ ───
    [makeOverrideKey('riyadh', 'roof-insulation')]: riyadhRoofInsulation,
    [makeOverrideKey('riyadh', 'tank-insulation')]: riyadhTankInsulation,
    [makeOverrideKey('riyadh', 'foam-insulation')]: riyadhFoamInsulation,
    [makeOverrideKey('riyadh', 'water-insulation')]: riyadhWaterInsulation,
    [makeOverrideKey('riyadh', 'thermal-insulation')]: riyadhThermalInsulation,

    // ─── Riyadh: Sewage (2/2) ✓ ───
    [makeOverrideKey('riyadh', 'sewage-unblocking')]: riyadhSewageUnblocking,
    [makeOverrideKey('riyadh', 'sewage-suction')]: riyadhSewageSuction,
};

// ============================================
// INTERNAL API (used by resolver.ts)
// ============================================

export function getPageOverride(
    citySlug: string,
    serviceSlug: string
): PageOverride | undefined {
    const key = makeOverrideKey(citySlug, serviceSlug);
    return PAGE_OVERRIDES[key] ?? undefined;
}

export function hasPageOverride(
    citySlug: string,
    serviceSlug: string
): boolean {
    return makeOverrideKey(citySlug, serviceSlug) in PAGE_OVERRIDES;
}

/**
 * Returns all override keys currently registered.
 */
export function getOverriddenPages(): string[] {
    return Object.keys(PAGE_OVERRIDES);
}

// Total override count for debugging
export const OVERRIDE_COUNT = Object.keys(PAGE_OVERRIDES).length;
