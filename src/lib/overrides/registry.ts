// ============================================
// Override Registry — 24 مدينة × 50 خدمة = 1,200 صفحة
// يربط كل مفتاح صفحة (city-slug::service-slug) بملف Override
// ============================================

import type { PageOverride } from './types';

type OverrideKey = `${string}::${string}`;

function makeOverrideKey(citySlug: string, serviceSlug: string): OverrideKey {
    return `${citySlug}::${serviceSlug}`;
}

// ═══ CENTRAL REGION ═══

// ─── RIYADH (50) ───
import { override as riyadhFurnitureMoving } from './pages/riyadh/furniture-moving';
import { override as riyadhFurnitureStorage } from './pages/riyadh/furniture-storage';
import { override as riyadhDyna } from './pages/riyadh/dyna';
import { override as riyadhMovingOut } from './pages/riyadh/moving-out';
import { override as riyadhDabab } from './pages/riyadh/dabab';
import { override as riyadhCleaning } from './pages/riyadh/cleaning';
import { override as riyadhTanksCleaning } from './pages/riyadh/tanks-cleaning';
import { override as riyadhSofaCleaning } from './pages/riyadh/sofa-cleaning';
import { override as riyadhCarpetCleaning } from './pages/riyadh/carpet-cleaning';
import { override as riyadhSteamCleaning } from './pages/riyadh/steam-cleaning';
import { override as riyadhSanitization } from './pages/riyadh/sanitization';
import { override as riyadhAirConditionerCleaning } from './pages/riyadh/air-conditioner-cleaning';
import { override as riyadhMattressCleaning } from './pages/riyadh/mattress-cleaning';
import { override as riyadhSwimmingPoolCleaning } from './pages/riyadh/swimming-pool-cleaning';
import { override as riyadhKitchenCleaning } from './pages/riyadh/kitchen-cleaning';
import { override as riyadhGlassFacadesCleaning } from './pages/riyadh/glass-facades-cleaning';
import { override as riyadhFloorCleaning } from './pages/riyadh/floor-cleaning';
import { override as riyadhFloorPolishing } from './pages/riyadh/floor-polishing';
import { override as riyadhMarblePolishing } from './pages/riyadh/marble-polishing';
import { override as riyadhVillasCleaning } from './pages/riyadh/villas-cleaning';
import { override as riyadhApartmentsCleaning } from './pages/riyadh/apartments-cleaning';
import { override as riyadhPalacesCleaning } from './pages/riyadh/palaces-cleaning';
import { override as riyadhShopsCleaning } from './pages/riyadh/shops-cleaning';
import { override as riyadhOfficeCleaning } from './pages/riyadh/office-cleaning';
import { override as riyadhFurnitureCleaning } from './pages/riyadh/furniture-cleaning';
import { override as riyadhAutoCleaning } from './pages/riyadh/auto-cleaning';
import { override as riyadhOvenCleaning } from './pages/riyadh/oven-cleaning';
import { override as riyadhCouncilsCleaning } from './pages/riyadh/councils-cleaning';
import { override as riyadhHourlyCleaning } from './pages/riyadh/hourly-cleaning';
import { override as riyadhRestaurantChimneyCleaning } from './pages/riyadh/restaurant-chimney-cleaning';
import { override as riyadhPestControl } from './pages/riyadh/pest-control';
import { override as riyadhPesticideSpraying } from './pages/riyadh/pesticide-spraying';
import { override as riyadhInsectsSpraying } from './pages/riyadh/insects-spraying';
import { override as riyadhTermiteControl } from './pages/riyadh/termite-control';
import { override as riyadhCockroachControl } from './pages/riyadh/cockroach-control';
import { override as riyadhBedbugsControl } from './pages/riyadh/bedbugs-control';
import { override as riyadhRodentControl } from './pages/riyadh/rodent-control';
import { override as riyadhAntsControl } from './pages/riyadh/ants-control';
import { override as riyadhBirdControl } from './pages/riyadh/bird-control';
import { override as riyadhSnakesControl } from './pages/riyadh/snakes-control';
import { override as riyadhWaterLeakDetection } from './pages/riyadh/water-leak-detection';
import { override as riyadhTankLeakDetection } from './pages/riyadh/tank-leak-detection';
import { override as riyadhBathroomLeakDetection } from './pages/riyadh/bathroom-leak-detection';
import { override as riyadhRoofInsulation } from './pages/riyadh/roof-insulation';
import { override as riyadhTankInsulation } from './pages/riyadh/tank-insulation';
import { override as riyadhFoamInsulation } from './pages/riyadh/foam-insulation';
import { override as riyadhWaterInsulation } from './pages/riyadh/water-insulation';
import { override as riyadhThermalInsulation } from './pages/riyadh/thermal-insulation';
import { override as riyadhSewageUnblocking } from './pages/riyadh/sewage-unblocking';
import { override as riyadhSewageSuction } from './pages/riyadh/sewage-suction';
import { override as riyadhIntercityMoving } from './pages/riyadh/intercity-moving';
import { override as riyadhInternationalMoving } from './pages/riyadh/international-moving';
import { override as riyadhHeavyEquipmentMoving } from './pages/riyadh/heavy-equipment-moving';
import { override as riyadhVehicleTransport } from './pages/riyadh/vehicle-transport';
import { override as riyadhFurniturePackaging } from './pages/riyadh/furniture-packaging';
import { override as riyadhHouseCleaning } from './pages/riyadh/house-cleaning';
import { override as riyadhDeepCleaning } from './pages/riyadh/deep-cleaning';
import { override as riyadhCommercialCleaning } from './pages/riyadh/commercial-cleaning';
import { override as riyadhPostConstructionCleaning } from './pages/riyadh/post-construction-cleaning';
import { override as riyadhSterilization } from './pages/riyadh/sterilization';
import { override as riyadhLandscaping } from './pages/riyadh/landscaping';
import { override as riyadhFumigation } from './pages/riyadh/fumigation';
import { override as riyadhAgriculturalSpraying } from './pages/riyadh/agricultural-spraying';
import { override as riyadhPlumbing } from './pages/riyadh/plumbing';
import { override as riyadhEpoxyInsulation } from './pages/riyadh/epoxy-insulation';
import { override as riyadhSoundInsulation } from './pages/riyadh/sound-insulation';
import { override as riyadhInsulation } from './pages/riyadh/insulation';
import { override as riyadhLeakDetection } from './pages/riyadh/leak-detection';
import { override as riyadhDrainCleaning } from './pages/riyadh/drain-cleaning';
import { override as riyadhTankMaintenance } from './pages/riyadh/tank-maintenance';
import { override as riyadhBuildingInsulation } from './pages/riyadh/building-insulation';

// ─── AL-KHARJ (50) ───
import { override as alKharjFurnitureMoving } from './pages/al-kharj/furniture-moving';
import { override as alKharjFurnitureStorage } from './pages/al-kharj/furniture-storage';
import { override as alKharjDyna } from './pages/al-kharj/dyna';
import { override as alKharjDabab } from './pages/al-kharj/dabab';
import { override as alKharjCleaning } from './pages/al-kharj/cleaning';
import { override as alKharjTanksCleaning } from './pages/al-kharj/tanks-cleaning';
import { override as alKharjSofaCleaning } from './pages/al-kharj/sofa-cleaning';
import { override as alKharjCarpetCleaning } from './pages/al-kharj/carpet-cleaning';
import { override as alKharjSteamCleaning } from './pages/al-kharj/steam-cleaning';
import { override as alKharjAirConditionerCleaning } from './pages/al-kharj/air-conditioner-cleaning';
import { override as alKharjSwimmingPoolCleaning } from './pages/al-kharj/swimming-pool-cleaning';
import { override as alKharjGlassFacadesCleaning } from './pages/al-kharj/glass-facades-cleaning';
import { override as alKharjMarblePolishing } from './pages/al-kharj/marble-polishing';
import { override as alKharjVillasCleaning } from './pages/al-kharj/villas-cleaning';
import { override as alKharjApartmentsCleaning } from './pages/al-kharj/apartments-cleaning';
import { override as alKharjOfficeCleaning } from './pages/al-kharj/office-cleaning';
import { override as alKharjFurnitureCleaning } from './pages/al-kharj/furniture-cleaning';
import { override as alKharjAutoCleaning } from './pages/al-kharj/auto-cleaning';
import { override as alKharjOvenCleaning } from './pages/al-kharj/oven-cleaning';
import { override as alKharjCouncilsCleaning } from './pages/al-kharj/councils-cleaning';
import { override as alKharjHourlyCleaning } from './pages/al-kharj/hourly-cleaning';
import { override as alKharjRestaurantChimneyCleaning } from './pages/al-kharj/restaurant-chimney-cleaning';
import { override as alKharjPestControl } from './pages/al-kharj/pest-control';
import { override as alKharjPesticideSpraying } from './pages/al-kharj/pesticide-spraying';
import { override as alKharjTermiteControl } from './pages/al-kharj/termite-control';
import { override as alKharjBedbugsControl } from './pages/al-kharj/bedbugs-control';
import { override as alKharjBirdControl } from './pages/al-kharj/bird-control';
import { override as alKharjWaterLeakDetection } from './pages/al-kharj/water-leak-detection';
import { override as alKharjTankLeakDetection } from './pages/al-kharj/tank-leak-detection';
import { override as alKharjBathroomLeakDetection } from './pages/al-kharj/bathroom-leak-detection';
import { override as alKharjRoofInsulation } from './pages/al-kharj/roof-insulation';
import { override as alKharjTankInsulation } from './pages/al-kharj/tank-insulation';
import { override as alKharjFoamInsulation } from './pages/al-kharj/foam-insulation';
import { override as alKharjWaterInsulation } from './pages/al-kharj/water-insulation';
import { override as alKharjThermalInsulation } from './pages/al-kharj/thermal-insulation';
import { override as alKharjSewageUnblocking } from './pages/al-kharj/sewage-unblocking';
import { override as alKharjSewageSuction } from './pages/al-kharj/sewage-suction';

// ─── QASSIM (50) ───
import { override as qassimFurnitureMoving } from './pages/qassim/furniture-moving';
import { override as qassimFurnitureStorage } from './pages/qassim/furniture-storage';
import { override as qassimDyna } from './pages/qassim/dyna';
import { override as qassimDabab } from './pages/qassim/dabab';
import { override as qassimCleaning } from './pages/qassim/cleaning';
import { override as qassimTanksCleaning } from './pages/qassim/tanks-cleaning';
import { override as qassimSofaCleaning } from './pages/qassim/sofa-cleaning';
import { override as qassimCarpetCleaning } from './pages/qassim/carpet-cleaning';
import { override as qassimSteamCleaning } from './pages/qassim/steam-cleaning';
import { override as qassimAirConditionerCleaning } from './pages/qassim/air-conditioner-cleaning';
import { override as qassimSwimmingPoolCleaning } from './pages/qassim/swimming-pool-cleaning';
import { override as qassimGlassFacadesCleaning } from './pages/qassim/glass-facades-cleaning';
import { override as qassimMarblePolishing } from './pages/qassim/marble-polishing';
import { override as qassimVillasCleaning } from './pages/qassim/villas-cleaning';
import { override as qassimApartmentsCleaning } from './pages/qassim/apartments-cleaning';
import { override as qassimOfficeCleaning } from './pages/qassim/office-cleaning';
import { override as qassimFurnitureCleaning } from './pages/qassim/furniture-cleaning';
import { override as qassimAutoCleaning } from './pages/qassim/auto-cleaning';
import { override as qassimOvenCleaning } from './pages/qassim/oven-cleaning';
import { override as qassimCouncilsCleaning } from './pages/qassim/councils-cleaning';
import { override as qassimHourlyCleaning } from './pages/qassim/hourly-cleaning';
import { override as qassimRestaurantChimneyCleaning } from './pages/qassim/restaurant-chimney-cleaning';
import { override as qassimPestControl } from './pages/qassim/pest-control';
import { override as qassimPesticideSpraying } from './pages/qassim/pesticide-spraying';
import { override as qassimTermiteControl } from './pages/qassim/termite-control';
import { override as qassimBedbugsControl } from './pages/qassim/bedbugs-control';
import { override as qassimBirdControl } from './pages/qassim/bird-control';
import { override as qassimWaterLeakDetection } from './pages/qassim/water-leak-detection';
import { override as qassimTankLeakDetection } from './pages/qassim/tank-leak-detection';
import { override as qassimBathroomLeakDetection } from './pages/qassim/bathroom-leak-detection';
import { override as qassimRoofInsulation } from './pages/qassim/roof-insulation';
import { override as qassimTankInsulation } from './pages/qassim/tank-insulation';
import { override as qassimFoamInsulation } from './pages/qassim/foam-insulation';
import { override as qassimWaterInsulation } from './pages/qassim/water-insulation';
import { override as qassimThermalInsulation } from './pages/qassim/thermal-insulation';
import { override as qassimSewageUnblocking } from './pages/qassim/sewage-unblocking';
import { override as qassimSewageSuction } from './pages/qassim/sewage-suction';

// ─── BURAIDAH (50) ───
import { override as buraidahFurnitureMoving } from './pages/buraidah/furniture-moving';
import { override as buraidahFurnitureStorage } from './pages/buraidah/furniture-storage';
import { override as buraidahDyna } from './pages/buraidah/dyna';
import { override as buraidahDabab } from './pages/buraidah/dabab';
import { override as buraidahCleaning } from './pages/buraidah/cleaning';
import { override as buraidahTanksCleaning } from './pages/buraidah/tanks-cleaning';
import { override as buraidahSofaCleaning } from './pages/buraidah/sofa-cleaning';
import { override as buraidahCarpetCleaning } from './pages/buraidah/carpet-cleaning';
import { override as buraidahSteamCleaning } from './pages/buraidah/steam-cleaning';
import { override as buraidahAirConditionerCleaning } from './pages/buraidah/air-conditioner-cleaning';
import { override as buraidahSwimmingPoolCleaning } from './pages/buraidah/swimming-pool-cleaning';
import { override as buraidahGlassFacadesCleaning } from './pages/buraidah/glass-facades-cleaning';
import { override as buraidahMarblePolishing } from './pages/buraidah/marble-polishing';
import { override as buraidahVillasCleaning } from './pages/buraidah/villas-cleaning';
import { override as buraidahApartmentsCleaning } from './pages/buraidah/apartments-cleaning';
import { override as buraidahOfficeCleaning } from './pages/buraidah/office-cleaning';
import { override as buraidahFurnitureCleaning } from './pages/buraidah/furniture-cleaning';
import { override as buraidahAutoCleaning } from './pages/buraidah/auto-cleaning';
import { override as buraidahOvenCleaning } from './pages/buraidah/oven-cleaning';
import { override as buraidahCouncilsCleaning } from './pages/buraidah/councils-cleaning';
import { override as buraidahHourlyCleaning } from './pages/buraidah/hourly-cleaning';
import { override as buraidahRestaurantChimneyCleaning } from './pages/buraidah/restaurant-chimney-cleaning';
import { override as buraidahPestControl } from './pages/buraidah/pest-control';
import { override as buraidahPesticideSpraying } from './pages/buraidah/pesticide-spraying';
import { override as buraidahTermiteControl } from './pages/buraidah/termite-control';
import { override as buraidahBedbugsControl } from './pages/buraidah/bedbugs-control';
import { override as buraidahBirdControl } from './pages/buraidah/bird-control';
import { override as buraidahWaterLeakDetection } from './pages/buraidah/water-leak-detection';
import { override as buraidahTankLeakDetection } from './pages/buraidah/tank-leak-detection';
import { override as buraidahBathroomLeakDetection } from './pages/buraidah/bathroom-leak-detection';
import { override as buraidahRoofInsulation } from './pages/buraidah/roof-insulation';
import { override as buraidahTankInsulation } from './pages/buraidah/tank-insulation';
import { override as buraidahFoamInsulation } from './pages/buraidah/foam-insulation';
import { override as buraidahWaterInsulation } from './pages/buraidah/water-insulation';
import { override as buraidahThermalInsulation } from './pages/buraidah/thermal-insulation';
import { override as buraidahSewageUnblocking } from './pages/buraidah/sewage-unblocking';
import { override as buraidahSewageSuction } from './pages/buraidah/sewage-suction';

// ─── ONIZAH (50) ───
import { override as onizahFurnitureMoving } from './pages/onizah/furniture-moving';
import { override as onizahFurnitureStorage } from './pages/onizah/furniture-storage';
import { override as onizahDyna } from './pages/onizah/dyna';
import { override as onizahDabab } from './pages/onizah/dabab';
import { override as onizahCleaning } from './pages/onizah/cleaning';
import { override as onizahTanksCleaning } from './pages/onizah/tanks-cleaning';
import { override as onizahSofaCleaning } from './pages/onizah/sofa-cleaning';
import { override as onizahCarpetCleaning } from './pages/onizah/carpet-cleaning';
import { override as onizahSteamCleaning } from './pages/onizah/steam-cleaning';
import { override as onizahAirConditionerCleaning } from './pages/onizah/air-conditioner-cleaning';
import { override as onizahSwimmingPoolCleaning } from './pages/onizah/swimming-pool-cleaning';
import { override as onizahGlassFacadesCleaning } from './pages/onizah/glass-facades-cleaning';
import { override as onizahMarblePolishing } from './pages/onizah/marble-polishing';
import { override as onizahVillasCleaning } from './pages/onizah/villas-cleaning';
import { override as onizahApartmentsCleaning } from './pages/onizah/apartments-cleaning';
import { override as onizahOfficeCleaning } from './pages/onizah/office-cleaning';
import { override as onizahFurnitureCleaning } from './pages/onizah/furniture-cleaning';
import { override as onizahAutoCleaning } from './pages/onizah/auto-cleaning';
import { override as onizahOvenCleaning } from './pages/onizah/oven-cleaning';
import { override as onizahCouncilsCleaning } from './pages/onizah/councils-cleaning';
import { override as onizahHourlyCleaning } from './pages/onizah/hourly-cleaning';
import { override as onizahRestaurantChimneyCleaning } from './pages/onizah/restaurant-chimney-cleaning';
import { override as onizahPestControl } from './pages/onizah/pest-control';
import { override as onizahPesticideSpraying } from './pages/onizah/pesticide-spraying';
import { override as onizahTermiteControl } from './pages/onizah/termite-control';
import { override as onizahBedbugsControl } from './pages/onizah/bedbugs-control';
import { override as onizahBirdControl } from './pages/onizah/bird-control';
import { override as onizahWaterLeakDetection } from './pages/onizah/water-leak-detection';
import { override as onizahTankLeakDetection } from './pages/onizah/tank-leak-detection';
import { override as onizahBathroomLeakDetection } from './pages/onizah/bathroom-leak-detection';
import { override as onizahRoofInsulation } from './pages/onizah/roof-insulation';
import { override as onizahTankInsulation } from './pages/onizah/tank-insulation';
import { override as onizahFoamInsulation } from './pages/onizah/foam-insulation';
import { override as onizahWaterInsulation } from './pages/onizah/water-insulation';
import { override as onizahThermalInsulation } from './pages/onizah/thermal-insulation';
import { override as onizahSewageUnblocking } from './pages/onizah/sewage-unblocking';
import { override as onizahSewageSuction } from './pages/onizah/sewage-suction';

// ─── AR-RASS (2) ───
import { override as arRassWaterLeakDetection } from './pages/ar-rass/water-leak-detection';
import { override as arRassRoofInsulation } from './pages/ar-rass/roof-insulation';

// ═══ WESTERN REGION ═══

// ─── JEDDAH (50) ───
import { override as jeddahFurnitureMoving } from './pages/jeddah/furniture-moving';
import { override as jeddahFurnitureStorage } from './pages/jeddah/furniture-storage';
import { override as jeddahDyna } from './pages/jeddah/dyna';
import { override as jeddahMovingOut } from './pages/jeddah/moving-out';
import { override as jeddahDabab } from './pages/jeddah/dabab';
import { override as jeddahCleaning } from './pages/jeddah/cleaning';
import { override as jeddahTanksCleaning } from './pages/jeddah/tanks-cleaning';
import { override as jeddahSofaCleaning } from './pages/jeddah/sofa-cleaning';
import { override as jeddahCarpetCleaning } from './pages/jeddah/carpet-cleaning';
import { override as jeddahSteamCleaning } from './pages/jeddah/steam-cleaning';
import { override as jeddahSanitization } from './pages/jeddah/sanitization';
import { override as jeddahAirConditionerCleaning } from './pages/jeddah/air-conditioner-cleaning';
import { override as jeddahMattressCleaning } from './pages/jeddah/mattress-cleaning';
import { override as jeddahSwimmingPoolCleaning } from './pages/jeddah/swimming-pool-cleaning';
import { override as jeddahKitchenCleaning } from './pages/jeddah/kitchen-cleaning';
import { override as jeddahGlassFacadesCleaning } from './pages/jeddah/glass-facades-cleaning';
import { override as jeddahFloorCleaning } from './pages/jeddah/floor-cleaning';
import { override as jeddahFloorPolishing } from './pages/jeddah/floor-polishing';
import { override as jeddahMarblePolishing } from './pages/jeddah/marble-polishing';
import { override as jeddahVillasCleaning } from './pages/jeddah/villas-cleaning';
import { override as jeddahApartmentsCleaning } from './pages/jeddah/apartments-cleaning';
import { override as jeddahPalacesCleaning } from './pages/jeddah/palaces-cleaning';
import { override as jeddahShopsCleaning } from './pages/jeddah/shops-cleaning';
import { override as jeddahOfficeCleaning } from './pages/jeddah/office-cleaning';
import { override as jeddahFurnitureCleaning } from './pages/jeddah/furniture-cleaning';
import { override as jeddahAutoCleaning } from './pages/jeddah/auto-cleaning';
import { override as jeddahOvenCleaning } from './pages/jeddah/oven-cleaning';
import { override as jeddahCouncilsCleaning } from './pages/jeddah/councils-cleaning';
import { override as jeddahHourlyCleaning } from './pages/jeddah/hourly-cleaning';
import { override as jeddahRestaurantChimneyCleaning } from './pages/jeddah/restaurant-chimney-cleaning';
import { override as jeddahPestControl } from './pages/jeddah/pest-control';
import { override as jeddahPesticideSpraying } from './pages/jeddah/pesticide-spraying';
import { override as jeddahInsectsSpraying } from './pages/jeddah/insects-spraying';
import { override as jeddahTermiteControl } from './pages/jeddah/termite-control';
import { override as jeddahCockroachControl } from './pages/jeddah/cockroach-control';
import { override as jeddahBedbugsControl } from './pages/jeddah/bedbugs-control';
import { override as jeddahRodentControl } from './pages/jeddah/rodent-control';
import { override as jeddahAntsControl } from './pages/jeddah/ants-control';
import { override as jeddahBirdControl } from './pages/jeddah/bird-control';
import { override as jeddahSnakesControl } from './pages/jeddah/snakes-control';
import { override as jeddahWaterLeakDetection } from './pages/jeddah/water-leak-detection';
import { override as jeddahTankLeakDetection } from './pages/jeddah/tank-leak-detection';
import { override as jeddahBathroomLeakDetection } from './pages/jeddah/bathroom-leak-detection';
import { override as jeddahRoofInsulation } from './pages/jeddah/roof-insulation';
import { override as jeddahTankInsulation } from './pages/jeddah/tank-insulation';
import { override as jeddahFoamInsulation } from './pages/jeddah/foam-insulation';
import { override as jeddahWaterInsulation } from './pages/jeddah/water-insulation';
import { override as jeddahThermalInsulation } from './pages/jeddah/thermal-insulation';
import { override as jeddahSewageUnblocking } from './pages/jeddah/sewage-unblocking';
import { override as jeddahSewageSuction } from './pages/jeddah/sewage-suction';

// ─── MAKKAH (50) ───
import { override as makkahFurnitureMoving } from './pages/makkah/furniture-moving';
import { override as makkahFurnitureStorage } from './pages/makkah/furniture-storage';
import { override as makkahDyna } from './pages/makkah/dyna';
import { override as makkahDabab } from './pages/makkah/dabab';
import { override as makkahCleaning } from './pages/makkah/cleaning';
import { override as makkahTanksCleaning } from './pages/makkah/tanks-cleaning';
import { override as makkahSofaCleaning } from './pages/makkah/sofa-cleaning';
import { override as makkahCarpetCleaning } from './pages/makkah/carpet-cleaning';
import { override as makkahSteamCleaning } from './pages/makkah/steam-cleaning';
import { override as makkahAirConditionerCleaning } from './pages/makkah/air-conditioner-cleaning';
import { override as makkahSwimmingPoolCleaning } from './pages/makkah/swimming-pool-cleaning';
import { override as makkahGlassFacadesCleaning } from './pages/makkah/glass-facades-cleaning';
import { override as makkahMarblePolishing } from './pages/makkah/marble-polishing';
import { override as makkahVillasCleaning } from './pages/makkah/villas-cleaning';
import { override as makkahApartmentsCleaning } from './pages/makkah/apartments-cleaning';
import { override as makkahOfficeCleaning } from './pages/makkah/office-cleaning';
import { override as makkahFurnitureCleaning } from './pages/makkah/furniture-cleaning';
import { override as makkahAutoCleaning } from './pages/makkah/auto-cleaning';
import { override as makkahOvenCleaning } from './pages/makkah/oven-cleaning';
import { override as makkahCouncilsCleaning } from './pages/makkah/councils-cleaning';
import { override as makkahHourlyCleaning } from './pages/makkah/hourly-cleaning';
import { override as makkahRestaurantChimneyCleaning } from './pages/makkah/restaurant-chimney-cleaning';
import { override as makkahPestControl } from './pages/makkah/pest-control';
import { override as makkahPesticideSpraying } from './pages/makkah/pesticide-spraying';
import { override as makkahTermiteControl } from './pages/makkah/termite-control';
import { override as makkahBedbugsControl } from './pages/makkah/bedbugs-control';
import { override as makkahBirdControl } from './pages/makkah/bird-control';
import { override as makkahWaterLeakDetection } from './pages/makkah/water-leak-detection';
import { override as makkahTankLeakDetection } from './pages/makkah/tank-leak-detection';
import { override as makkahBathroomLeakDetection } from './pages/makkah/bathroom-leak-detection';
import { override as makkahRoofInsulation } from './pages/makkah/roof-insulation';
import { override as makkahTankInsulation } from './pages/makkah/tank-insulation';
import { override as makkahFoamInsulation } from './pages/makkah/foam-insulation';
import { override as makkahWaterInsulation } from './pages/makkah/water-insulation';
import { override as makkahThermalInsulation } from './pages/makkah/thermal-insulation';
import { override as makkahSewageUnblocking } from './pages/makkah/sewage-unblocking';
import { override as makkahSewageSuction } from './pages/makkah/sewage-suction';
import { override as makkahEpoxyCoating } from './pages/makkah/epoxy-coating';
import { override as makkahAcMaintenance } from './pages/makkah/ac-maintenance';
import { override as makkahAcInstallation } from './pages/makkah/ac-installation';

// ─── MADINAH (50) ───
import { override as madinahFurnitureMoving } from './pages/madinah/furniture-moving';
import { override as madinahFurnitureStorage } from './pages/madinah/furniture-storage';
import { override as madinahDyna } from './pages/madinah/dyna';
import { override as madinahDabab } from './pages/madinah/dabab';
import { override as madinahCleaning } from './pages/madinah/cleaning';
import { override as madinahTanksCleaning } from './pages/madinah/tanks-cleaning';
import { override as madinahSofaCleaning } from './pages/madinah/sofa-cleaning';
import { override as madinahCarpetCleaning } from './pages/madinah/carpet-cleaning';
import { override as madinahSteamCleaning } from './pages/madinah/steam-cleaning';
import { override as madinahAirConditionerCleaning } from './pages/madinah/air-conditioner-cleaning';
import { override as madinahSwimmingPoolCleaning } from './pages/madinah/swimming-pool-cleaning';
import { override as madinahGlassFacadesCleaning } from './pages/madinah/glass-facades-cleaning';
import { override as madinahMarblePolishing } from './pages/madinah/marble-polishing';
import { override as madinahVillasCleaning } from './pages/madinah/villas-cleaning';
import { override as madinahApartmentsCleaning } from './pages/madinah/apartments-cleaning';
import { override as madinahOfficeCleaning } from './pages/madinah/office-cleaning';
import { override as madinahFurnitureCleaning } from './pages/madinah/furniture-cleaning';
import { override as madinahAutoCleaning } from './pages/madinah/auto-cleaning';
import { override as madinahOvenCleaning } from './pages/madinah/oven-cleaning';
import { override as madinahCouncilsCleaning } from './pages/madinah/councils-cleaning';
import { override as madinahHourlyCleaning } from './pages/madinah/hourly-cleaning';
import { override as madinahRestaurantChimneyCleaning } from './pages/madinah/restaurant-chimney-cleaning';
import { override as madinahPestControl } from './pages/madinah/pest-control';
import { override as madinahPesticideSpraying } from './pages/madinah/pesticide-spraying';
import { override as madinahTermiteControl } from './pages/madinah/termite-control';
import { override as madinahBedbugsControl } from './pages/madinah/bedbugs-control';
import { override as madinahBirdControl } from './pages/madinah/bird-control';
import { override as madinahWaterLeakDetection } from './pages/madinah/water-leak-detection';
import { override as madinahTankLeakDetection } from './pages/madinah/tank-leak-detection';
import { override as madinahBathroomLeakDetection } from './pages/madinah/bathroom-leak-detection';
import { override as madinahRoofInsulation } from './pages/madinah/roof-insulation';
import { override as madinahTankInsulation } from './pages/madinah/tank-insulation';
import { override as madinahFoamInsulation } from './pages/madinah/foam-insulation';
import { override as madinahWaterInsulation } from './pages/madinah/water-insulation';
import { override as madinahThermalInsulation } from './pages/madinah/thermal-insulation';
import { override as madinahSewageUnblocking } from './pages/madinah/sewage-unblocking';
import { override as madinahSewageSuction } from './pages/madinah/sewage-suction';
import { override as madinahFloorPolishing } from './pages/madinah/floor-polishing';
import { override as madinahKitchenCleaning } from './pages/madinah/kitchen-cleaning';

// ─── TAIF (50) ───
import { override as taifFurnitureMoving } from './pages/taif/furniture-moving';
import { override as taifFurnitureStorage } from './pages/taif/furniture-storage';
import { override as taifDyna } from './pages/taif/dyna';
import { override as taifDabab } from './pages/taif/dabab';
import { override as taifCleaning } from './pages/taif/cleaning';
import { override as taifTanksCleaning } from './pages/taif/tanks-cleaning';
import { override as taifSofaCleaning } from './pages/taif/sofa-cleaning';
import { override as taifCarpetCleaning } from './pages/taif/carpet-cleaning';
import { override as taifSteamCleaning } from './pages/taif/steam-cleaning';
import { override as taifAirConditionerCleaning } from './pages/taif/air-conditioner-cleaning';
import { override as taifSwimmingPoolCleaning } from './pages/taif/swimming-pool-cleaning';
import { override as taifGlassFacadesCleaning } from './pages/taif/glass-facades-cleaning';
import { override as taifMarblePolishing } from './pages/taif/marble-polishing';
import { override as taifVillasCleaning } from './pages/taif/villas-cleaning';
import { override as taifApartmentsCleaning } from './pages/taif/apartments-cleaning';
import { override as taifOfficeCleaning } from './pages/taif/office-cleaning';
import { override as taifFurnitureCleaning } from './pages/taif/furniture-cleaning';
import { override as taifAutoCleaning } from './pages/taif/auto-cleaning';
import { override as taifOvenCleaning } from './pages/taif/oven-cleaning';
import { override as taifCouncilsCleaning } from './pages/taif/councils-cleaning';
import { override as taifHourlyCleaning } from './pages/taif/hourly-cleaning';
import { override as taifRestaurantChimneyCleaning } from './pages/taif/restaurant-chimney-cleaning';
import { override as taifPestControl } from './pages/taif/pest-control';
import { override as taifPesticideSpraying } from './pages/taif/pesticide-spraying';
import { override as taifTermiteControl } from './pages/taif/termite-control';
import { override as taifBedbugsControl } from './pages/taif/bedbugs-control';
import { override as taifBirdControl } from './pages/taif/bird-control';
import { override as taifWaterLeakDetection } from './pages/taif/water-leak-detection';
import { override as taifTankLeakDetection } from './pages/taif/tank-leak-detection';
import { override as taifBathroomLeakDetection } from './pages/taif/bathroom-leak-detection';
import { override as taifRoofInsulation } from './pages/taif/roof-insulation';
import { override as taifTankInsulation } from './pages/taif/tank-insulation';
import { override as taifFoamInsulation } from './pages/taif/foam-insulation';
import { override as taifWaterInsulation } from './pages/taif/water-insulation';
import { override as taifThermalInsulation } from './pages/taif/thermal-insulation';
import { override as taifSewageUnblocking } from './pages/taif/sewage-unblocking';
import { override as taifSewageSuction } from './pages/taif/sewage-suction';
import { override as taifFloorPolishing } from './pages/taif/floor-polishing';

// ─── YANBU (50) ───
import { override as yanbuFurnitureMoving } from './pages/yanbu/furniture-moving';
import { override as yanbuFurnitureStorage } from './pages/yanbu/furniture-storage';
import { override as yanbuDyna } from './pages/yanbu/dyna';
import { override as yanbuDabab } from './pages/yanbu/dabab';
import { override as yanbuCleaning } from './pages/yanbu/cleaning';
import { override as yanbuTanksCleaning } from './pages/yanbu/tanks-cleaning';
import { override as yanbuSofaCleaning } from './pages/yanbu/sofa-cleaning';
import { override as yanbuCarpetCleaning } from './pages/yanbu/carpet-cleaning';
import { override as yanbuSteamCleaning } from './pages/yanbu/steam-cleaning';
import { override as yanbuAirConditionerCleaning } from './pages/yanbu/air-conditioner-cleaning';
import { override as yanbuSwimmingPoolCleaning } from './pages/yanbu/swimming-pool-cleaning';
import { override as yanbuGlassFacadesCleaning } from './pages/yanbu/glass-facades-cleaning';
import { override as yanbuMarblePolishing } from './pages/yanbu/marble-polishing';
import { override as yanbuVillasCleaning } from './pages/yanbu/villas-cleaning';
import { override as yanbuApartmentsCleaning } from './pages/yanbu/apartments-cleaning';
import { override as yanbuOfficeCleaning } from './pages/yanbu/office-cleaning';
import { override as yanbuFurnitureCleaning } from './pages/yanbu/furniture-cleaning';
import { override as yanbuAutoCleaning } from './pages/yanbu/auto-cleaning';
import { override as yanbuOvenCleaning } from './pages/yanbu/oven-cleaning';
import { override as yanbuCouncilsCleaning } from './pages/yanbu/councils-cleaning';
import { override as yanbuHourlyCleaning } from './pages/yanbu/hourly-cleaning';
import { override as yanbuRestaurantChimneyCleaning } from './pages/yanbu/restaurant-chimney-cleaning';
import { override as yanbuPestControl } from './pages/yanbu/pest-control';
import { override as yanbuPesticideSpraying } from './pages/yanbu/pesticide-spraying';
import { override as yanbuTermiteControl } from './pages/yanbu/termite-control';
import { override as yanbuBedbugsControl } from './pages/yanbu/bedbugs-control';
import { override as yanbuBirdControl } from './pages/yanbu/bird-control';
import { override as yanbuWaterLeakDetection } from './pages/yanbu/water-leak-detection';
import { override as yanbuTankLeakDetection } from './pages/yanbu/tank-leak-detection';
import { override as yanbuBathroomLeakDetection } from './pages/yanbu/bathroom-leak-detection';
import { override as yanbuRoofInsulation } from './pages/yanbu/roof-insulation';
import { override as yanbuTankInsulation } from './pages/yanbu/tank-insulation';
import { override as yanbuFoamInsulation } from './pages/yanbu/foam-insulation';
import { override as yanbuWaterInsulation } from './pages/yanbu/water-insulation';
import { override as yanbuThermalInsulation } from './pages/yanbu/thermal-insulation';
import { override as yanbuSewageUnblocking } from './pages/yanbu/sewage-unblocking';
import { override as yanbuSewageSuction } from './pages/yanbu/sewage-suction';

// ═══ EASTERN REGION ═══

// ─── DAMMAM (50) ───
import { override as dammamFurnitureMoving } from './pages/dammam/furniture-moving';
import { override as dammamFurnitureStorage } from './pages/dammam/furniture-storage';
import { override as dammamDyna } from './pages/dammam/dyna';
import { override as dammamDabab } from './pages/dammam/dabab';
import { override as dammamCleaning } from './pages/dammam/cleaning';
import { override as dammamTanksCleaning } from './pages/dammam/tanks-cleaning';
import { override as dammamSofaCleaning } from './pages/dammam/sofa-cleaning';
import { override as dammamCarpetCleaning } from './pages/dammam/carpet-cleaning';
import { override as dammamSteamCleaning } from './pages/dammam/steam-cleaning';
import { override as dammamAirConditionerCleaning } from './pages/dammam/air-conditioner-cleaning';
import { override as dammamSwimmingPoolCleaning } from './pages/dammam/swimming-pool-cleaning';
import { override as dammamGlassFacadesCleaning } from './pages/dammam/glass-facades-cleaning';
import { override as dammamMarblePolishing } from './pages/dammam/marble-polishing';
import { override as dammamVillasCleaning } from './pages/dammam/villas-cleaning';
import { override as dammamApartmentsCleaning } from './pages/dammam/apartments-cleaning';
import { override as dammamOfficeCleaning } from './pages/dammam/office-cleaning';
import { override as dammamFurnitureCleaning } from './pages/dammam/furniture-cleaning';
import { override as dammamAutoCleaning } from './pages/dammam/auto-cleaning';
import { override as dammamOvenCleaning } from './pages/dammam/oven-cleaning';
import { override as dammamCouncilsCleaning } from './pages/dammam/councils-cleaning';
import { override as dammamHourlyCleaning } from './pages/dammam/hourly-cleaning';
import { override as dammamRestaurantChimneyCleaning } from './pages/dammam/restaurant-chimney-cleaning';
import { override as dammamPestControl } from './pages/dammam/pest-control';
import { override as dammamPesticideSpraying } from './pages/dammam/pesticide-spraying';
import { override as dammamTermiteControl } from './pages/dammam/termite-control';
import { override as dammamBedbugsControl } from './pages/dammam/bedbugs-control';
import { override as dammamBirdControl } from './pages/dammam/bird-control';
import { override as dammamWaterLeakDetection } from './pages/dammam/water-leak-detection';
import { override as dammamTankLeakDetection } from './pages/dammam/tank-leak-detection';
import { override as dammamBathroomLeakDetection } from './pages/dammam/bathroom-leak-detection';
import { override as dammamRoofInsulation } from './pages/dammam/roof-insulation';
import { override as dammamTankInsulation } from './pages/dammam/tank-insulation';
import { override as dammamFoamInsulation } from './pages/dammam/foam-insulation';
import { override as dammamWaterInsulation } from './pages/dammam/water-insulation';
import { override as dammamThermalInsulation } from './pages/dammam/thermal-insulation';
import { override as dammamSewageUnblocking } from './pages/dammam/sewage-unblocking';
import { override as dammamSewageSuction } from './pages/dammam/sewage-suction';

// ─── AL-KHOBAR (50) ───
import { override as alKhobarFurnitureMoving } from './pages/al-khobar/furniture-moving';
import { override as alKhobarFurnitureStorage } from './pages/al-khobar/furniture-storage';
import { override as alKhobarDyna } from './pages/al-khobar/dyna';
import { override as alKhobarDabab } from './pages/al-khobar/dabab';
import { override as alKhobarCleaning } from './pages/al-khobar/cleaning';
import { override as alKhobarTanksCleaning } from './pages/al-khobar/tanks-cleaning';
import { override as alKhobarSofaCleaning } from './pages/al-khobar/sofa-cleaning';
import { override as alKhobarCarpetCleaning } from './pages/al-khobar/carpet-cleaning';
import { override as alKhobarSteamCleaning } from './pages/al-khobar/steam-cleaning';
import { override as alKhobarAirConditionerCleaning } from './pages/al-khobar/air-conditioner-cleaning';
import { override as alKhobarSwimmingPoolCleaning } from './pages/al-khobar/swimming-pool-cleaning';
import { override as alKhobarGlassFacadesCleaning } from './pages/al-khobar/glass-facades-cleaning';
import { override as alKhobarMarblePolishing } from './pages/al-khobar/marble-polishing';
import { override as alKhobarVillasCleaning } from './pages/al-khobar/villas-cleaning';
import { override as alKhobarApartmentsCleaning } from './pages/al-khobar/apartments-cleaning';
import { override as alKhobarOfficeCleaning } from './pages/al-khobar/office-cleaning';
import { override as alKhobarFurnitureCleaning } from './pages/al-khobar/furniture-cleaning';
import { override as alKhobarAutoCleaning } from './pages/al-khobar/auto-cleaning';
import { override as alKhobarOvenCleaning } from './pages/al-khobar/oven-cleaning';
import { override as alKhobarCouncilsCleaning } from './pages/al-khobar/councils-cleaning';
import { override as alKhobarHourlyCleaning } from './pages/al-khobar/hourly-cleaning';
import { override as alKhobarRestaurantChimneyCleaning } from './pages/al-khobar/restaurant-chimney-cleaning';
import { override as alKhobarPestControl } from './pages/al-khobar/pest-control';
import { override as alKhobarPesticideSpraying } from './pages/al-khobar/pesticide-spraying';
import { override as alKhobarTermiteControl } from './pages/al-khobar/termite-control';
import { override as alKhobarBedbugsControl } from './pages/al-khobar/bedbugs-control';
import { override as alKhobarBirdControl } from './pages/al-khobar/bird-control';
import { override as alKhobarWaterLeakDetection } from './pages/al-khobar/water-leak-detection';
import { override as alKhobarTankLeakDetection } from './pages/al-khobar/tank-leak-detection';
import { override as alKhobarBathroomLeakDetection } from './pages/al-khobar/bathroom-leak-detection';
import { override as alKhobarRoofInsulation } from './pages/al-khobar/roof-insulation';
import { override as alKhobarTankInsulation } from './pages/al-khobar/tank-insulation';
import { override as alKhobarFoamInsulation } from './pages/al-khobar/foam-insulation';
import { override as alKhobarWaterInsulation } from './pages/al-khobar/water-insulation';
import { override as alKhobarThermalInsulation } from './pages/al-khobar/thermal-insulation';
import { override as alKhobarSewageUnblocking } from './pages/al-khobar/sewage-unblocking';
import { override as alKhobarSewageSuction } from './pages/al-khobar/sewage-suction';

// ─── DHAHRAN (50) ───
import { override as dhahranFurnitureMoving } from './pages/dhahran/furniture-moving';
import { override as dhahranFurnitureStorage } from './pages/dhahran/furniture-storage';
import { override as dhahranDyna } from './pages/dhahran/dyna';
import { override as dhahranDabab } from './pages/dhahran/dabab';
import { override as dhahranCleaning } from './pages/dhahran/cleaning';
import { override as dhahranTanksCleaning } from './pages/dhahran/tanks-cleaning';
import { override as dhahranSofaCleaning } from './pages/dhahran/sofa-cleaning';
import { override as dhahranCarpetCleaning } from './pages/dhahran/carpet-cleaning';
import { override as dhahranSteamCleaning } from './pages/dhahran/steam-cleaning';
import { override as dhahranAirConditionerCleaning } from './pages/dhahran/air-conditioner-cleaning';
import { override as dhahranSwimmingPoolCleaning } from './pages/dhahran/swimming-pool-cleaning';
import { override as dhahranGlassFacadesCleaning } from './pages/dhahran/glass-facades-cleaning';
import { override as dhahranMarblePolishing } from './pages/dhahran/marble-polishing';
import { override as dhahranVillasCleaning } from './pages/dhahran/villas-cleaning';
import { override as dhahranApartmentsCleaning } from './pages/dhahran/apartments-cleaning';
import { override as dhahranOfficeCleaning } from './pages/dhahran/office-cleaning';
import { override as dhahranFurnitureCleaning } from './pages/dhahran/furniture-cleaning';
import { override as dhahranAutoCleaning } from './pages/dhahran/auto-cleaning';
import { override as dhahranOvenCleaning } from './pages/dhahran/oven-cleaning';
import { override as dhahranCouncilsCleaning } from './pages/dhahran/councils-cleaning';
import { override as dhahranHourlyCleaning } from './pages/dhahran/hourly-cleaning';
import { override as dhahranRestaurantChimneyCleaning } from './pages/dhahran/restaurant-chimney-cleaning';
import { override as dhahranPestControl } from './pages/dhahran/pest-control';
import { override as dhahranPesticideSpraying } from './pages/dhahran/pesticide-spraying';
import { override as dhahranTermiteControl } from './pages/dhahran/termite-control';
import { override as dhahranBedbugsControl } from './pages/dhahran/bedbugs-control';
import { override as dhahranBirdControl } from './pages/dhahran/bird-control';
import { override as dhahranWaterLeakDetection } from './pages/dhahran/water-leak-detection';
import { override as dhahranTankLeakDetection } from './pages/dhahran/tank-leak-detection';
import { override as dhahranBathroomLeakDetection } from './pages/dhahran/bathroom-leak-detection';
import { override as dhahranRoofInsulation } from './pages/dhahran/roof-insulation';
import { override as dhahranTankInsulation } from './pages/dhahran/tank-insulation';
import { override as dhahranFoamInsulation } from './pages/dhahran/foam-insulation';
import { override as dhahranWaterInsulation } from './pages/dhahran/water-insulation';
import { override as dhahranThermalInsulation } from './pages/dhahran/thermal-insulation';
import { override as dhahranSewageUnblocking } from './pages/dhahran/sewage-unblocking';
import { override as dhahranSewageSuction } from './pages/dhahran/sewage-suction';

// ─── JUBAIL (50) ───
import { override as jubailFurnitureMoving } from './pages/jubail/furniture-moving';
import { override as jubailFurnitureStorage } from './pages/jubail/furniture-storage';
import { override as jubailDyna } from './pages/jubail/dyna';
import { override as jubailDabab } from './pages/jubail/dabab';
import { override as jubailCleaning } from './pages/jubail/cleaning';
import { override as jubailTanksCleaning } from './pages/jubail/tanks-cleaning';
import { override as jubailSofaCleaning } from './pages/jubail/sofa-cleaning';
import { override as jubailCarpetCleaning } from './pages/jubail/carpet-cleaning';
import { override as jubailSteamCleaning } from './pages/jubail/steam-cleaning';
import { override as jubailAirConditionerCleaning } from './pages/jubail/air-conditioner-cleaning';
import { override as jubailSwimmingPoolCleaning } from './pages/jubail/swimming-pool-cleaning';
import { override as jubailGlassFacadesCleaning } from './pages/jubail/glass-facades-cleaning';
import { override as jubailMarblePolishing } from './pages/jubail/marble-polishing';
import { override as jubailVillasCleaning } from './pages/jubail/villas-cleaning';
import { override as jubailApartmentsCleaning } from './pages/jubail/apartments-cleaning';
import { override as jubailOfficeCleaning } from './pages/jubail/office-cleaning';
import { override as jubailFurnitureCleaning } from './pages/jubail/furniture-cleaning';
import { override as jubailAutoCleaning } from './pages/jubail/auto-cleaning';
import { override as jubailOvenCleaning } from './pages/jubail/oven-cleaning';
import { override as jubailCouncilsCleaning } from './pages/jubail/councils-cleaning';
import { override as jubailHourlyCleaning } from './pages/jubail/hourly-cleaning';
import { override as jubailRestaurantChimneyCleaning } from './pages/jubail/restaurant-chimney-cleaning';
import { override as jubailPestControl } from './pages/jubail/pest-control';
import { override as jubailPesticideSpraying } from './pages/jubail/pesticide-spraying';
import { override as jubailTermiteControl } from './pages/jubail/termite-control';
import { override as jubailBedbugsControl } from './pages/jubail/bedbugs-control';
import { override as jubailBirdControl } from './pages/jubail/bird-control';
import { override as jubailWaterLeakDetection } from './pages/jubail/water-leak-detection';
import { override as jubailTankLeakDetection } from './pages/jubail/tank-leak-detection';
import { override as jubailBathroomLeakDetection } from './pages/jubail/bathroom-leak-detection';
import { override as jubailRoofInsulation } from './pages/jubail/roof-insulation';
import { override as jubailTankInsulation } from './pages/jubail/tank-insulation';
import { override as jubailFoamInsulation } from './pages/jubail/foam-insulation';
import { override as jubailWaterInsulation } from './pages/jubail/water-insulation';
import { override as jubailThermalInsulation } from './pages/jubail/thermal-insulation';
import { override as jubailSewageUnblocking } from './pages/jubail/sewage-unblocking';
import { override as jubailSewageSuction } from './pages/jubail/sewage-suction';

// ─── AL-AHSA (50) ───
import { override as alAhsaFurnitureMoving } from './pages/al-ahsa/furniture-moving';
import { override as alAhsaFurnitureStorage } from './pages/al-ahsa/furniture-storage';
import { override as alAhsaDyna } from './pages/al-ahsa/dyna';
import { override as alAhsaDabab } from './pages/al-ahsa/dabab';
import { override as alAhsaCleaning } from './pages/al-ahsa/cleaning';
import { override as alAhsaTanksCleaning } from './pages/al-ahsa/tanks-cleaning';
import { override as alAhsaSofaCleaning } from './pages/al-ahsa/sofa-cleaning';
import { override as alAhsaCarpetCleaning } from './pages/al-ahsa/carpet-cleaning';
import { override as alAhsaSteamCleaning } from './pages/al-ahsa/steam-cleaning';
import { override as alAhsaAirConditionerCleaning } from './pages/al-ahsa/air-conditioner-cleaning';
import { override as alAhsaSwimmingPoolCleaning } from './pages/al-ahsa/swimming-pool-cleaning';
import { override as alAhsaGlassFacadesCleaning } from './pages/al-ahsa/glass-facades-cleaning';
import { override as alAhsaMarblePolishing } from './pages/al-ahsa/marble-polishing';
import { override as alAhsaVillasCleaning } from './pages/al-ahsa/villas-cleaning';
import { override as alAhsaApartmentsCleaning } from './pages/al-ahsa/apartments-cleaning';
import { override as alAhsaOfficeCleaning } from './pages/al-ahsa/office-cleaning';
import { override as alAhsaFurnitureCleaning } from './pages/al-ahsa/furniture-cleaning';
import { override as alAhsaAutoCleaning } from './pages/al-ahsa/auto-cleaning';
import { override as alAhsaOvenCleaning } from './pages/al-ahsa/oven-cleaning';
import { override as alAhsaCouncilsCleaning } from './pages/al-ahsa/councils-cleaning';
import { override as alAhsaHourlyCleaning } from './pages/al-ahsa/hourly-cleaning';
import { override as alAhsaRestaurantChimneyCleaning } from './pages/al-ahsa/restaurant-chimney-cleaning';
import { override as alAhsaPestControl } from './pages/al-ahsa/pest-control';
import { override as alAhsaPesticideSpraying } from './pages/al-ahsa/pesticide-spraying';
import { override as alAhsaTermiteControl } from './pages/al-ahsa/termite-control';
import { override as alAhsaBedbugsControl } from './pages/al-ahsa/bedbugs-control';
import { override as alAhsaBirdControl } from './pages/al-ahsa/bird-control';
import { override as alAhsaWaterLeakDetection } from './pages/al-ahsa/water-leak-detection';
import { override as alAhsaTankLeakDetection } from './pages/al-ahsa/tank-leak-detection';
import { override as alAhsaBathroomLeakDetection } from './pages/al-ahsa/bathroom-leak-detection';
import { override as alAhsaRoofInsulation } from './pages/al-ahsa/roof-insulation';
import { override as alAhsaTankInsulation } from './pages/al-ahsa/tank-insulation';
import { override as alAhsaFoamInsulation } from './pages/al-ahsa/foam-insulation';
import { override as alAhsaWaterInsulation } from './pages/al-ahsa/water-insulation';
import { override as alAhsaThermalInsulation } from './pages/al-ahsa/thermal-insulation';
import { override as alAhsaSewageUnblocking } from './pages/al-ahsa/sewage-unblocking';
import { override as alAhsaSewageSuction } from './pages/al-ahsa/sewage-suction';

// ─── QATIF (50) ───
import { override as qatifFurnitureMoving } from './pages/qatif/furniture-moving';
import { override as qatifFurnitureStorage } from './pages/qatif/furniture-storage';
import { override as qatifDyna } from './pages/qatif/dyna';
import { override as qatifDabab } from './pages/qatif/dabab';
import { override as qatifCleaning } from './pages/qatif/cleaning';
import { override as qatifTanksCleaning } from './pages/qatif/tanks-cleaning';
import { override as qatifSofaCleaning } from './pages/qatif/sofa-cleaning';
import { override as qatifCarpetCleaning } from './pages/qatif/carpet-cleaning';
import { override as qatifSteamCleaning } from './pages/qatif/steam-cleaning';
import { override as qatifAirConditionerCleaning } from './pages/qatif/air-conditioner-cleaning';
import { override as qatifSwimmingPoolCleaning } from './pages/qatif/swimming-pool-cleaning';
import { override as qatifGlassFacadesCleaning } from './pages/qatif/glass-facades-cleaning';
import { override as qatifMarblePolishing } from './pages/qatif/marble-polishing';
import { override as qatifVillasCleaning } from './pages/qatif/villas-cleaning';
import { override as qatifApartmentsCleaning } from './pages/qatif/apartments-cleaning';
import { override as qatifOfficeCleaning } from './pages/qatif/office-cleaning';
import { override as qatifFurnitureCleaning } from './pages/qatif/furniture-cleaning';
import { override as qatifAutoCleaning } from './pages/qatif/auto-cleaning';
import { override as qatifOvenCleaning } from './pages/qatif/oven-cleaning';
import { override as qatifCouncilsCleaning } from './pages/qatif/councils-cleaning';
import { override as qatifHourlyCleaning } from './pages/qatif/hourly-cleaning';
import { override as qatifRestaurantChimneyCleaning } from './pages/qatif/restaurant-chimney-cleaning';
import { override as qatifPestControl } from './pages/qatif/pest-control';
import { override as qatifPesticideSpraying } from './pages/qatif/pesticide-spraying';
import { override as qatifTermiteControl } from './pages/qatif/termite-control';
import { override as qatifBedbugsControl } from './pages/qatif/bedbugs-control';
import { override as qatifBirdControl } from './pages/qatif/bird-control';
import { override as qatifWaterLeakDetection } from './pages/qatif/water-leak-detection';
import { override as qatifTankLeakDetection } from './pages/qatif/tank-leak-detection';
import { override as qatifBathroomLeakDetection } from './pages/qatif/bathroom-leak-detection';
import { override as qatifRoofInsulation } from './pages/qatif/roof-insulation';
import { override as qatifTankInsulation } from './pages/qatif/tank-insulation';
import { override as qatifFoamInsulation } from './pages/qatif/foam-insulation';
import { override as qatifWaterInsulation } from './pages/qatif/water-insulation';
import { override as qatifThermalInsulation } from './pages/qatif/thermal-insulation';
import { override as qatifSewageUnblocking } from './pages/qatif/sewage-unblocking';
import { override as qatifSewageSuction } from './pages/qatif/sewage-suction';

// ─── HAFR-ALBATIN (50) ───
import { override as hafrAlbatinFurnitureMoving } from './pages/hafr-albatin/furniture-moving';
import { override as hafrAlbatinFurnitureStorage } from './pages/hafr-albatin/furniture-storage';
import { override as hafrAlbatinDyna } from './pages/hafr-albatin/dyna';
import { override as hafrAlbatinDabab } from './pages/hafr-albatin/dabab';
import { override as hafrAlbatinCleaning } from './pages/hafr-albatin/cleaning';
import { override as hafrAlbatinTanksCleaning } from './pages/hafr-albatin/tanks-cleaning';
import { override as hafrAlbatinSofaCleaning } from './pages/hafr-albatin/sofa-cleaning';
import { override as hafrAlbatinCarpetCleaning } from './pages/hafr-albatin/carpet-cleaning';
import { override as hafrAlbatinSteamCleaning } from './pages/hafr-albatin/steam-cleaning';
import { override as hafrAlbatinAirConditionerCleaning } from './pages/hafr-albatin/air-conditioner-cleaning';
import { override as hafrAlbatinSwimmingPoolCleaning } from './pages/hafr-albatin/swimming-pool-cleaning';
import { override as hafrAlbatinGlassFacadesCleaning } from './pages/hafr-albatin/glass-facades-cleaning';
import { override as hafrAlbatinMarblePolishing } from './pages/hafr-albatin/marble-polishing';
import { override as hafrAlbatinVillasCleaning } from './pages/hafr-albatin/villas-cleaning';
import { override as hafrAlbatinApartmentsCleaning } from './pages/hafr-albatin/apartments-cleaning';
import { override as hafrAlbatinOfficeCleaning } from './pages/hafr-albatin/office-cleaning';
import { override as hafrAlbatinFurnitureCleaning } from './pages/hafr-albatin/furniture-cleaning';
import { override as hafrAlbatinAutoCleaning } from './pages/hafr-albatin/auto-cleaning';
import { override as hafrAlbatinOvenCleaning } from './pages/hafr-albatin/oven-cleaning';
import { override as hafrAlbatinCouncilsCleaning } from './pages/hafr-albatin/councils-cleaning';
import { override as hafrAlbatinHourlyCleaning } from './pages/hafr-albatin/hourly-cleaning';
import { override as hafrAlbatinRestaurantChimneyCleaning } from './pages/hafr-albatin/restaurant-chimney-cleaning';
import { override as hafrAlbatinPestControl } from './pages/hafr-albatin/pest-control';
import { override as hafrAlbatinPesticideSpraying } from './pages/hafr-albatin/pesticide-spraying';
import { override as hafrAlbatinTermiteControl } from './pages/hafr-albatin/termite-control';
import { override as hafrAlbatinBedbugsControl } from './pages/hafr-albatin/bedbugs-control';
import { override as hafrAlbatinBirdControl } from './pages/hafr-albatin/bird-control';
import { override as hafrAlbatinWaterLeakDetection } from './pages/hafr-albatin/water-leak-detection';
import { override as hafrAlbatinTankLeakDetection } from './pages/hafr-albatin/tank-leak-detection';
import { override as hafrAlbatinBathroomLeakDetection } from './pages/hafr-albatin/bathroom-leak-detection';
import { override as hafrAlbatinRoofInsulation } from './pages/hafr-albatin/roof-insulation';
import { override as hafrAlbatinTankInsulation } from './pages/hafr-albatin/tank-insulation';
import { override as hafrAlbatinFoamInsulation } from './pages/hafr-albatin/foam-insulation';
import { override as hafrAlbatinWaterInsulation } from './pages/hafr-albatin/water-insulation';
import { override as hafrAlbatinThermalInsulation } from './pages/hafr-albatin/thermal-insulation';
import { override as hafrAlbatinSewageUnblocking } from './pages/hafr-albatin/sewage-unblocking';
import { override as hafrAlbatinSewageSuction } from './pages/hafr-albatin/sewage-suction';

// ═══ NORTHERN REGION ═══

// ─── TABUK (50) ───
import { override as tabukFurnitureMoving } from './pages/tabuk/furniture-moving';
import { override as tabukFurnitureStorage } from './pages/tabuk/furniture-storage';
import { override as tabukDyna } from './pages/tabuk/dyna';
import { override as tabukDabab } from './pages/tabuk/dabab';
import { override as tabukCleaning } from './pages/tabuk/cleaning';
import { override as tabukTanksCleaning } from './pages/tabuk/tanks-cleaning';
import { override as tabukSofaCleaning } from './pages/tabuk/sofa-cleaning';
import { override as tabukCarpetCleaning } from './pages/tabuk/carpet-cleaning';
import { override as tabukSteamCleaning } from './pages/tabuk/steam-cleaning';
import { override as tabukAirConditionerCleaning } from './pages/tabuk/air-conditioner-cleaning';
import { override as tabukSwimmingPoolCleaning } from './pages/tabuk/swimming-pool-cleaning';
import { override as tabukGlassFacadesCleaning } from './pages/tabuk/glass-facades-cleaning';
import { override as tabukMarblePolishing } from './pages/tabuk/marble-polishing';
import { override as tabukVillasCleaning } from './pages/tabuk/villas-cleaning';
import { override as tabukApartmentsCleaning } from './pages/tabuk/apartments-cleaning';
import { override as tabukOfficeCleaning } from './pages/tabuk/office-cleaning';
import { override as tabukFurnitureCleaning } from './pages/tabuk/furniture-cleaning';
import { override as tabukAutoCleaning } from './pages/tabuk/auto-cleaning';
import { override as tabukOvenCleaning } from './pages/tabuk/oven-cleaning';
import { override as tabukCouncilsCleaning } from './pages/tabuk/councils-cleaning';
import { override as tabukHourlyCleaning } from './pages/tabuk/hourly-cleaning';
import { override as tabukRestaurantChimneyCleaning } from './pages/tabuk/restaurant-chimney-cleaning';
import { override as tabukPestControl } from './pages/tabuk/pest-control';
import { override as tabukPesticideSpraying } from './pages/tabuk/pesticide-spraying';
import { override as tabukTermiteControl } from './pages/tabuk/termite-control';
import { override as tabukBedbugsControl } from './pages/tabuk/bedbugs-control';
import { override as tabukBirdControl } from './pages/tabuk/bird-control';
import { override as tabukWaterLeakDetection } from './pages/tabuk/water-leak-detection';
import { override as tabukTankLeakDetection } from './pages/tabuk/tank-leak-detection';
import { override as tabukBathroomLeakDetection } from './pages/tabuk/bathroom-leak-detection';
import { override as tabukRoofInsulation } from './pages/tabuk/roof-insulation';
import { override as tabukTankInsulation } from './pages/tabuk/tank-insulation';
import { override as tabukFoamInsulation } from './pages/tabuk/foam-insulation';
import { override as tabukWaterInsulation } from './pages/tabuk/water-insulation';
import { override as tabukThermalInsulation } from './pages/tabuk/thermal-insulation';
import { override as tabukSewageUnblocking } from './pages/tabuk/sewage-unblocking';
import { override as tabukSewageSuction } from './pages/tabuk/sewage-suction';

// ─── HAIL (50) ───
import { override as hailFurnitureMoving } from './pages/hail/furniture-moving';
import { override as hailFurnitureStorage } from './pages/hail/furniture-storage';
import { override as hailDyna } from './pages/hail/dyna';
import { override as hailDabab } from './pages/hail/dabab';
import { override as hailCleaning } from './pages/hail/cleaning';
import { override as hailTanksCleaning } from './pages/hail/tanks-cleaning';
import { override as hailSofaCleaning } from './pages/hail/sofa-cleaning';
import { override as hailCarpetCleaning } from './pages/hail/carpet-cleaning';
import { override as hailSteamCleaning } from './pages/hail/steam-cleaning';
import { override as hailAirConditionerCleaning } from './pages/hail/air-conditioner-cleaning';
import { override as hailSwimmingPoolCleaning } from './pages/hail/swimming-pool-cleaning';
import { override as hailGlassFacadesCleaning } from './pages/hail/glass-facades-cleaning';
import { override as hailMarblePolishing } from './pages/hail/marble-polishing';
import { override as hailVillasCleaning } from './pages/hail/villas-cleaning';
import { override as hailApartmentsCleaning } from './pages/hail/apartments-cleaning';
import { override as hailOfficeCleaning } from './pages/hail/office-cleaning';
import { override as hailFurnitureCleaning } from './pages/hail/furniture-cleaning';
import { override as hailAutoCleaning } from './pages/hail/auto-cleaning';
import { override as hailOvenCleaning } from './pages/hail/oven-cleaning';
import { override as hailCouncilsCleaning } from './pages/hail/councils-cleaning';
import { override as hailHourlyCleaning } from './pages/hail/hourly-cleaning';
import { override as hailRestaurantChimneyCleaning } from './pages/hail/restaurant-chimney-cleaning';
import { override as hailPestControl } from './pages/hail/pest-control';
import { override as hailPesticideSpraying } from './pages/hail/pesticide-spraying';
import { override as hailTermiteControl } from './pages/hail/termite-control';
import { override as hailBedbugsControl } from './pages/hail/bedbugs-control';
import { override as hailBirdControl } from './pages/hail/bird-control';
import { override as hailWaterLeakDetection } from './pages/hail/water-leak-detection';
import { override as hailTankLeakDetection } from './pages/hail/tank-leak-detection';
import { override as hailBathroomLeakDetection } from './pages/hail/bathroom-leak-detection';
import { override as hailRoofInsulation } from './pages/hail/roof-insulation';
import { override as hailTankInsulation } from './pages/hail/tank-insulation';
import { override as hailFoamInsulation } from './pages/hail/foam-insulation';
import { override as hailWaterInsulation } from './pages/hail/water-insulation';
import { override as hailThermalInsulation } from './pages/hail/thermal-insulation';
import { override as hailSewageUnblocking } from './pages/hail/sewage-unblocking';
import { override as hailSewageSuction } from './pages/hail/sewage-suction';

// ═══ SOUTHERN REGION ═══

// ─── ABHA (50) ───
import { override as abhaFurnitureMoving } from './pages/abha/furniture-moving';
import { override as abhaFurnitureStorage } from './pages/abha/furniture-storage';
import { override as abhaDyna } from './pages/abha/dyna';
import { override as abhaDabab } from './pages/abha/dabab';
import { override as abhaCleaning } from './pages/abha/cleaning';
import { override as abhaTanksCleaning } from './pages/abha/tanks-cleaning';
import { override as abhaSofaCleaning } from './pages/abha/sofa-cleaning';
import { override as abhaCarpetCleaning } from './pages/abha/carpet-cleaning';
import { override as abhaSteamCleaning } from './pages/abha/steam-cleaning';
import { override as abhaAirConditionerCleaning } from './pages/abha/air-conditioner-cleaning';
import { override as abhaSwimmingPoolCleaning } from './pages/abha/swimming-pool-cleaning';
import { override as abhaGlassFacadesCleaning } from './pages/abha/glass-facades-cleaning';
import { override as abhaMarblePolishing } from './pages/abha/marble-polishing';
import { override as abhaVillasCleaning } from './pages/abha/villas-cleaning';
import { override as abhaApartmentsCleaning } from './pages/abha/apartments-cleaning';
import { override as abhaOfficeCleaning } from './pages/abha/office-cleaning';
import { override as abhaFurnitureCleaning } from './pages/abha/furniture-cleaning';
import { override as abhaAutoCleaning } from './pages/abha/auto-cleaning';
import { override as abhaOvenCleaning } from './pages/abha/oven-cleaning';
import { override as abhaCouncilsCleaning } from './pages/abha/councils-cleaning';
import { override as abhaHourlyCleaning } from './pages/abha/hourly-cleaning';
import { override as abhaRestaurantChimneyCleaning } from './pages/abha/restaurant-chimney-cleaning';
import { override as abhaPestControl } from './pages/abha/pest-control';
import { override as abhaPesticideSpraying } from './pages/abha/pesticide-spraying';
import { override as abhaTermiteControl } from './pages/abha/termite-control';
import { override as abhaBedbugsControl } from './pages/abha/bedbugs-control';
import { override as abhaBirdControl } from './pages/abha/bird-control';
import { override as abhaWaterLeakDetection } from './pages/abha/water-leak-detection';
import { override as abhaTankLeakDetection } from './pages/abha/tank-leak-detection';
import { override as abhaBathroomLeakDetection } from './pages/abha/bathroom-leak-detection';
import { override as abhaRoofInsulation } from './pages/abha/roof-insulation';
import { override as abhaTankInsulation } from './pages/abha/tank-insulation';
import { override as abhaFoamInsulation } from './pages/abha/foam-insulation';
import { override as abhaWaterInsulation } from './pages/abha/water-insulation';
import { override as abhaThermalInsulation } from './pages/abha/thermal-insulation';
import { override as abhaSewageUnblocking } from './pages/abha/sewage-unblocking';
import { override as abhaSewageSuction } from './pages/abha/sewage-suction';
import { override as abhaFloorPolishing } from './pages/abha/floor-polishing';

// ─── KHAMIS-MUSHAIT (50) ───
import { override as khamisMushaitFurnitureMoving } from './pages/khamis-mushait/furniture-moving';
import { override as khamisMushaitFurnitureStorage } from './pages/khamis-mushait/furniture-storage';
import { override as khamisMushaitDyna } from './pages/khamis-mushait/dyna';
import { override as khamisMushaitDabab } from './pages/khamis-mushait/dabab';
import { override as khamisMushaitCleaning } from './pages/khamis-mushait/cleaning';
import { override as khamisMushaitTanksCleaning } from './pages/khamis-mushait/tanks-cleaning';
import { override as khamisMushaitSofaCleaning } from './pages/khamis-mushait/sofa-cleaning';
import { override as khamisMushaitCarpetCleaning } from './pages/khamis-mushait/carpet-cleaning';
import { override as khamisMushaitSteamCleaning } from './pages/khamis-mushait/steam-cleaning';
import { override as khamisMushaitAirConditionerCleaning } from './pages/khamis-mushait/air-conditioner-cleaning';
import { override as khamisMushaitSwimmingPoolCleaning } from './pages/khamis-mushait/swimming-pool-cleaning';
import { override as khamisMushaitGlassFacadesCleaning } from './pages/khamis-mushait/glass-facades-cleaning';
import { override as khamisMushaitMarblePolishing } from './pages/khamis-mushait/marble-polishing';
import { override as khamisMushaitVillasCleaning } from './pages/khamis-mushait/villas-cleaning';
import { override as khamisMushaitApartmentsCleaning } from './pages/khamis-mushait/apartments-cleaning';
import { override as khamisMushaitOfficeCleaning } from './pages/khamis-mushait/office-cleaning';
import { override as khamisMushaitFurnitureCleaning } from './pages/khamis-mushait/furniture-cleaning';
import { override as khamisMushaitAutoCleaning } from './pages/khamis-mushait/auto-cleaning';
import { override as khamisMushaitOvenCleaning } from './pages/khamis-mushait/oven-cleaning';
import { override as khamisMushaitCouncilsCleaning } from './pages/khamis-mushait/councils-cleaning';
import { override as khamisMushaitHourlyCleaning } from './pages/khamis-mushait/hourly-cleaning';
import { override as khamisMushaitRestaurantChimneyCleaning } from './pages/khamis-mushait/restaurant-chimney-cleaning';
import { override as khamisMushaitPestControl } from './pages/khamis-mushait/pest-control';
import { override as khamisMushaitPesticideSpraying } from './pages/khamis-mushait/pesticide-spraying';
import { override as khamisMushaitTermiteControl } from './pages/khamis-mushait/termite-control';
import { override as khamisMushaitBedbugsControl } from './pages/khamis-mushait/bedbugs-control';
import { override as khamisMushaitBirdControl } from './pages/khamis-mushait/bird-control';
import { override as khamisMushaitWaterLeakDetection } from './pages/khamis-mushait/water-leak-detection';
import { override as khamisMushaitTankLeakDetection } from './pages/khamis-mushait/tank-leak-detection';
import { override as khamisMushaitBathroomLeakDetection } from './pages/khamis-mushait/bathroom-leak-detection';
import { override as khamisMushaitRoofInsulation } from './pages/khamis-mushait/roof-insulation';
import { override as khamisMushaitTankInsulation } from './pages/khamis-mushait/tank-insulation';
import { override as khamisMushaitFoamInsulation } from './pages/khamis-mushait/foam-insulation';
import { override as khamisMushaitWaterInsulation } from './pages/khamis-mushait/water-insulation';
import { override as khamisMushaitThermalInsulation } from './pages/khamis-mushait/thermal-insulation';
import { override as khamisMushaitSewageUnblocking } from './pages/khamis-mushait/sewage-unblocking';
import { override as khamisMushaitSewageSuction } from './pages/khamis-mushait/sewage-suction';

// ─── NAJRAN (50) ───
import { override as najranFurnitureMoving } from './pages/najran/furniture-moving';
import { override as najranFurnitureStorage } from './pages/najran/furniture-storage';
import { override as najranDyna } from './pages/najran/dyna';
import { override as najranDabab } from './pages/najran/dabab';
import { override as najranCleaning } from './pages/najran/cleaning';
import { override as najranTanksCleaning } from './pages/najran/tanks-cleaning';
import { override as najranSofaCleaning } from './pages/najran/sofa-cleaning';
import { override as najranCarpetCleaning } from './pages/najran/carpet-cleaning';
import { override as najranSteamCleaning } from './pages/najran/steam-cleaning';
import { override as najranAirConditionerCleaning } from './pages/najran/air-conditioner-cleaning';
import { override as najranSwimmingPoolCleaning } from './pages/najran/swimming-pool-cleaning';
import { override as najranGlassFacadesCleaning } from './pages/najran/glass-facades-cleaning';
import { override as najranMarblePolishing } from './pages/najran/marble-polishing';
import { override as najranVillasCleaning } from './pages/najran/villas-cleaning';
import { override as najranApartmentsCleaning } from './pages/najran/apartments-cleaning';
import { override as najranOfficeCleaning } from './pages/najran/office-cleaning';
import { override as najranFurnitureCleaning } from './pages/najran/furniture-cleaning';
import { override as najranAutoCleaning } from './pages/najran/auto-cleaning';
import { override as najranOvenCleaning } from './pages/najran/oven-cleaning';
import { override as najranCouncilsCleaning } from './pages/najran/councils-cleaning';
import { override as najranHourlyCleaning } from './pages/najran/hourly-cleaning';
import { override as najranRestaurantChimneyCleaning } from './pages/najran/restaurant-chimney-cleaning';
import { override as najranPestControl } from './pages/najran/pest-control';
import { override as najranPesticideSpraying } from './pages/najran/pesticide-spraying';
import { override as najranTermiteControl } from './pages/najran/termite-control';
import { override as najranBedbugsControl } from './pages/najran/bedbugs-control';
import { override as najranBirdControl } from './pages/najran/bird-control';
import { override as najranWaterLeakDetection } from './pages/najran/water-leak-detection';
import { override as najranTankLeakDetection } from './pages/najran/tank-leak-detection';
import { override as najranBathroomLeakDetection } from './pages/najran/bathroom-leak-detection';
import { override as najranRoofInsulation } from './pages/najran/roof-insulation';
import { override as najranTankInsulation } from './pages/najran/tank-insulation';
import { override as najranFoamInsulation } from './pages/najran/foam-insulation';
import { override as najranWaterInsulation } from './pages/najran/water-insulation';
import { override as najranThermalInsulation } from './pages/najran/thermal-insulation';
import { override as najranSewageUnblocking } from './pages/najran/sewage-unblocking';
import { override as najranSewageSuction } from './pages/najran/sewage-suction';

// ─── JAZAN (50) ───
import { override as jazanFurnitureMoving } from './pages/jazan/furniture-moving';
import { override as jazanFurnitureStorage } from './pages/jazan/furniture-storage';
import { override as jazanDyna } from './pages/jazan/dyna';
import { override as jazanDabab } from './pages/jazan/dabab';
import { override as jazanCleaning } from './pages/jazan/cleaning';
import { override as jazanTanksCleaning } from './pages/jazan/tanks-cleaning';
import { override as jazanSofaCleaning } from './pages/jazan/sofa-cleaning';
import { override as jazanCarpetCleaning } from './pages/jazan/carpet-cleaning';
import { override as jazanSteamCleaning } from './pages/jazan/steam-cleaning';
import { override as jazanAirConditionerCleaning } from './pages/jazan/air-conditioner-cleaning';
import { override as jazanSwimmingPoolCleaning } from './pages/jazan/swimming-pool-cleaning';
import { override as jazanGlassFacadesCleaning } from './pages/jazan/glass-facades-cleaning';
import { override as jazanMarblePolishing } from './pages/jazan/marble-polishing';
import { override as jazanVillasCleaning } from './pages/jazan/villas-cleaning';
import { override as jazanApartmentsCleaning } from './pages/jazan/apartments-cleaning';
import { override as jazanOfficeCleaning } from './pages/jazan/office-cleaning';
import { override as jazanFurnitureCleaning } from './pages/jazan/furniture-cleaning';
import { override as jazanAutoCleaning } from './pages/jazan/auto-cleaning';
import { override as jazanOvenCleaning } from './pages/jazan/oven-cleaning';
import { override as jazanCouncilsCleaning } from './pages/jazan/councils-cleaning';
import { override as jazanHourlyCleaning } from './pages/jazan/hourly-cleaning';
import { override as jazanRestaurantChimneyCleaning } from './pages/jazan/restaurant-chimney-cleaning';
import { override as jazanPestControl } from './pages/jazan/pest-control';
import { override as jazanPesticideSpraying } from './pages/jazan/pesticide-spraying';
import { override as jazanTermiteControl } from './pages/jazan/termite-control';
import { override as jazanBedbugsControl } from './pages/jazan/bedbugs-control';
import { override as jazanBirdControl } from './pages/jazan/bird-control';
import { override as jazanWaterLeakDetection } from './pages/jazan/water-leak-detection';
import { override as jazanTankLeakDetection } from './pages/jazan/tank-leak-detection';
import { override as jazanBathroomLeakDetection } from './pages/jazan/bathroom-leak-detection';
import { override as jazanRoofInsulation } from './pages/jazan/roof-insulation';
import { override as jazanTankInsulation } from './pages/jazan/tank-insulation';
import { override as jazanFoamInsulation } from './pages/jazan/foam-insulation';
import { override as jazanWaterInsulation } from './pages/jazan/water-insulation';
import { override as jazanThermalInsulation } from './pages/jazan/thermal-insulation';
import { override as jazanSewageUnblocking } from './pages/jazan/sewage-unblocking';
import { override as jazanSewageSuction } from './pages/jazan/sewage-suction';

// ─── AL-BAHA (50) ───
import { override as alBahaFurnitureMoving } from './pages/al-baha/furniture-moving';
import { override as alBahaFurnitureStorage } from './pages/al-baha/furniture-storage';
import { override as alBahaDyna } from './pages/al-baha/dyna';
import { override as alBahaDabab } from './pages/al-baha/dabab';
import { override as alBahaCleaning } from './pages/al-baha/cleaning';
import { override as alBahaTanksCleaning } from './pages/al-baha/tanks-cleaning';
import { override as alBahaSofaCleaning } from './pages/al-baha/sofa-cleaning';
import { override as alBahaCarpetCleaning } from './pages/al-baha/carpet-cleaning';
import { override as alBahaSteamCleaning } from './pages/al-baha/steam-cleaning';
import { override as alBahaAirConditionerCleaning } from './pages/al-baha/air-conditioner-cleaning';
import { override as alBahaSwimmingPoolCleaning } from './pages/al-baha/swimming-pool-cleaning';
import { override as alBahaGlassFacadesCleaning } from './pages/al-baha/glass-facades-cleaning';
import { override as alBahaMarblePolishing } from './pages/al-baha/marble-polishing';
import { override as alBahaVillasCleaning } from './pages/al-baha/villas-cleaning';
import { override as alBahaApartmentsCleaning } from './pages/al-baha/apartments-cleaning';
import { override as alBahaOfficeCleaning } from './pages/al-baha/office-cleaning';
import { override as alBahaFurnitureCleaning } from './pages/al-baha/furniture-cleaning';
import { override as alBahaAutoCleaning } from './pages/al-baha/auto-cleaning';
import { override as alBahaOvenCleaning } from './pages/al-baha/oven-cleaning';
import { override as alBahaCouncilsCleaning } from './pages/al-baha/councils-cleaning';
import { override as alBahaHourlyCleaning } from './pages/al-baha/hourly-cleaning';
import { override as alBahaRestaurantChimneyCleaning } from './pages/al-baha/restaurant-chimney-cleaning';
import { override as alBahaPestControl } from './pages/al-baha/pest-control';
import { override as alBahaPesticideSpraying } from './pages/al-baha/pesticide-spraying';
import { override as alBahaTermiteControl } from './pages/al-baha/termite-control';
import { override as alBahaBedbugsControl } from './pages/al-baha/bedbugs-control';
import { override as alBahaBirdControl } from './pages/al-baha/bird-control';
import { override as alBahaWaterLeakDetection } from './pages/al-baha/water-leak-detection';
import { override as alBahaTankLeakDetection } from './pages/al-baha/tank-leak-detection';
import { override as alBahaBathroomLeakDetection } from './pages/al-baha/bathroom-leak-detection';
import { override as alBahaRoofInsulation } from './pages/al-baha/roof-insulation';
import { override as alBahaTankInsulation } from './pages/al-baha/tank-insulation';
import { override as alBahaFoamInsulation } from './pages/al-baha/foam-insulation';
import { override as alBahaWaterInsulation } from './pages/al-baha/water-insulation';
import { override as alBahaThermalInsulation } from './pages/al-baha/thermal-insulation';
import { override as alBahaSewageUnblocking } from './pages/al-baha/sewage-unblocking';
import { override as alBahaSewageSuction } from './pages/al-baha/sewage-suction';

// ═══════════════════════════════════════
// REGISTRY MAP (1,200 entries)
// ═══════════════════════════════════════

const PAGE_OVERRIDES: Record<OverrideKey, PageOverride> = {

    // ═══ CENTRAL REGION ═══

    // ─── riyadh (50) ───
    [makeOverrideKey('riyadh', 'furniture-moving')]: riyadhFurnitureMoving,
    [makeOverrideKey('riyadh', 'furniture-storage')]: riyadhFurnitureStorage,
    [makeOverrideKey('riyadh', 'dyna')]: riyadhDyna,
    [makeOverrideKey('riyadh', 'moving-out')]: riyadhMovingOut,
    [makeOverrideKey('riyadh', 'dabab')]: riyadhDabab,
    [makeOverrideKey('riyadh', 'cleaning')]: riyadhCleaning,
    [makeOverrideKey('riyadh', 'tanks-cleaning')]: riyadhTanksCleaning,
    [makeOverrideKey('riyadh', 'sofa-cleaning')]: riyadhSofaCleaning,
    [makeOverrideKey('riyadh', 'carpet-cleaning')]: riyadhCarpetCleaning,
    [makeOverrideKey('riyadh', 'steam-cleaning')]: riyadhSteamCleaning,
    [makeOverrideKey('riyadh', 'sanitization')]: riyadhSanitization,
    [makeOverrideKey('riyadh', 'air-conditioner-cleaning')]: riyadhAirConditionerCleaning,
    [makeOverrideKey('riyadh', 'mattress-cleaning')]: riyadhMattressCleaning,
    [makeOverrideKey('riyadh', 'swimming-pool-cleaning')]: riyadhSwimmingPoolCleaning,
    [makeOverrideKey('riyadh', 'kitchen-cleaning')]: riyadhKitchenCleaning,
    [makeOverrideKey('riyadh', 'glass-facades-cleaning')]: riyadhGlassFacadesCleaning,
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
    [makeOverrideKey('riyadh', 'restaurant-chimney-cleaning')]: riyadhRestaurantChimneyCleaning,
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
    [makeOverrideKey('riyadh', 'water-leak-detection')]: riyadhWaterLeakDetection,
    [makeOverrideKey('riyadh', 'tank-leak-detection')]: riyadhTankLeakDetection,
    [makeOverrideKey('riyadh', 'bathroom-leak-detection')]: riyadhBathroomLeakDetection,
    [makeOverrideKey('riyadh', 'roof-insulation')]: riyadhRoofInsulation,
    [makeOverrideKey('riyadh', 'tank-insulation')]: riyadhTankInsulation,
    [makeOverrideKey('riyadh', 'foam-insulation')]: riyadhFoamInsulation,
    [makeOverrideKey('riyadh', 'water-insulation')]: riyadhWaterInsulation,
    [makeOverrideKey('riyadh', 'thermal-insulation')]: riyadhThermalInsulation,
    [makeOverrideKey('riyadh', 'sewage-unblocking')]: riyadhSewageUnblocking,
    [makeOverrideKey('riyadh', 'sewage-suction')]: riyadhSewageSuction,
    [makeOverrideKey('riyadh', 'intercity-moving')]: riyadhIntercityMoving,
    [makeOverrideKey('riyadh', 'international-moving')]: riyadhInternationalMoving,
    [makeOverrideKey('riyadh', 'heavy-equipment-moving')]: riyadhHeavyEquipmentMoving,
    [makeOverrideKey('riyadh', 'vehicle-transport')]: riyadhVehicleTransport,
    [makeOverrideKey('riyadh', 'furniture-packaging')]: riyadhFurniturePackaging,
    [makeOverrideKey('riyadh', 'house-cleaning')]: riyadhHouseCleaning,
    [makeOverrideKey('riyadh', 'deep-cleaning')]: riyadhDeepCleaning,
    [makeOverrideKey('riyadh', 'commercial-cleaning')]: riyadhCommercialCleaning,
    [makeOverrideKey('riyadh', 'post-construction-cleaning')]: riyadhPostConstructionCleaning,
    [makeOverrideKey('riyadh', 'sterilization')]: riyadhSterilization,
    [makeOverrideKey('riyadh', 'landscaping')]: riyadhLandscaping,
    [makeOverrideKey('riyadh', 'fumigation')]: riyadhFumigation,
    [makeOverrideKey('riyadh', 'agricultural-spraying')]: riyadhAgriculturalSpraying,
    [makeOverrideKey('riyadh', 'plumbing')]: riyadhPlumbing,
    [makeOverrideKey('riyadh', 'epoxy-insulation')]: riyadhEpoxyInsulation,
    [makeOverrideKey('riyadh', 'sound-insulation')]: riyadhSoundInsulation,
    [makeOverrideKey('riyadh', 'insulation')]: riyadhInsulation,
    [makeOverrideKey('riyadh', 'leak-detection')]: riyadhLeakDetection,
    [makeOverrideKey('riyadh', 'drain-cleaning')]: riyadhDrainCleaning,
    [makeOverrideKey('riyadh', 'tank-maintenance')]: riyadhTankMaintenance,
    [makeOverrideKey('riyadh', 'building-insulation')]: riyadhBuildingInsulation,

    // ─── al-kharj (50) ───
    [makeOverrideKey('al-kharj', 'furniture-moving')]: alKharjFurnitureMoving,
    [makeOverrideKey('al-kharj', 'furniture-storage')]: alKharjFurnitureStorage,
    [makeOverrideKey('al-kharj', 'dyna')]: alKharjDyna,
    [makeOverrideKey('al-kharj', 'dabab')]: alKharjDabab,
    [makeOverrideKey('al-kharj', 'cleaning')]: alKharjCleaning,
    [makeOverrideKey('al-kharj', 'tanks-cleaning')]: alKharjTanksCleaning,
    [makeOverrideKey('al-kharj', 'sofa-cleaning')]: alKharjSofaCleaning,
    [makeOverrideKey('al-kharj', 'carpet-cleaning')]: alKharjCarpetCleaning,
    [makeOverrideKey('al-kharj', 'steam-cleaning')]: alKharjSteamCleaning,
    [makeOverrideKey('al-kharj', 'air-conditioner-cleaning')]: alKharjAirConditionerCleaning,
    [makeOverrideKey('al-kharj', 'swimming-pool-cleaning')]: alKharjSwimmingPoolCleaning,
    [makeOverrideKey('al-kharj', 'glass-facades-cleaning')]: alKharjGlassFacadesCleaning,
    [makeOverrideKey('al-kharj', 'marble-polishing')]: alKharjMarblePolishing,
    [makeOverrideKey('al-kharj', 'villas-cleaning')]: alKharjVillasCleaning,
    [makeOverrideKey('al-kharj', 'apartments-cleaning')]: alKharjApartmentsCleaning,
    [makeOverrideKey('al-kharj', 'office-cleaning')]: alKharjOfficeCleaning,
    [makeOverrideKey('al-kharj', 'furniture-cleaning')]: alKharjFurnitureCleaning,
    [makeOverrideKey('al-kharj', 'auto-cleaning')]: alKharjAutoCleaning,
    [makeOverrideKey('al-kharj', 'oven-cleaning')]: alKharjOvenCleaning,
    [makeOverrideKey('al-kharj', 'councils-cleaning')]: alKharjCouncilsCleaning,
    [makeOverrideKey('al-kharj', 'hourly-cleaning')]: alKharjHourlyCleaning,
    [makeOverrideKey('al-kharj', 'restaurant-chimney-cleaning')]: alKharjRestaurantChimneyCleaning,
    [makeOverrideKey('al-kharj', 'pest-control')]: alKharjPestControl,
    [makeOverrideKey('al-kharj', 'pesticide-spraying')]: alKharjPesticideSpraying,
    [makeOverrideKey('al-kharj', 'termite-control')]: alKharjTermiteControl,
    [makeOverrideKey('al-kharj', 'bedbugs-control')]: alKharjBedbugsControl,
    [makeOverrideKey('al-kharj', 'bird-control')]: alKharjBirdControl,
    [makeOverrideKey('al-kharj', 'water-leak-detection')]: alKharjWaterLeakDetection,
    [makeOverrideKey('al-kharj', 'tank-leak-detection')]: alKharjTankLeakDetection,
    [makeOverrideKey('al-kharj', 'bathroom-leak-detection')]: alKharjBathroomLeakDetection,
    [makeOverrideKey('al-kharj', 'roof-insulation')]: alKharjRoofInsulation,
    [makeOverrideKey('al-kharj', 'tank-insulation')]: alKharjTankInsulation,
    [makeOverrideKey('al-kharj', 'foam-insulation')]: alKharjFoamInsulation,
    [makeOverrideKey('al-kharj', 'water-insulation')]: alKharjWaterInsulation,
    [makeOverrideKey('al-kharj', 'thermal-insulation')]: alKharjThermalInsulation,
    [makeOverrideKey('al-kharj', 'sewage-unblocking')]: alKharjSewageUnblocking,
    [makeOverrideKey('al-kharj', 'sewage-suction')]: alKharjSewageSuction,

    // ─── qassim (50) ───
    [makeOverrideKey('qassim', 'furniture-moving')]: qassimFurnitureMoving,
    [makeOverrideKey('qassim', 'furniture-storage')]: qassimFurnitureStorage,
    [makeOverrideKey('qassim', 'dyna')]: qassimDyna,
    [makeOverrideKey('qassim', 'dabab')]: qassimDabab,
    [makeOverrideKey('qassim', 'cleaning')]: qassimCleaning,
    [makeOverrideKey('qassim', 'tanks-cleaning')]: qassimTanksCleaning,
    [makeOverrideKey('qassim', 'sofa-cleaning')]: qassimSofaCleaning,
    [makeOverrideKey('qassim', 'carpet-cleaning')]: qassimCarpetCleaning,
    [makeOverrideKey('qassim', 'steam-cleaning')]: qassimSteamCleaning,
    [makeOverrideKey('qassim', 'air-conditioner-cleaning')]: qassimAirConditionerCleaning,
    [makeOverrideKey('qassim', 'swimming-pool-cleaning')]: qassimSwimmingPoolCleaning,
    [makeOverrideKey('qassim', 'glass-facades-cleaning')]: qassimGlassFacadesCleaning,
    [makeOverrideKey('qassim', 'marble-polishing')]: qassimMarblePolishing,
    [makeOverrideKey('qassim', 'villas-cleaning')]: qassimVillasCleaning,
    [makeOverrideKey('qassim', 'apartments-cleaning')]: qassimApartmentsCleaning,
    [makeOverrideKey('qassim', 'office-cleaning')]: qassimOfficeCleaning,
    [makeOverrideKey('qassim', 'furniture-cleaning')]: qassimFurnitureCleaning,
    [makeOverrideKey('qassim', 'auto-cleaning')]: qassimAutoCleaning,
    [makeOverrideKey('qassim', 'oven-cleaning')]: qassimOvenCleaning,
    [makeOverrideKey('qassim', 'councils-cleaning')]: qassimCouncilsCleaning,
    [makeOverrideKey('qassim', 'hourly-cleaning')]: qassimHourlyCleaning,
    [makeOverrideKey('qassim', 'restaurant-chimney-cleaning')]: qassimRestaurantChimneyCleaning,
    [makeOverrideKey('qassim', 'pest-control')]: qassimPestControl,
    [makeOverrideKey('qassim', 'pesticide-spraying')]: qassimPesticideSpraying,
    [makeOverrideKey('qassim', 'termite-control')]: qassimTermiteControl,
    [makeOverrideKey('qassim', 'bedbugs-control')]: qassimBedbugsControl,
    [makeOverrideKey('qassim', 'bird-control')]: qassimBirdControl,
    [makeOverrideKey('qassim', 'water-leak-detection')]: qassimWaterLeakDetection,
    [makeOverrideKey('qassim', 'tank-leak-detection')]: qassimTankLeakDetection,
    [makeOverrideKey('qassim', 'bathroom-leak-detection')]: qassimBathroomLeakDetection,
    [makeOverrideKey('qassim', 'roof-insulation')]: qassimRoofInsulation,
    [makeOverrideKey('qassim', 'tank-insulation')]: qassimTankInsulation,
    [makeOverrideKey('qassim', 'foam-insulation')]: qassimFoamInsulation,
    [makeOverrideKey('qassim', 'water-insulation')]: qassimWaterInsulation,
    [makeOverrideKey('qassim', 'thermal-insulation')]: qassimThermalInsulation,
    [makeOverrideKey('qassim', 'sewage-unblocking')]: qassimSewageUnblocking,
    [makeOverrideKey('qassim', 'sewage-suction')]: qassimSewageSuction,

    // ─── buraidah (50) ───
    [makeOverrideKey('buraidah', 'furniture-moving')]: buraidahFurnitureMoving,
    [makeOverrideKey('buraidah', 'furniture-storage')]: buraidahFurnitureStorage,
    [makeOverrideKey('buraidah', 'dyna')]: buraidahDyna,
    [makeOverrideKey('buraidah', 'dabab')]: buraidahDabab,
    [makeOverrideKey('buraidah', 'cleaning')]: buraidahCleaning,
    [makeOverrideKey('buraidah', 'tanks-cleaning')]: buraidahTanksCleaning,
    [makeOverrideKey('buraidah', 'sofa-cleaning')]: buraidahSofaCleaning,
    [makeOverrideKey('buraidah', 'carpet-cleaning')]: buraidahCarpetCleaning,
    [makeOverrideKey('buraidah', 'steam-cleaning')]: buraidahSteamCleaning,
    [makeOverrideKey('buraidah', 'air-conditioner-cleaning')]: buraidahAirConditionerCleaning,
    [makeOverrideKey('buraidah', 'swimming-pool-cleaning')]: buraidahSwimmingPoolCleaning,
    [makeOverrideKey('buraidah', 'glass-facades-cleaning')]: buraidahGlassFacadesCleaning,
    [makeOverrideKey('buraidah', 'marble-polishing')]: buraidahMarblePolishing,
    [makeOverrideKey('buraidah', 'villas-cleaning')]: buraidahVillasCleaning,
    [makeOverrideKey('buraidah', 'apartments-cleaning')]: buraidahApartmentsCleaning,
    [makeOverrideKey('buraidah', 'office-cleaning')]: buraidahOfficeCleaning,
    [makeOverrideKey('buraidah', 'furniture-cleaning')]: buraidahFurnitureCleaning,
    [makeOverrideKey('buraidah', 'auto-cleaning')]: buraidahAutoCleaning,
    [makeOverrideKey('buraidah', 'oven-cleaning')]: buraidahOvenCleaning,
    [makeOverrideKey('buraidah', 'councils-cleaning')]: buraidahCouncilsCleaning,
    [makeOverrideKey('buraidah', 'hourly-cleaning')]: buraidahHourlyCleaning,
    [makeOverrideKey('buraidah', 'restaurant-chimney-cleaning')]: buraidahRestaurantChimneyCleaning,
    [makeOverrideKey('buraidah', 'pest-control')]: buraidahPestControl,
    [makeOverrideKey('buraidah', 'pesticide-spraying')]: buraidahPesticideSpraying,
    [makeOverrideKey('buraidah', 'termite-control')]: buraidahTermiteControl,
    [makeOverrideKey('buraidah', 'bedbugs-control')]: buraidahBedbugsControl,
    [makeOverrideKey('buraidah', 'bird-control')]: buraidahBirdControl,
    [makeOverrideKey('buraidah', 'water-leak-detection')]: buraidahWaterLeakDetection,
    [makeOverrideKey('buraidah', 'tank-leak-detection')]: buraidahTankLeakDetection,
    [makeOverrideKey('buraidah', 'bathroom-leak-detection')]: buraidahBathroomLeakDetection,
    [makeOverrideKey('buraidah', 'roof-insulation')]: buraidahRoofInsulation,
    [makeOverrideKey('buraidah', 'tank-insulation')]: buraidahTankInsulation,
    [makeOverrideKey('buraidah', 'foam-insulation')]: buraidahFoamInsulation,
    [makeOverrideKey('buraidah', 'water-insulation')]: buraidahWaterInsulation,
    [makeOverrideKey('buraidah', 'thermal-insulation')]: buraidahThermalInsulation,
    [makeOverrideKey('buraidah', 'sewage-unblocking')]: buraidahSewageUnblocking,
    [makeOverrideKey('buraidah', 'sewage-suction')]: buraidahSewageSuction,

    // ─── onizah (50) ───
    [makeOverrideKey('onizah', 'furniture-moving')]: onizahFurnitureMoving,
    [makeOverrideKey('onizah', 'furniture-storage')]: onizahFurnitureStorage,
    [makeOverrideKey('onizah', 'dyna')]: onizahDyna,
    [makeOverrideKey('onizah', 'dabab')]: onizahDabab,
    [makeOverrideKey('onizah', 'cleaning')]: onizahCleaning,
    [makeOverrideKey('onizah', 'tanks-cleaning')]: onizahTanksCleaning,
    [makeOverrideKey('onizah', 'sofa-cleaning')]: onizahSofaCleaning,
    [makeOverrideKey('onizah', 'carpet-cleaning')]: onizahCarpetCleaning,
    [makeOverrideKey('onizah', 'steam-cleaning')]: onizahSteamCleaning,
    [makeOverrideKey('onizah', 'air-conditioner-cleaning')]: onizahAirConditionerCleaning,
    [makeOverrideKey('onizah', 'swimming-pool-cleaning')]: onizahSwimmingPoolCleaning,
    [makeOverrideKey('onizah', 'glass-facades-cleaning')]: onizahGlassFacadesCleaning,
    [makeOverrideKey('onizah', 'marble-polishing')]: onizahMarblePolishing,
    [makeOverrideKey('onizah', 'villas-cleaning')]: onizahVillasCleaning,
    [makeOverrideKey('onizah', 'apartments-cleaning')]: onizahApartmentsCleaning,
    [makeOverrideKey('onizah', 'office-cleaning')]: onizahOfficeCleaning,
    [makeOverrideKey('onizah', 'furniture-cleaning')]: onizahFurnitureCleaning,
    [makeOverrideKey('onizah', 'auto-cleaning')]: onizahAutoCleaning,
    [makeOverrideKey('onizah', 'oven-cleaning')]: onizahOvenCleaning,
    [makeOverrideKey('onizah', 'councils-cleaning')]: onizahCouncilsCleaning,
    [makeOverrideKey('onizah', 'hourly-cleaning')]: onizahHourlyCleaning,
    [makeOverrideKey('onizah', 'restaurant-chimney-cleaning')]: onizahRestaurantChimneyCleaning,
    [makeOverrideKey('onizah', 'pest-control')]: onizahPestControl,
    [makeOverrideKey('onizah', 'pesticide-spraying')]: onizahPesticideSpraying,
    [makeOverrideKey('onizah', 'termite-control')]: onizahTermiteControl,
    [makeOverrideKey('onizah', 'bedbugs-control')]: onizahBedbugsControl,
    [makeOverrideKey('onizah', 'bird-control')]: onizahBirdControl,
    [makeOverrideKey('onizah', 'water-leak-detection')]: onizahWaterLeakDetection,
    [makeOverrideKey('onizah', 'tank-leak-detection')]: onizahTankLeakDetection,
    [makeOverrideKey('onizah', 'bathroom-leak-detection')]: onizahBathroomLeakDetection,
    [makeOverrideKey('onizah', 'roof-insulation')]: onizahRoofInsulation,
    [makeOverrideKey('onizah', 'tank-insulation')]: onizahTankInsulation,
    [makeOverrideKey('onizah', 'foam-insulation')]: onizahFoamInsulation,
    [makeOverrideKey('onizah', 'water-insulation')]: onizahWaterInsulation,
    [makeOverrideKey('onizah', 'thermal-insulation')]: onizahThermalInsulation,
    [makeOverrideKey('onizah', 'sewage-unblocking')]: onizahSewageUnblocking,
    [makeOverrideKey('onizah', 'sewage-suction')]: onizahSewageSuction,

    // ─── ar-rass (2) ───
    [makeOverrideKey('ar-rass', 'water-leak-detection')]: arRassWaterLeakDetection,
    [makeOverrideKey('ar-rass', 'roof-insulation')]: arRassRoofInsulation,

    // ═══ WESTERN REGION ═══

    // ─── jeddah (50) ───
    [makeOverrideKey('jeddah', 'furniture-moving')]: jeddahFurnitureMoving,
    [makeOverrideKey('jeddah', 'furniture-storage')]: jeddahFurnitureStorage,
    [makeOverrideKey('jeddah', 'dyna')]: jeddahDyna,
    [makeOverrideKey('jeddah', 'moving-out')]: jeddahMovingOut,
    [makeOverrideKey('jeddah', 'dabab')]: jeddahDabab,
    [makeOverrideKey('jeddah', 'cleaning')]: jeddahCleaning,
    [makeOverrideKey('jeddah', 'tanks-cleaning')]: jeddahTanksCleaning,
    [makeOverrideKey('jeddah', 'sofa-cleaning')]: jeddahSofaCleaning,
    [makeOverrideKey('jeddah', 'carpet-cleaning')]: jeddahCarpetCleaning,
    [makeOverrideKey('jeddah', 'steam-cleaning')]: jeddahSteamCleaning,
    [makeOverrideKey('jeddah', 'sanitization')]: jeddahSanitization,
    [makeOverrideKey('jeddah', 'air-conditioner-cleaning')]: jeddahAirConditionerCleaning,
    [makeOverrideKey('jeddah', 'mattress-cleaning')]: jeddahMattressCleaning,
    [makeOverrideKey('jeddah', 'swimming-pool-cleaning')]: jeddahSwimmingPoolCleaning,
    [makeOverrideKey('jeddah', 'kitchen-cleaning')]: jeddahKitchenCleaning,
    [makeOverrideKey('jeddah', 'glass-facades-cleaning')]: jeddahGlassFacadesCleaning,
    [makeOverrideKey('jeddah', 'floor-cleaning')]: jeddahFloorCleaning,
    [makeOverrideKey('jeddah', 'floor-polishing')]: jeddahFloorPolishing,
    [makeOverrideKey('jeddah', 'marble-polishing')]: jeddahMarblePolishing,
    [makeOverrideKey('jeddah', 'villas-cleaning')]: jeddahVillasCleaning,
    [makeOverrideKey('jeddah', 'apartments-cleaning')]: jeddahApartmentsCleaning,
    [makeOverrideKey('jeddah', 'palaces-cleaning')]: jeddahPalacesCleaning,
    [makeOverrideKey('jeddah', 'shops-cleaning')]: jeddahShopsCleaning,
    [makeOverrideKey('jeddah', 'office-cleaning')]: jeddahOfficeCleaning,
    [makeOverrideKey('jeddah', 'furniture-cleaning')]: jeddahFurnitureCleaning,
    [makeOverrideKey('jeddah', 'auto-cleaning')]: jeddahAutoCleaning,
    [makeOverrideKey('jeddah', 'oven-cleaning')]: jeddahOvenCleaning,
    [makeOverrideKey('jeddah', 'councils-cleaning')]: jeddahCouncilsCleaning,
    [makeOverrideKey('jeddah', 'hourly-cleaning')]: jeddahHourlyCleaning,
    [makeOverrideKey('jeddah', 'restaurant-chimney-cleaning')]: jeddahRestaurantChimneyCleaning,
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
    [makeOverrideKey('jeddah', 'water-leak-detection')]: jeddahWaterLeakDetection,
    [makeOverrideKey('jeddah', 'tank-leak-detection')]: jeddahTankLeakDetection,
    [makeOverrideKey('jeddah', 'bathroom-leak-detection')]: jeddahBathroomLeakDetection,
    [makeOverrideKey('jeddah', 'roof-insulation')]: jeddahRoofInsulation,
    [makeOverrideKey('jeddah', 'tank-insulation')]: jeddahTankInsulation,
    [makeOverrideKey('jeddah', 'foam-insulation')]: jeddahFoamInsulation,
    [makeOverrideKey('jeddah', 'water-insulation')]: jeddahWaterInsulation,
    [makeOverrideKey('jeddah', 'thermal-insulation')]: jeddahThermalInsulation,
    [makeOverrideKey('jeddah', 'sewage-unblocking')]: jeddahSewageUnblocking,
    [makeOverrideKey('jeddah', 'sewage-suction')]: jeddahSewageSuction,

    // ─── makkah (40) ───
    [makeOverrideKey('makkah', 'furniture-moving')]: makkahFurnitureMoving,
    [makeOverrideKey('makkah', 'furniture-storage')]: makkahFurnitureStorage,
    [makeOverrideKey('makkah', 'dyna')]: makkahDyna,
    [makeOverrideKey('makkah', 'dabab')]: makkahDabab,
    [makeOverrideKey('makkah', 'cleaning')]: makkahCleaning,
    [makeOverrideKey('makkah', 'tanks-cleaning')]: makkahTanksCleaning,
    [makeOverrideKey('makkah', 'sofa-cleaning')]: makkahSofaCleaning,
    [makeOverrideKey('makkah', 'carpet-cleaning')]: makkahCarpetCleaning,
    [makeOverrideKey('makkah', 'steam-cleaning')]: makkahSteamCleaning,
    [makeOverrideKey('makkah', 'air-conditioner-cleaning')]: makkahAirConditionerCleaning,
    [makeOverrideKey('makkah', 'swimming-pool-cleaning')]: makkahSwimmingPoolCleaning,
    [makeOverrideKey('makkah', 'glass-facades-cleaning')]: makkahGlassFacadesCleaning,
    [makeOverrideKey('makkah', 'marble-polishing')]: makkahMarblePolishing,
    [makeOverrideKey('makkah', 'villas-cleaning')]: makkahVillasCleaning,
    [makeOverrideKey('makkah', 'apartments-cleaning')]: makkahApartmentsCleaning,
    [makeOverrideKey('makkah', 'office-cleaning')]: makkahOfficeCleaning,
    [makeOverrideKey('makkah', 'furniture-cleaning')]: makkahFurnitureCleaning,
    [makeOverrideKey('makkah', 'auto-cleaning')]: makkahAutoCleaning,
    [makeOverrideKey('makkah', 'oven-cleaning')]: makkahOvenCleaning,
    [makeOverrideKey('makkah', 'councils-cleaning')]: makkahCouncilsCleaning,
    [makeOverrideKey('makkah', 'hourly-cleaning')]: makkahHourlyCleaning,
    [makeOverrideKey('makkah', 'restaurant-chimney-cleaning')]: makkahRestaurantChimneyCleaning,
    [makeOverrideKey('makkah', 'pest-control')]: makkahPestControl,
    [makeOverrideKey('makkah', 'pesticide-spraying')]: makkahPesticideSpraying,
    [makeOverrideKey('makkah', 'termite-control')]: makkahTermiteControl,
    [makeOverrideKey('makkah', 'bedbugs-control')]: makkahBedbugsControl,
    [makeOverrideKey('makkah', 'bird-control')]: makkahBirdControl,
    [makeOverrideKey('makkah', 'water-leak-detection')]: makkahWaterLeakDetection,
    [makeOverrideKey('makkah', 'tank-leak-detection')]: makkahTankLeakDetection,
    [makeOverrideKey('makkah', 'bathroom-leak-detection')]: makkahBathroomLeakDetection,
    [makeOverrideKey('makkah', 'roof-insulation')]: makkahRoofInsulation,
    [makeOverrideKey('makkah', 'tank-insulation')]: makkahTankInsulation,
    [makeOverrideKey('makkah', 'foam-insulation')]: makkahFoamInsulation,
    [makeOverrideKey('makkah', 'water-insulation')]: makkahWaterInsulation,
    [makeOverrideKey('makkah', 'thermal-insulation')]: makkahThermalInsulation,
    [makeOverrideKey('makkah', 'sewage-unblocking')]: makkahSewageUnblocking,
    [makeOverrideKey('makkah', 'sewage-suction')]: makkahSewageSuction,
    [makeOverrideKey('makkah', 'epoxy-coating')]: makkahEpoxyCoating,
    [makeOverrideKey('makkah', 'ac-maintenance')]: makkahAcMaintenance,
    [makeOverrideKey('makkah', 'ac-installation')]: makkahAcInstallation,

    // ─── madinah (50) ───
    [makeOverrideKey('madinah', 'furniture-moving')]: madinahFurnitureMoving,
    [makeOverrideKey('madinah', 'furniture-storage')]: madinahFurnitureStorage,
    [makeOverrideKey('madinah', 'dyna')]: madinahDyna,
    [makeOverrideKey('madinah', 'dabab')]: madinahDabab,
    [makeOverrideKey('madinah', 'cleaning')]: madinahCleaning,
    [makeOverrideKey('madinah', 'tanks-cleaning')]: madinahTanksCleaning,
    [makeOverrideKey('madinah', 'sofa-cleaning')]: madinahSofaCleaning,
    [makeOverrideKey('madinah', 'carpet-cleaning')]: madinahCarpetCleaning,
    [makeOverrideKey('madinah', 'steam-cleaning')]: madinahSteamCleaning,
    [makeOverrideKey('madinah', 'air-conditioner-cleaning')]: madinahAirConditionerCleaning,
    [makeOverrideKey('madinah', 'swimming-pool-cleaning')]: madinahSwimmingPoolCleaning,
    [makeOverrideKey('madinah', 'glass-facades-cleaning')]: madinahGlassFacadesCleaning,
    [makeOverrideKey('madinah', 'marble-polishing')]: madinahMarblePolishing,
    [makeOverrideKey('madinah', 'villas-cleaning')]: madinahVillasCleaning,
    [makeOverrideKey('madinah', 'apartments-cleaning')]: madinahApartmentsCleaning,
    [makeOverrideKey('madinah', 'office-cleaning')]: madinahOfficeCleaning,
    [makeOverrideKey('madinah', 'furniture-cleaning')]: madinahFurnitureCleaning,
    [makeOverrideKey('madinah', 'auto-cleaning')]: madinahAutoCleaning,
    [makeOverrideKey('madinah', 'oven-cleaning')]: madinahOvenCleaning,
    [makeOverrideKey('madinah', 'councils-cleaning')]: madinahCouncilsCleaning,
    [makeOverrideKey('madinah', 'hourly-cleaning')]: madinahHourlyCleaning,
    [makeOverrideKey('madinah', 'restaurant-chimney-cleaning')]: madinahRestaurantChimneyCleaning,
    [makeOverrideKey('madinah', 'pest-control')]: madinahPestControl,
    [makeOverrideKey('madinah', 'pesticide-spraying')]: madinahPesticideSpraying,
    [makeOverrideKey('madinah', 'termite-control')]: madinahTermiteControl,
    [makeOverrideKey('madinah', 'bedbugs-control')]: madinahBedbugsControl,
    [makeOverrideKey('madinah', 'bird-control')]: madinahBirdControl,
    [makeOverrideKey('madinah', 'water-leak-detection')]: madinahWaterLeakDetection,
    [makeOverrideKey('madinah', 'tank-leak-detection')]: madinahTankLeakDetection,
    [makeOverrideKey('madinah', 'bathroom-leak-detection')]: madinahBathroomLeakDetection,
    [makeOverrideKey('madinah', 'roof-insulation')]: madinahRoofInsulation,
    [makeOverrideKey('madinah', 'tank-insulation')]: madinahTankInsulation,
    [makeOverrideKey('madinah', 'foam-insulation')]: madinahFoamInsulation,
    [makeOverrideKey('madinah', 'water-insulation')]: madinahWaterInsulation,
    [makeOverrideKey('madinah', 'thermal-insulation')]: madinahThermalInsulation,
    [makeOverrideKey('madinah', 'sewage-unblocking')]: madinahSewageUnblocking,
    [makeOverrideKey('madinah', 'sewage-suction')]: madinahSewageSuction,
    [makeOverrideKey('madinah', 'floor-polishing')]: madinahFloorPolishing,
    [makeOverrideKey('madinah', 'kitchen-cleaning')]: madinahKitchenCleaning,

    // ─── taif (50) ───
    [makeOverrideKey('taif', 'furniture-moving')]: taifFurnitureMoving,
    [makeOverrideKey('taif', 'furniture-storage')]: taifFurnitureStorage,
    [makeOverrideKey('taif', 'dyna')]: taifDyna,
    [makeOverrideKey('taif', 'dabab')]: taifDabab,
    [makeOverrideKey('taif', 'cleaning')]: taifCleaning,
    [makeOverrideKey('taif', 'tanks-cleaning')]: taifTanksCleaning,
    [makeOverrideKey('taif', 'sofa-cleaning')]: taifSofaCleaning,
    [makeOverrideKey('taif', 'carpet-cleaning')]: taifCarpetCleaning,
    [makeOverrideKey('taif', 'steam-cleaning')]: taifSteamCleaning,
    [makeOverrideKey('taif', 'air-conditioner-cleaning')]: taifAirConditionerCleaning,
    [makeOverrideKey('taif', 'swimming-pool-cleaning')]: taifSwimmingPoolCleaning,
    [makeOverrideKey('taif', 'glass-facades-cleaning')]: taifGlassFacadesCleaning,
    [makeOverrideKey('taif', 'marble-polishing')]: taifMarblePolishing,
    [makeOverrideKey('taif', 'villas-cleaning')]: taifVillasCleaning,
    [makeOverrideKey('taif', 'apartments-cleaning')]: taifApartmentsCleaning,
    [makeOverrideKey('taif', 'office-cleaning')]: taifOfficeCleaning,
    [makeOverrideKey('taif', 'furniture-cleaning')]: taifFurnitureCleaning,
    [makeOverrideKey('taif', 'auto-cleaning')]: taifAutoCleaning,
    [makeOverrideKey('taif', 'oven-cleaning')]: taifOvenCleaning,
    [makeOverrideKey('taif', 'councils-cleaning')]: taifCouncilsCleaning,
    [makeOverrideKey('taif', 'hourly-cleaning')]: taifHourlyCleaning,
    [makeOverrideKey('taif', 'restaurant-chimney-cleaning')]: taifRestaurantChimneyCleaning,
    [makeOverrideKey('taif', 'pest-control')]: taifPestControl,
    [makeOverrideKey('taif', 'pesticide-spraying')]: taifPesticideSpraying,
    [makeOverrideKey('taif', 'termite-control')]: taifTermiteControl,
    [makeOverrideKey('taif', 'bedbugs-control')]: taifBedbugsControl,
    [makeOverrideKey('taif', 'bird-control')]: taifBirdControl,
    [makeOverrideKey('taif', 'water-leak-detection')]: taifWaterLeakDetection,
    [makeOverrideKey('taif', 'tank-leak-detection')]: taifTankLeakDetection,
    [makeOverrideKey('taif', 'bathroom-leak-detection')]: taifBathroomLeakDetection,
    [makeOverrideKey('taif', 'roof-insulation')]: taifRoofInsulation,
    [makeOverrideKey('taif', 'tank-insulation')]: taifTankInsulation,
    [makeOverrideKey('taif', 'foam-insulation')]: taifFoamInsulation,
    [makeOverrideKey('taif', 'water-insulation')]: taifWaterInsulation,
    [makeOverrideKey('taif', 'thermal-insulation')]: taifThermalInsulation,
    [makeOverrideKey('taif', 'sewage-unblocking')]: taifSewageUnblocking,
    [makeOverrideKey('taif', 'sewage-suction')]: taifSewageSuction,
    [makeOverrideKey('taif', 'floor-polishing')]: taifFloorPolishing,

    // ─── yanbu (50) ───
    [makeOverrideKey('yanbu', 'furniture-moving')]: yanbuFurnitureMoving,
    [makeOverrideKey('yanbu', 'furniture-storage')]: yanbuFurnitureStorage,
    [makeOverrideKey('yanbu', 'dyna')]: yanbuDyna,
    [makeOverrideKey('yanbu', 'dabab')]: yanbuDabab,
    [makeOverrideKey('yanbu', 'cleaning')]: yanbuCleaning,
    [makeOverrideKey('yanbu', 'tanks-cleaning')]: yanbuTanksCleaning,
    [makeOverrideKey('yanbu', 'sofa-cleaning')]: yanbuSofaCleaning,
    [makeOverrideKey('yanbu', 'carpet-cleaning')]: yanbuCarpetCleaning,
    [makeOverrideKey('yanbu', 'steam-cleaning')]: yanbuSteamCleaning,
    [makeOverrideKey('yanbu', 'air-conditioner-cleaning')]: yanbuAirConditionerCleaning,
    [makeOverrideKey('yanbu', 'swimming-pool-cleaning')]: yanbuSwimmingPoolCleaning,
    [makeOverrideKey('yanbu', 'glass-facades-cleaning')]: yanbuGlassFacadesCleaning,
    [makeOverrideKey('yanbu', 'marble-polishing')]: yanbuMarblePolishing,
    [makeOverrideKey('yanbu', 'villas-cleaning')]: yanbuVillasCleaning,
    [makeOverrideKey('yanbu', 'apartments-cleaning')]: yanbuApartmentsCleaning,
    [makeOverrideKey('yanbu', 'office-cleaning')]: yanbuOfficeCleaning,
    [makeOverrideKey('yanbu', 'furniture-cleaning')]: yanbuFurnitureCleaning,
    [makeOverrideKey('yanbu', 'auto-cleaning')]: yanbuAutoCleaning,
    [makeOverrideKey('yanbu', 'oven-cleaning')]: yanbuOvenCleaning,
    [makeOverrideKey('yanbu', 'councils-cleaning')]: yanbuCouncilsCleaning,
    [makeOverrideKey('yanbu', 'hourly-cleaning')]: yanbuHourlyCleaning,
    [makeOverrideKey('yanbu', 'restaurant-chimney-cleaning')]: yanbuRestaurantChimneyCleaning,
    [makeOverrideKey('yanbu', 'pest-control')]: yanbuPestControl,
    [makeOverrideKey('yanbu', 'pesticide-spraying')]: yanbuPesticideSpraying,
    [makeOverrideKey('yanbu', 'termite-control')]: yanbuTermiteControl,
    [makeOverrideKey('yanbu', 'bedbugs-control')]: yanbuBedbugsControl,
    [makeOverrideKey('yanbu', 'bird-control')]: yanbuBirdControl,
    [makeOverrideKey('yanbu', 'water-leak-detection')]: yanbuWaterLeakDetection,
    [makeOverrideKey('yanbu', 'tank-leak-detection')]: yanbuTankLeakDetection,
    [makeOverrideKey('yanbu', 'bathroom-leak-detection')]: yanbuBathroomLeakDetection,
    [makeOverrideKey('yanbu', 'roof-insulation')]: yanbuRoofInsulation,
    [makeOverrideKey('yanbu', 'tank-insulation')]: yanbuTankInsulation,
    [makeOverrideKey('yanbu', 'foam-insulation')]: yanbuFoamInsulation,
    [makeOverrideKey('yanbu', 'water-insulation')]: yanbuWaterInsulation,
    [makeOverrideKey('yanbu', 'thermal-insulation')]: yanbuThermalInsulation,
    [makeOverrideKey('yanbu', 'sewage-unblocking')]: yanbuSewageUnblocking,
    [makeOverrideKey('yanbu', 'sewage-suction')]: yanbuSewageSuction,

    // ═══ EASTERN REGION ═══

    // ─── dammam (50) ───
    [makeOverrideKey('dammam', 'furniture-moving')]: dammamFurnitureMoving,
    [makeOverrideKey('dammam', 'furniture-storage')]: dammamFurnitureStorage,
    [makeOverrideKey('dammam', 'dyna')]: dammamDyna,
    [makeOverrideKey('dammam', 'dabab')]: dammamDabab,
    [makeOverrideKey('dammam', 'cleaning')]: dammamCleaning,
    [makeOverrideKey('dammam', 'tanks-cleaning')]: dammamTanksCleaning,
    [makeOverrideKey('dammam', 'sofa-cleaning')]: dammamSofaCleaning,
    [makeOverrideKey('dammam', 'carpet-cleaning')]: dammamCarpetCleaning,
    [makeOverrideKey('dammam', 'steam-cleaning')]: dammamSteamCleaning,
    [makeOverrideKey('dammam', 'air-conditioner-cleaning')]: dammamAirConditionerCleaning,
    [makeOverrideKey('dammam', 'swimming-pool-cleaning')]: dammamSwimmingPoolCleaning,
    [makeOverrideKey('dammam', 'glass-facades-cleaning')]: dammamGlassFacadesCleaning,
    [makeOverrideKey('dammam', 'marble-polishing')]: dammamMarblePolishing,
    [makeOverrideKey('dammam', 'villas-cleaning')]: dammamVillasCleaning,
    [makeOverrideKey('dammam', 'apartments-cleaning')]: dammamApartmentsCleaning,
    [makeOverrideKey('dammam', 'office-cleaning')]: dammamOfficeCleaning,
    [makeOverrideKey('dammam', 'furniture-cleaning')]: dammamFurnitureCleaning,
    [makeOverrideKey('dammam', 'auto-cleaning')]: dammamAutoCleaning,
    [makeOverrideKey('dammam', 'oven-cleaning')]: dammamOvenCleaning,
    [makeOverrideKey('dammam', 'councils-cleaning')]: dammamCouncilsCleaning,
    [makeOverrideKey('dammam', 'hourly-cleaning')]: dammamHourlyCleaning,
    [makeOverrideKey('dammam', 'restaurant-chimney-cleaning')]: dammamRestaurantChimneyCleaning,
    [makeOverrideKey('dammam', 'pest-control')]: dammamPestControl,
    [makeOverrideKey('dammam', 'pesticide-spraying')]: dammamPesticideSpraying,
    [makeOverrideKey('dammam', 'termite-control')]: dammamTermiteControl,
    [makeOverrideKey('dammam', 'bedbugs-control')]: dammamBedbugsControl,
    [makeOverrideKey('dammam', 'bird-control')]: dammamBirdControl,
    [makeOverrideKey('dammam', 'water-leak-detection')]: dammamWaterLeakDetection,
    [makeOverrideKey('dammam', 'tank-leak-detection')]: dammamTankLeakDetection,
    [makeOverrideKey('dammam', 'bathroom-leak-detection')]: dammamBathroomLeakDetection,
    [makeOverrideKey('dammam', 'roof-insulation')]: dammamRoofInsulation,
    [makeOverrideKey('dammam', 'tank-insulation')]: dammamTankInsulation,
    [makeOverrideKey('dammam', 'foam-insulation')]: dammamFoamInsulation,
    [makeOverrideKey('dammam', 'water-insulation')]: dammamWaterInsulation,
    [makeOverrideKey('dammam', 'thermal-insulation')]: dammamThermalInsulation,
    [makeOverrideKey('dammam', 'sewage-unblocking')]: dammamSewageUnblocking,
    [makeOverrideKey('dammam', 'sewage-suction')]: dammamSewageSuction,

    // ─── al-khobar (50) ───
    [makeOverrideKey('al-khobar', 'furniture-moving')]: alKhobarFurnitureMoving,
    [makeOverrideKey('al-khobar', 'furniture-storage')]: alKhobarFurnitureStorage,
    [makeOverrideKey('al-khobar', 'dyna')]: alKhobarDyna,
    [makeOverrideKey('al-khobar', 'dabab')]: alKhobarDabab,
    [makeOverrideKey('al-khobar', 'cleaning')]: alKhobarCleaning,
    [makeOverrideKey('al-khobar', 'tanks-cleaning')]: alKhobarTanksCleaning,
    [makeOverrideKey('al-khobar', 'sofa-cleaning')]: alKhobarSofaCleaning,
    [makeOverrideKey('al-khobar', 'carpet-cleaning')]: alKhobarCarpetCleaning,
    [makeOverrideKey('al-khobar', 'steam-cleaning')]: alKhobarSteamCleaning,
    [makeOverrideKey('al-khobar', 'air-conditioner-cleaning')]: alKhobarAirConditionerCleaning,
    [makeOverrideKey('al-khobar', 'swimming-pool-cleaning')]: alKhobarSwimmingPoolCleaning,
    [makeOverrideKey('al-khobar', 'glass-facades-cleaning')]: alKhobarGlassFacadesCleaning,
    [makeOverrideKey('al-khobar', 'marble-polishing')]: alKhobarMarblePolishing,
    [makeOverrideKey('al-khobar', 'villas-cleaning')]: alKhobarVillasCleaning,
    [makeOverrideKey('al-khobar', 'apartments-cleaning')]: alKhobarApartmentsCleaning,
    [makeOverrideKey('al-khobar', 'office-cleaning')]: alKhobarOfficeCleaning,
    [makeOverrideKey('al-khobar', 'furniture-cleaning')]: alKhobarFurnitureCleaning,
    [makeOverrideKey('al-khobar', 'auto-cleaning')]: alKhobarAutoCleaning,
    [makeOverrideKey('al-khobar', 'oven-cleaning')]: alKhobarOvenCleaning,
    [makeOverrideKey('al-khobar', 'councils-cleaning')]: alKhobarCouncilsCleaning,
    [makeOverrideKey('al-khobar', 'hourly-cleaning')]: alKhobarHourlyCleaning,
    [makeOverrideKey('al-khobar', 'restaurant-chimney-cleaning')]: alKhobarRestaurantChimneyCleaning,
    [makeOverrideKey('al-khobar', 'pest-control')]: alKhobarPestControl,
    [makeOverrideKey('al-khobar', 'pesticide-spraying')]: alKhobarPesticideSpraying,
    [makeOverrideKey('al-khobar', 'termite-control')]: alKhobarTermiteControl,
    [makeOverrideKey('al-khobar', 'bedbugs-control')]: alKhobarBedbugsControl,
    [makeOverrideKey('al-khobar', 'bird-control')]: alKhobarBirdControl,
    [makeOverrideKey('al-khobar', 'water-leak-detection')]: alKhobarWaterLeakDetection,
    [makeOverrideKey('al-khobar', 'tank-leak-detection')]: alKhobarTankLeakDetection,
    [makeOverrideKey('al-khobar', 'bathroom-leak-detection')]: alKhobarBathroomLeakDetection,
    [makeOverrideKey('al-khobar', 'roof-insulation')]: alKhobarRoofInsulation,
    [makeOverrideKey('al-khobar', 'tank-insulation')]: alKhobarTankInsulation,
    [makeOverrideKey('al-khobar', 'foam-insulation')]: alKhobarFoamInsulation,
    [makeOverrideKey('al-khobar', 'water-insulation')]: alKhobarWaterInsulation,
    [makeOverrideKey('al-khobar', 'thermal-insulation')]: alKhobarThermalInsulation,
    [makeOverrideKey('al-khobar', 'sewage-unblocking')]: alKhobarSewageUnblocking,
    [makeOverrideKey('al-khobar', 'sewage-suction')]: alKhobarSewageSuction,

    // ─── dhahran (50) ───
    [makeOverrideKey('dhahran', 'furniture-moving')]: dhahranFurnitureMoving,
    [makeOverrideKey('dhahran', 'furniture-storage')]: dhahranFurnitureStorage,
    [makeOverrideKey('dhahran', 'dyna')]: dhahranDyna,
    [makeOverrideKey('dhahran', 'dabab')]: dhahranDabab,
    [makeOverrideKey('dhahran', 'cleaning')]: dhahranCleaning,
    [makeOverrideKey('dhahran', 'tanks-cleaning')]: dhahranTanksCleaning,
    [makeOverrideKey('dhahran', 'sofa-cleaning')]: dhahranSofaCleaning,
    [makeOverrideKey('dhahran', 'carpet-cleaning')]: dhahranCarpetCleaning,
    [makeOverrideKey('dhahran', 'steam-cleaning')]: dhahranSteamCleaning,
    [makeOverrideKey('dhahran', 'air-conditioner-cleaning')]: dhahranAirConditionerCleaning,
    [makeOverrideKey('dhahran', 'swimming-pool-cleaning')]: dhahranSwimmingPoolCleaning,
    [makeOverrideKey('dhahran', 'glass-facades-cleaning')]: dhahranGlassFacadesCleaning,
    [makeOverrideKey('dhahran', 'marble-polishing')]: dhahranMarblePolishing,
    [makeOverrideKey('dhahran', 'villas-cleaning')]: dhahranVillasCleaning,
    [makeOverrideKey('dhahran', 'apartments-cleaning')]: dhahranApartmentsCleaning,
    [makeOverrideKey('dhahran', 'office-cleaning')]: dhahranOfficeCleaning,
    [makeOverrideKey('dhahran', 'furniture-cleaning')]: dhahranFurnitureCleaning,
    [makeOverrideKey('dhahran', 'auto-cleaning')]: dhahranAutoCleaning,
    [makeOverrideKey('dhahran', 'oven-cleaning')]: dhahranOvenCleaning,
    [makeOverrideKey('dhahran', 'councils-cleaning')]: dhahranCouncilsCleaning,
    [makeOverrideKey('dhahran', 'hourly-cleaning')]: dhahranHourlyCleaning,
    [makeOverrideKey('dhahran', 'restaurant-chimney-cleaning')]: dhahranRestaurantChimneyCleaning,
    [makeOverrideKey('dhahran', 'pest-control')]: dhahranPestControl,
    [makeOverrideKey('dhahran', 'pesticide-spraying')]: dhahranPesticideSpraying,
    [makeOverrideKey('dhahran', 'termite-control')]: dhahranTermiteControl,
    [makeOverrideKey('dhahran', 'bedbugs-control')]: dhahranBedbugsControl,
    [makeOverrideKey('dhahran', 'bird-control')]: dhahranBirdControl,
    [makeOverrideKey('dhahran', 'water-leak-detection')]: dhahranWaterLeakDetection,
    [makeOverrideKey('dhahran', 'tank-leak-detection')]: dhahranTankLeakDetection,
    [makeOverrideKey('dhahran', 'bathroom-leak-detection')]: dhahranBathroomLeakDetection,
    [makeOverrideKey('dhahran', 'roof-insulation')]: dhahranRoofInsulation,
    [makeOverrideKey('dhahran', 'tank-insulation')]: dhahranTankInsulation,
    [makeOverrideKey('dhahran', 'foam-insulation')]: dhahranFoamInsulation,
    [makeOverrideKey('dhahran', 'water-insulation')]: dhahranWaterInsulation,
    [makeOverrideKey('dhahran', 'thermal-insulation')]: dhahranThermalInsulation,
    [makeOverrideKey('dhahran', 'sewage-unblocking')]: dhahranSewageUnblocking,
    [makeOverrideKey('dhahran', 'sewage-suction')]: dhahranSewageSuction,

    // ─── jubail (50) ───
    [makeOverrideKey('jubail', 'furniture-moving')]: jubailFurnitureMoving,
    [makeOverrideKey('jubail', 'furniture-storage')]: jubailFurnitureStorage,
    [makeOverrideKey('jubail', 'dyna')]: jubailDyna,
    [makeOverrideKey('jubail', 'dabab')]: jubailDabab,
    [makeOverrideKey('jubail', 'cleaning')]: jubailCleaning,
    [makeOverrideKey('jubail', 'tanks-cleaning')]: jubailTanksCleaning,
    [makeOverrideKey('jubail', 'sofa-cleaning')]: jubailSofaCleaning,
    [makeOverrideKey('jubail', 'carpet-cleaning')]: jubailCarpetCleaning,
    [makeOverrideKey('jubail', 'steam-cleaning')]: jubailSteamCleaning,
    [makeOverrideKey('jubail', 'air-conditioner-cleaning')]: jubailAirConditionerCleaning,
    [makeOverrideKey('jubail', 'swimming-pool-cleaning')]: jubailSwimmingPoolCleaning,
    [makeOverrideKey('jubail', 'glass-facades-cleaning')]: jubailGlassFacadesCleaning,
    [makeOverrideKey('jubail', 'marble-polishing')]: jubailMarblePolishing,
    [makeOverrideKey('jubail', 'villas-cleaning')]: jubailVillasCleaning,
    [makeOverrideKey('jubail', 'apartments-cleaning')]: jubailApartmentsCleaning,
    [makeOverrideKey('jubail', 'office-cleaning')]: jubailOfficeCleaning,
    [makeOverrideKey('jubail', 'furniture-cleaning')]: jubailFurnitureCleaning,
    [makeOverrideKey('jubail', 'auto-cleaning')]: jubailAutoCleaning,
    [makeOverrideKey('jubail', 'oven-cleaning')]: jubailOvenCleaning,
    [makeOverrideKey('jubail', 'councils-cleaning')]: jubailCouncilsCleaning,
    [makeOverrideKey('jubail', 'hourly-cleaning')]: jubailHourlyCleaning,
    [makeOverrideKey('jubail', 'restaurant-chimney-cleaning')]: jubailRestaurantChimneyCleaning,
    [makeOverrideKey('jubail', 'pest-control')]: jubailPestControl,
    [makeOverrideKey('jubail', 'pesticide-spraying')]: jubailPesticideSpraying,
    [makeOverrideKey('jubail', 'termite-control')]: jubailTermiteControl,
    [makeOverrideKey('jubail', 'bedbugs-control')]: jubailBedbugsControl,
    [makeOverrideKey('jubail', 'bird-control')]: jubailBirdControl,
    [makeOverrideKey('jubail', 'water-leak-detection')]: jubailWaterLeakDetection,
    [makeOverrideKey('jubail', 'tank-leak-detection')]: jubailTankLeakDetection,
    [makeOverrideKey('jubail', 'bathroom-leak-detection')]: jubailBathroomLeakDetection,
    [makeOverrideKey('jubail', 'roof-insulation')]: jubailRoofInsulation,
    [makeOverrideKey('jubail', 'tank-insulation')]: jubailTankInsulation,
    [makeOverrideKey('jubail', 'foam-insulation')]: jubailFoamInsulation,
    [makeOverrideKey('jubail', 'water-insulation')]: jubailWaterInsulation,
    [makeOverrideKey('jubail', 'thermal-insulation')]: jubailThermalInsulation,
    [makeOverrideKey('jubail', 'sewage-unblocking')]: jubailSewageUnblocking,
    [makeOverrideKey('jubail', 'sewage-suction')]: jubailSewageSuction,

    // ─── al-ahsa (50) ───
    [makeOverrideKey('al-ahsa', 'furniture-moving')]: alAhsaFurnitureMoving,
    [makeOverrideKey('al-ahsa', 'furniture-storage')]: alAhsaFurnitureStorage,
    [makeOverrideKey('al-ahsa', 'dyna')]: alAhsaDyna,
    [makeOverrideKey('al-ahsa', 'dabab')]: alAhsaDabab,
    [makeOverrideKey('al-ahsa', 'cleaning')]: alAhsaCleaning,
    [makeOverrideKey('al-ahsa', 'tanks-cleaning')]: alAhsaTanksCleaning,
    [makeOverrideKey('al-ahsa', 'sofa-cleaning')]: alAhsaSofaCleaning,
    [makeOverrideKey('al-ahsa', 'carpet-cleaning')]: alAhsaCarpetCleaning,
    [makeOverrideKey('al-ahsa', 'steam-cleaning')]: alAhsaSteamCleaning,
    [makeOverrideKey('al-ahsa', 'air-conditioner-cleaning')]: alAhsaAirConditionerCleaning,
    [makeOverrideKey('al-ahsa', 'swimming-pool-cleaning')]: alAhsaSwimmingPoolCleaning,
    [makeOverrideKey('al-ahsa', 'glass-facades-cleaning')]: alAhsaGlassFacadesCleaning,
    [makeOverrideKey('al-ahsa', 'marble-polishing')]: alAhsaMarblePolishing,
    [makeOverrideKey('al-ahsa', 'villas-cleaning')]: alAhsaVillasCleaning,
    [makeOverrideKey('al-ahsa', 'apartments-cleaning')]: alAhsaApartmentsCleaning,
    [makeOverrideKey('al-ahsa', 'office-cleaning')]: alAhsaOfficeCleaning,
    [makeOverrideKey('al-ahsa', 'furniture-cleaning')]: alAhsaFurnitureCleaning,
    [makeOverrideKey('al-ahsa', 'auto-cleaning')]: alAhsaAutoCleaning,
    [makeOverrideKey('al-ahsa', 'oven-cleaning')]: alAhsaOvenCleaning,
    [makeOverrideKey('al-ahsa', 'councils-cleaning')]: alAhsaCouncilsCleaning,
    [makeOverrideKey('al-ahsa', 'hourly-cleaning')]: alAhsaHourlyCleaning,
    [makeOverrideKey('al-ahsa', 'restaurant-chimney-cleaning')]: alAhsaRestaurantChimneyCleaning,
    [makeOverrideKey('al-ahsa', 'pest-control')]: alAhsaPestControl,
    [makeOverrideKey('al-ahsa', 'pesticide-spraying')]: alAhsaPesticideSpraying,
    [makeOverrideKey('al-ahsa', 'termite-control')]: alAhsaTermiteControl,
    [makeOverrideKey('al-ahsa', 'bedbugs-control')]: alAhsaBedbugsControl,
    [makeOverrideKey('al-ahsa', 'bird-control')]: alAhsaBirdControl,
    [makeOverrideKey('al-ahsa', 'water-leak-detection')]: alAhsaWaterLeakDetection,
    [makeOverrideKey('al-ahsa', 'tank-leak-detection')]: alAhsaTankLeakDetection,
    [makeOverrideKey('al-ahsa', 'bathroom-leak-detection')]: alAhsaBathroomLeakDetection,
    [makeOverrideKey('al-ahsa', 'roof-insulation')]: alAhsaRoofInsulation,
    [makeOverrideKey('al-ahsa', 'tank-insulation')]: alAhsaTankInsulation,
    [makeOverrideKey('al-ahsa', 'foam-insulation')]: alAhsaFoamInsulation,
    [makeOverrideKey('al-ahsa', 'water-insulation')]: alAhsaWaterInsulation,
    [makeOverrideKey('al-ahsa', 'thermal-insulation')]: alAhsaThermalInsulation,
    [makeOverrideKey('al-ahsa', 'sewage-unblocking')]: alAhsaSewageUnblocking,
    [makeOverrideKey('al-ahsa', 'sewage-suction')]: alAhsaSewageSuction,

    // ─── qatif (50) ───
    [makeOverrideKey('qatif', 'furniture-moving')]: qatifFurnitureMoving,
    [makeOverrideKey('qatif', 'furniture-storage')]: qatifFurnitureStorage,
    [makeOverrideKey('qatif', 'dyna')]: qatifDyna,
    [makeOverrideKey('qatif', 'dabab')]: qatifDabab,
    [makeOverrideKey('qatif', 'cleaning')]: qatifCleaning,
    [makeOverrideKey('qatif', 'tanks-cleaning')]: qatifTanksCleaning,
    [makeOverrideKey('qatif', 'sofa-cleaning')]: qatifSofaCleaning,
    [makeOverrideKey('qatif', 'carpet-cleaning')]: qatifCarpetCleaning,
    [makeOverrideKey('qatif', 'steam-cleaning')]: qatifSteamCleaning,
    [makeOverrideKey('qatif', 'air-conditioner-cleaning')]: qatifAirConditionerCleaning,
    [makeOverrideKey('qatif', 'swimming-pool-cleaning')]: qatifSwimmingPoolCleaning,
    [makeOverrideKey('qatif', 'glass-facades-cleaning')]: qatifGlassFacadesCleaning,
    [makeOverrideKey('qatif', 'marble-polishing')]: qatifMarblePolishing,
    [makeOverrideKey('qatif', 'villas-cleaning')]: qatifVillasCleaning,
    [makeOverrideKey('qatif', 'apartments-cleaning')]: qatifApartmentsCleaning,
    [makeOverrideKey('qatif', 'office-cleaning')]: qatifOfficeCleaning,
    [makeOverrideKey('qatif', 'furniture-cleaning')]: qatifFurnitureCleaning,
    [makeOverrideKey('qatif', 'auto-cleaning')]: qatifAutoCleaning,
    [makeOverrideKey('qatif', 'oven-cleaning')]: qatifOvenCleaning,
    [makeOverrideKey('qatif', 'councils-cleaning')]: qatifCouncilsCleaning,
    [makeOverrideKey('qatif', 'hourly-cleaning')]: qatifHourlyCleaning,
    [makeOverrideKey('qatif', 'restaurant-chimney-cleaning')]: qatifRestaurantChimneyCleaning,
    [makeOverrideKey('qatif', 'pest-control')]: qatifPestControl,
    [makeOverrideKey('qatif', 'pesticide-spraying')]: qatifPesticideSpraying,
    [makeOverrideKey('qatif', 'termite-control')]: qatifTermiteControl,
    [makeOverrideKey('qatif', 'bedbugs-control')]: qatifBedbugsControl,
    [makeOverrideKey('qatif', 'bird-control')]: qatifBirdControl,
    [makeOverrideKey('qatif', 'water-leak-detection')]: qatifWaterLeakDetection,
    [makeOverrideKey('qatif', 'tank-leak-detection')]: qatifTankLeakDetection,
    [makeOverrideKey('qatif', 'bathroom-leak-detection')]: qatifBathroomLeakDetection,
    [makeOverrideKey('qatif', 'roof-insulation')]: qatifRoofInsulation,
    [makeOverrideKey('qatif', 'tank-insulation')]: qatifTankInsulation,
    [makeOverrideKey('qatif', 'foam-insulation')]: qatifFoamInsulation,
    [makeOverrideKey('qatif', 'water-insulation')]: qatifWaterInsulation,
    [makeOverrideKey('qatif', 'thermal-insulation')]: qatifThermalInsulation,
    [makeOverrideKey('qatif', 'sewage-unblocking')]: qatifSewageUnblocking,
    [makeOverrideKey('qatif', 'sewage-suction')]: qatifSewageSuction,

    // ─── hafr-albatin (50) ───
    [makeOverrideKey('hafr-albatin', 'furniture-moving')]: hafrAlbatinFurnitureMoving,
    [makeOverrideKey('hafr-albatin', 'furniture-storage')]: hafrAlbatinFurnitureStorage,
    [makeOverrideKey('hafr-albatin', 'dyna')]: hafrAlbatinDyna,
    [makeOverrideKey('hafr-albatin', 'dabab')]: hafrAlbatinDabab,
    [makeOverrideKey('hafr-albatin', 'cleaning')]: hafrAlbatinCleaning,
    [makeOverrideKey('hafr-albatin', 'tanks-cleaning')]: hafrAlbatinTanksCleaning,
    [makeOverrideKey('hafr-albatin', 'sofa-cleaning')]: hafrAlbatinSofaCleaning,
    [makeOverrideKey('hafr-albatin', 'carpet-cleaning')]: hafrAlbatinCarpetCleaning,
    [makeOverrideKey('hafr-albatin', 'steam-cleaning')]: hafrAlbatinSteamCleaning,
    [makeOverrideKey('hafr-albatin', 'air-conditioner-cleaning')]: hafrAlbatinAirConditionerCleaning,
    [makeOverrideKey('hafr-albatin', 'swimming-pool-cleaning')]: hafrAlbatinSwimmingPoolCleaning,
    [makeOverrideKey('hafr-albatin', 'glass-facades-cleaning')]: hafrAlbatinGlassFacadesCleaning,
    [makeOverrideKey('hafr-albatin', 'marble-polishing')]: hafrAlbatinMarblePolishing,
    [makeOverrideKey('hafr-albatin', 'villas-cleaning')]: hafrAlbatinVillasCleaning,
    [makeOverrideKey('hafr-albatin', 'apartments-cleaning')]: hafrAlbatinApartmentsCleaning,
    [makeOverrideKey('hafr-albatin', 'office-cleaning')]: hafrAlbatinOfficeCleaning,
    [makeOverrideKey('hafr-albatin', 'furniture-cleaning')]: hafrAlbatinFurnitureCleaning,
    [makeOverrideKey('hafr-albatin', 'auto-cleaning')]: hafrAlbatinAutoCleaning,
    [makeOverrideKey('hafr-albatin', 'oven-cleaning')]: hafrAlbatinOvenCleaning,
    [makeOverrideKey('hafr-albatin', 'councils-cleaning')]: hafrAlbatinCouncilsCleaning,
    [makeOverrideKey('hafr-albatin', 'hourly-cleaning')]: hafrAlbatinHourlyCleaning,
    [makeOverrideKey('hafr-albatin', 'restaurant-chimney-cleaning')]: hafrAlbatinRestaurantChimneyCleaning,
    [makeOverrideKey('hafr-albatin', 'pest-control')]: hafrAlbatinPestControl,
    [makeOverrideKey('hafr-albatin', 'pesticide-spraying')]: hafrAlbatinPesticideSpraying,
    [makeOverrideKey('hafr-albatin', 'termite-control')]: hafrAlbatinTermiteControl,
    [makeOverrideKey('hafr-albatin', 'bedbugs-control')]: hafrAlbatinBedbugsControl,
    [makeOverrideKey('hafr-albatin', 'bird-control')]: hafrAlbatinBirdControl,
    [makeOverrideKey('hafr-albatin', 'water-leak-detection')]: hafrAlbatinWaterLeakDetection,
    [makeOverrideKey('hafr-albatin', 'tank-leak-detection')]: hafrAlbatinTankLeakDetection,
    [makeOverrideKey('hafr-albatin', 'bathroom-leak-detection')]: hafrAlbatinBathroomLeakDetection,
    [makeOverrideKey('hafr-albatin', 'roof-insulation')]: hafrAlbatinRoofInsulation,
    [makeOverrideKey('hafr-albatin', 'tank-insulation')]: hafrAlbatinTankInsulation,
    [makeOverrideKey('hafr-albatin', 'foam-insulation')]: hafrAlbatinFoamInsulation,
    [makeOverrideKey('hafr-albatin', 'water-insulation')]: hafrAlbatinWaterInsulation,
    [makeOverrideKey('hafr-albatin', 'thermal-insulation')]: hafrAlbatinThermalInsulation,
    [makeOverrideKey('hafr-albatin', 'sewage-unblocking')]: hafrAlbatinSewageUnblocking,
    [makeOverrideKey('hafr-albatin', 'sewage-suction')]: hafrAlbatinSewageSuction,

    // ═══ NORTHERN REGION ═══

    // ─── tabuk (50) ───
    [makeOverrideKey('tabuk', 'furniture-moving')]: tabukFurnitureMoving,
    [makeOverrideKey('tabuk', 'furniture-storage')]: tabukFurnitureStorage,
    [makeOverrideKey('tabuk', 'dyna')]: tabukDyna,
    [makeOverrideKey('tabuk', 'dabab')]: tabukDabab,
    [makeOverrideKey('tabuk', 'cleaning')]: tabukCleaning,
    [makeOverrideKey('tabuk', 'tanks-cleaning')]: tabukTanksCleaning,
    [makeOverrideKey('tabuk', 'sofa-cleaning')]: tabukSofaCleaning,
    [makeOverrideKey('tabuk', 'carpet-cleaning')]: tabukCarpetCleaning,
    [makeOverrideKey('tabuk', 'steam-cleaning')]: tabukSteamCleaning,
    [makeOverrideKey('tabuk', 'air-conditioner-cleaning')]: tabukAirConditionerCleaning,
    [makeOverrideKey('tabuk', 'swimming-pool-cleaning')]: tabukSwimmingPoolCleaning,
    [makeOverrideKey('tabuk', 'glass-facades-cleaning')]: tabukGlassFacadesCleaning,
    [makeOverrideKey('tabuk', 'marble-polishing')]: tabukMarblePolishing,
    [makeOverrideKey('tabuk', 'villas-cleaning')]: tabukVillasCleaning,
    [makeOverrideKey('tabuk', 'apartments-cleaning')]: tabukApartmentsCleaning,
    [makeOverrideKey('tabuk', 'office-cleaning')]: tabukOfficeCleaning,
    [makeOverrideKey('tabuk', 'furniture-cleaning')]: tabukFurnitureCleaning,
    [makeOverrideKey('tabuk', 'auto-cleaning')]: tabukAutoCleaning,
    [makeOverrideKey('tabuk', 'oven-cleaning')]: tabukOvenCleaning,
    [makeOverrideKey('tabuk', 'councils-cleaning')]: tabukCouncilsCleaning,
    [makeOverrideKey('tabuk', 'hourly-cleaning')]: tabukHourlyCleaning,
    [makeOverrideKey('tabuk', 'restaurant-chimney-cleaning')]: tabukRestaurantChimneyCleaning,
    [makeOverrideKey('tabuk', 'pest-control')]: tabukPestControl,
    [makeOverrideKey('tabuk', 'pesticide-spraying')]: tabukPesticideSpraying,
    [makeOverrideKey('tabuk', 'termite-control')]: tabukTermiteControl,
    [makeOverrideKey('tabuk', 'bedbugs-control')]: tabukBedbugsControl,
    [makeOverrideKey('tabuk', 'bird-control')]: tabukBirdControl,
    [makeOverrideKey('tabuk', 'water-leak-detection')]: tabukWaterLeakDetection,
    [makeOverrideKey('tabuk', 'tank-leak-detection')]: tabukTankLeakDetection,
    [makeOverrideKey('tabuk', 'bathroom-leak-detection')]: tabukBathroomLeakDetection,
    [makeOverrideKey('tabuk', 'roof-insulation')]: tabukRoofInsulation,
    [makeOverrideKey('tabuk', 'tank-insulation')]: tabukTankInsulation,
    [makeOverrideKey('tabuk', 'foam-insulation')]: tabukFoamInsulation,
    [makeOverrideKey('tabuk', 'water-insulation')]: tabukWaterInsulation,
    [makeOverrideKey('tabuk', 'thermal-insulation')]: tabukThermalInsulation,
    [makeOverrideKey('tabuk', 'sewage-unblocking')]: tabukSewageUnblocking,
    [makeOverrideKey('tabuk', 'sewage-suction')]: tabukSewageSuction,

    // ─── hail (50) ───
    [makeOverrideKey('hail', 'furniture-moving')]: hailFurnitureMoving,
    [makeOverrideKey('hail', 'furniture-storage')]: hailFurnitureStorage,
    [makeOverrideKey('hail', 'dyna')]: hailDyna,
    [makeOverrideKey('hail', 'dabab')]: hailDabab,
    [makeOverrideKey('hail', 'cleaning')]: hailCleaning,
    [makeOverrideKey('hail', 'tanks-cleaning')]: hailTanksCleaning,
    [makeOverrideKey('hail', 'sofa-cleaning')]: hailSofaCleaning,
    [makeOverrideKey('hail', 'carpet-cleaning')]: hailCarpetCleaning,
    [makeOverrideKey('hail', 'steam-cleaning')]: hailSteamCleaning,
    [makeOverrideKey('hail', 'air-conditioner-cleaning')]: hailAirConditionerCleaning,
    [makeOverrideKey('hail', 'swimming-pool-cleaning')]: hailSwimmingPoolCleaning,
    [makeOverrideKey('hail', 'glass-facades-cleaning')]: hailGlassFacadesCleaning,
    [makeOverrideKey('hail', 'marble-polishing')]: hailMarblePolishing,
    [makeOverrideKey('hail', 'villas-cleaning')]: hailVillasCleaning,
    [makeOverrideKey('hail', 'apartments-cleaning')]: hailApartmentsCleaning,
    [makeOverrideKey('hail', 'office-cleaning')]: hailOfficeCleaning,
    [makeOverrideKey('hail', 'furniture-cleaning')]: hailFurnitureCleaning,
    [makeOverrideKey('hail', 'auto-cleaning')]: hailAutoCleaning,
    [makeOverrideKey('hail', 'oven-cleaning')]: hailOvenCleaning,
    [makeOverrideKey('hail', 'councils-cleaning')]: hailCouncilsCleaning,
    [makeOverrideKey('hail', 'hourly-cleaning')]: hailHourlyCleaning,
    [makeOverrideKey('hail', 'restaurant-chimney-cleaning')]: hailRestaurantChimneyCleaning,
    [makeOverrideKey('hail', 'pest-control')]: hailPestControl,
    [makeOverrideKey('hail', 'pesticide-spraying')]: hailPesticideSpraying,
    [makeOverrideKey('hail', 'termite-control')]: hailTermiteControl,
    [makeOverrideKey('hail', 'bedbugs-control')]: hailBedbugsControl,
    [makeOverrideKey('hail', 'bird-control')]: hailBirdControl,
    [makeOverrideKey('hail', 'water-leak-detection')]: hailWaterLeakDetection,
    [makeOverrideKey('hail', 'tank-leak-detection')]: hailTankLeakDetection,
    [makeOverrideKey('hail', 'bathroom-leak-detection')]: hailBathroomLeakDetection,
    [makeOverrideKey('hail', 'roof-insulation')]: hailRoofInsulation,
    [makeOverrideKey('hail', 'tank-insulation')]: hailTankInsulation,
    [makeOverrideKey('hail', 'foam-insulation')]: hailFoamInsulation,
    [makeOverrideKey('hail', 'water-insulation')]: hailWaterInsulation,
    [makeOverrideKey('hail', 'thermal-insulation')]: hailThermalInsulation,
    [makeOverrideKey('hail', 'sewage-unblocking')]: hailSewageUnblocking,
    [makeOverrideKey('hail', 'sewage-suction')]: hailSewageSuction,

    // ═══ SOUTHERN REGION ═══

    // ─── abha (50) ───
    [makeOverrideKey('abha', 'furniture-moving')]: abhaFurnitureMoving,
    [makeOverrideKey('abha', 'furniture-storage')]: abhaFurnitureStorage,
    [makeOverrideKey('abha', 'dyna')]: abhaDyna,
    [makeOverrideKey('abha', 'dabab')]: abhaDabab,
    [makeOverrideKey('abha', 'cleaning')]: abhaCleaning,
    [makeOverrideKey('abha', 'tanks-cleaning')]: abhaTanksCleaning,
    [makeOverrideKey('abha', 'sofa-cleaning')]: abhaSofaCleaning,
    [makeOverrideKey('abha', 'carpet-cleaning')]: abhaCarpetCleaning,
    [makeOverrideKey('abha', 'steam-cleaning')]: abhaSteamCleaning,
    [makeOverrideKey('abha', 'air-conditioner-cleaning')]: abhaAirConditionerCleaning,
    [makeOverrideKey('abha', 'swimming-pool-cleaning')]: abhaSwimmingPoolCleaning,
    [makeOverrideKey('abha', 'glass-facades-cleaning')]: abhaGlassFacadesCleaning,
    [makeOverrideKey('abha', 'marble-polishing')]: abhaMarblePolishing,
    [makeOverrideKey('abha', 'villas-cleaning')]: abhaVillasCleaning,
    [makeOverrideKey('abha', 'apartments-cleaning')]: abhaApartmentsCleaning,
    [makeOverrideKey('abha', 'office-cleaning')]: abhaOfficeCleaning,
    [makeOverrideKey('abha', 'furniture-cleaning')]: abhaFurnitureCleaning,
    [makeOverrideKey('abha', 'auto-cleaning')]: abhaAutoCleaning,
    [makeOverrideKey('abha', 'oven-cleaning')]: abhaOvenCleaning,
    [makeOverrideKey('abha', 'councils-cleaning')]: abhaCouncilsCleaning,
    [makeOverrideKey('abha', 'hourly-cleaning')]: abhaHourlyCleaning,
    [makeOverrideKey('abha', 'restaurant-chimney-cleaning')]: abhaRestaurantChimneyCleaning,
    [makeOverrideKey('abha', 'pest-control')]: abhaPestControl,
    [makeOverrideKey('abha', 'pesticide-spraying')]: abhaPesticideSpraying,
    [makeOverrideKey('abha', 'termite-control')]: abhaTermiteControl,
    [makeOverrideKey('abha', 'bedbugs-control')]: abhaBedbugsControl,
    [makeOverrideKey('abha', 'bird-control')]: abhaBirdControl,
    [makeOverrideKey('abha', 'water-leak-detection')]: abhaWaterLeakDetection,
    [makeOverrideKey('abha', 'tank-leak-detection')]: abhaTankLeakDetection,
    [makeOverrideKey('abha', 'bathroom-leak-detection')]: abhaBathroomLeakDetection,
    [makeOverrideKey('abha', 'roof-insulation')]: abhaRoofInsulation,
    [makeOverrideKey('abha', 'tank-insulation')]: abhaTankInsulation,
    [makeOverrideKey('abha', 'foam-insulation')]: abhaFoamInsulation,
    [makeOverrideKey('abha', 'water-insulation')]: abhaWaterInsulation,
    [makeOverrideKey('abha', 'thermal-insulation')]: abhaThermalInsulation,
    [makeOverrideKey('abha', 'sewage-unblocking')]: abhaSewageUnblocking,
    [makeOverrideKey('abha', 'sewage-suction')]: abhaSewageSuction,
    [makeOverrideKey('abha', 'floor-polishing')]: abhaFloorPolishing,

    // ─── khamis-mushait (50) ───
    [makeOverrideKey('khamis-mushait', 'furniture-moving')]: khamisMushaitFurnitureMoving,
    [makeOverrideKey('khamis-mushait', 'furniture-storage')]: khamisMushaitFurnitureStorage,
    [makeOverrideKey('khamis-mushait', 'dyna')]: khamisMushaitDyna,
    [makeOverrideKey('khamis-mushait', 'dabab')]: khamisMushaitDabab,
    [makeOverrideKey('khamis-mushait', 'cleaning')]: khamisMushaitCleaning,
    [makeOverrideKey('khamis-mushait', 'tanks-cleaning')]: khamisMushaitTanksCleaning,
    [makeOverrideKey('khamis-mushait', 'sofa-cleaning')]: khamisMushaitSofaCleaning,
    [makeOverrideKey('khamis-mushait', 'carpet-cleaning')]: khamisMushaitCarpetCleaning,
    [makeOverrideKey('khamis-mushait', 'steam-cleaning')]: khamisMushaitSteamCleaning,
    [makeOverrideKey('khamis-mushait', 'air-conditioner-cleaning')]: khamisMushaitAirConditionerCleaning,
    [makeOverrideKey('khamis-mushait', 'swimming-pool-cleaning')]: khamisMushaitSwimmingPoolCleaning,
    [makeOverrideKey('khamis-mushait', 'glass-facades-cleaning')]: khamisMushaitGlassFacadesCleaning,
    [makeOverrideKey('khamis-mushait', 'marble-polishing')]: khamisMushaitMarblePolishing,
    [makeOverrideKey('khamis-mushait', 'villas-cleaning')]: khamisMushaitVillasCleaning,
    [makeOverrideKey('khamis-mushait', 'apartments-cleaning')]: khamisMushaitApartmentsCleaning,
    [makeOverrideKey('khamis-mushait', 'office-cleaning')]: khamisMushaitOfficeCleaning,
    [makeOverrideKey('khamis-mushait', 'furniture-cleaning')]: khamisMushaitFurnitureCleaning,
    [makeOverrideKey('khamis-mushait', 'auto-cleaning')]: khamisMushaitAutoCleaning,
    [makeOverrideKey('khamis-mushait', 'oven-cleaning')]: khamisMushaitOvenCleaning,
    [makeOverrideKey('khamis-mushait', 'councils-cleaning')]: khamisMushaitCouncilsCleaning,
    [makeOverrideKey('khamis-mushait', 'hourly-cleaning')]: khamisMushaitHourlyCleaning,
    [makeOverrideKey('khamis-mushait', 'restaurant-chimney-cleaning')]: khamisMushaitRestaurantChimneyCleaning,
    [makeOverrideKey('khamis-mushait', 'pest-control')]: khamisMushaitPestControl,
    [makeOverrideKey('khamis-mushait', 'pesticide-spraying')]: khamisMushaitPesticideSpraying,
    [makeOverrideKey('khamis-mushait', 'termite-control')]: khamisMushaitTermiteControl,
    [makeOverrideKey('khamis-mushait', 'bedbugs-control')]: khamisMushaitBedbugsControl,
    [makeOverrideKey('khamis-mushait', 'bird-control')]: khamisMushaitBirdControl,
    [makeOverrideKey('khamis-mushait', 'water-leak-detection')]: khamisMushaitWaterLeakDetection,
    [makeOverrideKey('khamis-mushait', 'tank-leak-detection')]: khamisMushaitTankLeakDetection,
    [makeOverrideKey('khamis-mushait', 'bathroom-leak-detection')]: khamisMushaitBathroomLeakDetection,
    [makeOverrideKey('khamis-mushait', 'roof-insulation')]: khamisMushaitRoofInsulation,
    [makeOverrideKey('khamis-mushait', 'tank-insulation')]: khamisMushaitTankInsulation,
    [makeOverrideKey('khamis-mushait', 'foam-insulation')]: khamisMushaitFoamInsulation,
    [makeOverrideKey('khamis-mushait', 'water-insulation')]: khamisMushaitWaterInsulation,
    [makeOverrideKey('khamis-mushait', 'thermal-insulation')]: khamisMushaitThermalInsulation,
    [makeOverrideKey('khamis-mushait', 'sewage-unblocking')]: khamisMushaitSewageUnblocking,
    [makeOverrideKey('khamis-mushait', 'sewage-suction')]: khamisMushaitSewageSuction,

    // ─── najran (50) ───
    [makeOverrideKey('najran', 'furniture-moving')]: najranFurnitureMoving,
    [makeOverrideKey('najran', 'furniture-storage')]: najranFurnitureStorage,
    [makeOverrideKey('najran', 'dyna')]: najranDyna,
    [makeOverrideKey('najran', 'dabab')]: najranDabab,
    [makeOverrideKey('najran', 'cleaning')]: najranCleaning,
    [makeOverrideKey('najran', 'tanks-cleaning')]: najranTanksCleaning,
    [makeOverrideKey('najran', 'sofa-cleaning')]: najranSofaCleaning,
    [makeOverrideKey('najran', 'carpet-cleaning')]: najranCarpetCleaning,
    [makeOverrideKey('najran', 'steam-cleaning')]: najranSteamCleaning,
    [makeOverrideKey('najran', 'air-conditioner-cleaning')]: najranAirConditionerCleaning,
    [makeOverrideKey('najran', 'swimming-pool-cleaning')]: najranSwimmingPoolCleaning,
    [makeOverrideKey('najran', 'glass-facades-cleaning')]: najranGlassFacadesCleaning,
    [makeOverrideKey('najran', 'marble-polishing')]: najranMarblePolishing,
    [makeOverrideKey('najran', 'villas-cleaning')]: najranVillasCleaning,
    [makeOverrideKey('najran', 'apartments-cleaning')]: najranApartmentsCleaning,
    [makeOverrideKey('najran', 'office-cleaning')]: najranOfficeCleaning,
    [makeOverrideKey('najran', 'furniture-cleaning')]: najranFurnitureCleaning,
    [makeOverrideKey('najran', 'auto-cleaning')]: najranAutoCleaning,
    [makeOverrideKey('najran', 'oven-cleaning')]: najranOvenCleaning,
    [makeOverrideKey('najran', 'councils-cleaning')]: najranCouncilsCleaning,
    [makeOverrideKey('najran', 'hourly-cleaning')]: najranHourlyCleaning,
    [makeOverrideKey('najran', 'restaurant-chimney-cleaning')]: najranRestaurantChimneyCleaning,
    [makeOverrideKey('najran', 'pest-control')]: najranPestControl,
    [makeOverrideKey('najran', 'pesticide-spraying')]: najranPesticideSpraying,
    [makeOverrideKey('najran', 'termite-control')]: najranTermiteControl,
    [makeOverrideKey('najran', 'bedbugs-control')]: najranBedbugsControl,
    [makeOverrideKey('najran', 'bird-control')]: najranBirdControl,
    [makeOverrideKey('najran', 'water-leak-detection')]: najranWaterLeakDetection,
    [makeOverrideKey('najran', 'tank-leak-detection')]: najranTankLeakDetection,
    [makeOverrideKey('najran', 'bathroom-leak-detection')]: najranBathroomLeakDetection,
    [makeOverrideKey('najran', 'roof-insulation')]: najranRoofInsulation,
    [makeOverrideKey('najran', 'tank-insulation')]: najranTankInsulation,
    [makeOverrideKey('najran', 'foam-insulation')]: najranFoamInsulation,
    [makeOverrideKey('najran', 'water-insulation')]: najranWaterInsulation,
    [makeOverrideKey('najran', 'thermal-insulation')]: najranThermalInsulation,
    [makeOverrideKey('najran', 'sewage-unblocking')]: najranSewageUnblocking,
    [makeOverrideKey('najran', 'sewage-suction')]: najranSewageSuction,

    // ─── jazan (50) ───
    [makeOverrideKey('jazan', 'furniture-moving')]: jazanFurnitureMoving,
    [makeOverrideKey('jazan', 'furniture-storage')]: jazanFurnitureStorage,
    [makeOverrideKey('jazan', 'dyna')]: jazanDyna,
    [makeOverrideKey('jazan', 'dabab')]: jazanDabab,
    [makeOverrideKey('jazan', 'cleaning')]: jazanCleaning,
    [makeOverrideKey('jazan', 'tanks-cleaning')]: jazanTanksCleaning,
    [makeOverrideKey('jazan', 'sofa-cleaning')]: jazanSofaCleaning,
    [makeOverrideKey('jazan', 'carpet-cleaning')]: jazanCarpetCleaning,
    [makeOverrideKey('jazan', 'steam-cleaning')]: jazanSteamCleaning,
    [makeOverrideKey('jazan', 'air-conditioner-cleaning')]: jazanAirConditionerCleaning,
    [makeOverrideKey('jazan', 'swimming-pool-cleaning')]: jazanSwimmingPoolCleaning,
    [makeOverrideKey('jazan', 'glass-facades-cleaning')]: jazanGlassFacadesCleaning,
    [makeOverrideKey('jazan', 'marble-polishing')]: jazanMarblePolishing,
    [makeOverrideKey('jazan', 'villas-cleaning')]: jazanVillasCleaning,
    [makeOverrideKey('jazan', 'apartments-cleaning')]: jazanApartmentsCleaning,
    [makeOverrideKey('jazan', 'office-cleaning')]: jazanOfficeCleaning,
    [makeOverrideKey('jazan', 'furniture-cleaning')]: jazanFurnitureCleaning,
    [makeOverrideKey('jazan', 'auto-cleaning')]: jazanAutoCleaning,
    [makeOverrideKey('jazan', 'oven-cleaning')]: jazanOvenCleaning,
    [makeOverrideKey('jazan', 'councils-cleaning')]: jazanCouncilsCleaning,
    [makeOverrideKey('jazan', 'hourly-cleaning')]: jazanHourlyCleaning,
    [makeOverrideKey('jazan', 'restaurant-chimney-cleaning')]: jazanRestaurantChimneyCleaning,
    [makeOverrideKey('jazan', 'pest-control')]: jazanPestControl,
    [makeOverrideKey('jazan', 'pesticide-spraying')]: jazanPesticideSpraying,
    [makeOverrideKey('jazan', 'termite-control')]: jazanTermiteControl,
    [makeOverrideKey('jazan', 'bedbugs-control')]: jazanBedbugsControl,
    [makeOverrideKey('jazan', 'bird-control')]: jazanBirdControl,
    [makeOverrideKey('jazan', 'water-leak-detection')]: jazanWaterLeakDetection,
    [makeOverrideKey('jazan', 'tank-leak-detection')]: jazanTankLeakDetection,
    [makeOverrideKey('jazan', 'bathroom-leak-detection')]: jazanBathroomLeakDetection,
    [makeOverrideKey('jazan', 'roof-insulation')]: jazanRoofInsulation,
    [makeOverrideKey('jazan', 'tank-insulation')]: jazanTankInsulation,
    [makeOverrideKey('jazan', 'foam-insulation')]: jazanFoamInsulation,
    [makeOverrideKey('jazan', 'water-insulation')]: jazanWaterInsulation,
    [makeOverrideKey('jazan', 'thermal-insulation')]: jazanThermalInsulation,
    [makeOverrideKey('jazan', 'sewage-unblocking')]: jazanSewageUnblocking,
    [makeOverrideKey('jazan', 'sewage-suction')]: jazanSewageSuction,

    // ─── al-baha (50) ───
    [makeOverrideKey('al-baha', 'furniture-moving')]: alBahaFurnitureMoving,
    [makeOverrideKey('al-baha', 'furniture-storage')]: alBahaFurnitureStorage,
    [makeOverrideKey('al-baha', 'dyna')]: alBahaDyna,
    [makeOverrideKey('al-baha', 'dabab')]: alBahaDabab,
    [makeOverrideKey('al-baha', 'cleaning')]: alBahaCleaning,
    [makeOverrideKey('al-baha', 'tanks-cleaning')]: alBahaTanksCleaning,
    [makeOverrideKey('al-baha', 'sofa-cleaning')]: alBahaSofaCleaning,
    [makeOverrideKey('al-baha', 'carpet-cleaning')]: alBahaCarpetCleaning,
    [makeOverrideKey('al-baha', 'steam-cleaning')]: alBahaSteamCleaning,
    [makeOverrideKey('al-baha', 'air-conditioner-cleaning')]: alBahaAirConditionerCleaning,
    [makeOverrideKey('al-baha', 'swimming-pool-cleaning')]: alBahaSwimmingPoolCleaning,
    [makeOverrideKey('al-baha', 'glass-facades-cleaning')]: alBahaGlassFacadesCleaning,
    [makeOverrideKey('al-baha', 'marble-polishing')]: alBahaMarblePolishing,
    [makeOverrideKey('al-baha', 'villas-cleaning')]: alBahaVillasCleaning,
    [makeOverrideKey('al-baha', 'apartments-cleaning')]: alBahaApartmentsCleaning,
    [makeOverrideKey('al-baha', 'office-cleaning')]: alBahaOfficeCleaning,
    [makeOverrideKey('al-baha', 'furniture-cleaning')]: alBahaFurnitureCleaning,
    [makeOverrideKey('al-baha', 'auto-cleaning')]: alBahaAutoCleaning,
    [makeOverrideKey('al-baha', 'oven-cleaning')]: alBahaOvenCleaning,
    [makeOverrideKey('al-baha', 'councils-cleaning')]: alBahaCouncilsCleaning,
    [makeOverrideKey('al-baha', 'hourly-cleaning')]: alBahaHourlyCleaning,
    [makeOverrideKey('al-baha', 'restaurant-chimney-cleaning')]: alBahaRestaurantChimneyCleaning,
    [makeOverrideKey('al-baha', 'pest-control')]: alBahaPestControl,
    [makeOverrideKey('al-baha', 'pesticide-spraying')]: alBahaPesticideSpraying,
    [makeOverrideKey('al-baha', 'termite-control')]: alBahaTermiteControl,
    [makeOverrideKey('al-baha', 'bedbugs-control')]: alBahaBedbugsControl,
    [makeOverrideKey('al-baha', 'bird-control')]: alBahaBirdControl,
    [makeOverrideKey('al-baha', 'water-leak-detection')]: alBahaWaterLeakDetection,
    [makeOverrideKey('al-baha', 'tank-leak-detection')]: alBahaTankLeakDetection,
    [makeOverrideKey('al-baha', 'bathroom-leak-detection')]: alBahaBathroomLeakDetection,
    [makeOverrideKey('al-baha', 'roof-insulation')]: alBahaRoofInsulation,
    [makeOverrideKey('al-baha', 'tank-insulation')]: alBahaTankInsulation,
    [makeOverrideKey('al-baha', 'foam-insulation')]: alBahaFoamInsulation,
    [makeOverrideKey('al-baha', 'water-insulation')]: alBahaWaterInsulation,
    [makeOverrideKey('al-baha', 'thermal-insulation')]: alBahaThermalInsulation,
    [makeOverrideKey('al-baha', 'sewage-unblocking')]: alBahaSewageUnblocking,
    [makeOverrideKey('al-baha', 'sewage-suction')]: alBahaSewageSuction,

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
