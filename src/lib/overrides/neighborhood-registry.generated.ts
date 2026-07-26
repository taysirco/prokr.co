// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate with: npx tsx scripts/gen-neighborhood-registry.ts
//
// Every neighbourhood page override, keyed '{city}/{subregion}::{service}' —
// the composite key shape the 3-segment route /{city}/{subregion}/{service}
// looks up. Derived from the directory layout under pages/{city}/{subregion}/,
// so adding a file in the right place is all that is needed to register it.
//
// 48 page(s) across 4 cities.

import type { PageOverride } from './types';

import { override as ovdammam_corniche_cleaning } from './pages/dammam/corniche/cleaning';
import { override as ovdammam_corniche_pestControl } from './pages/dammam/corniche/pest-control';
import { override as ovdammam_corniche_tankInsulation } from './pages/dammam/corniche/tank-insulation';
import { override as ovdammam_northDammam_cleaning } from './pages/dammam/north-dammam/cleaning';
import { override as ovdammam_northDammam_furnitureMoving } from './pages/dammam/north-dammam/furniture-moving';
import { override as ovdammam_northDammam_pestControl } from './pages/dammam/north-dammam/pest-control';
import { override as ovdammam_northDammam_waterLeakDetection } from './pages/dammam/north-dammam/water-leak-detection';
import { override as ovdammam_southDammam_furnitureMoving } from './pages/dammam/south-dammam/furniture-moving';
import { override as ovdammam_southDammam_pestControl } from './pages/dammam/south-dammam/pest-control';
import { override as ovdammam_southDammam_sewageUnblocking } from './pages/dammam/south-dammam/sewage-unblocking';
import { override as ovjeddah_alHamdania_cleaning } from './pages/jeddah/al-hamdania/cleaning';
import { override as ovjeddah_alHamdania_pestControl } from './pages/jeddah/al-hamdania/pest-control';
import { override as ovjeddah_alHamdania_tanksCleaning } from './pages/jeddah/al-hamdania/tanks-cleaning';
import { override as ovjeddah_northJeddah_cleaning } from './pages/jeddah/north-jeddah/cleaning';
import { override as ovjeddah_northJeddah_furnitureMoving } from './pages/jeddah/north-jeddah/furniture-moving';
import { override as ovjeddah_northJeddah_pestControl } from './pages/jeddah/north-jeddah/pest-control';
import { override as ovjeddah_northJeddah_waterLeakDetection } from './pages/jeddah/north-jeddah/water-leak-detection';
import { override as ovjeddah_obhur_cleaning } from './pages/jeddah/obhur/cleaning';
import { override as ovjeddah_obhur_pestControl } from './pages/jeddah/obhur/pest-control';
import { override as ovjeddah_obhur_tankInsulation } from './pages/jeddah/obhur/tank-insulation';
import { override as ovjeddah_southJeddah_furnitureMoving } from './pages/jeddah/south-jeddah/furniture-moving';
import { override as ovjeddah_southJeddah_pestControl } from './pages/jeddah/south-jeddah/pest-control';
import { override as ovjeddah_southJeddah_sewageUnblocking } from './pages/jeddah/south-jeddah/sewage-unblocking';
import { override as ovmakkah_awali_cleaning } from './pages/makkah/awali/cleaning';
import { override as ovmakkah_awali_furnitureMoving } from './pages/makkah/awali/furniture-moving';
import { override as ovmakkah_awali_waterLeakDetection } from './pages/makkah/awali/water-leak-detection';
import { override as ovmakkah_aziziya_furnitureMoving } from './pages/makkah/aziziya/furniture-moving';
import { override as ovmakkah_aziziya_pestControl } from './pages/makkah/aziziya/pest-control';
import { override as ovmakkah_aziziya_sewageUnblocking } from './pages/makkah/aziziya/sewage-unblocking';
import { override as ovmakkah_sharaia_cleaning } from './pages/makkah/sharaia/cleaning';
import { override as ovmakkah_sharaia_movers } from './pages/makkah/sharaia/movers';
import { override as ovmakkah_sharaia_pestControl } from './pages/makkah/sharaia/pest-control';
import { override as ovriyadh_east_furnitureMoving } from './pages/riyadh/east/furniture-moving';
import { override as ovriyadh_east_pestControl } from './pages/riyadh/east/pest-control';
import { override as ovriyadh_east_sewageUnblocking } from './pages/riyadh/east/sewage-unblocking';
import { override as ovriyadh_east_tanksCleaning } from './pages/riyadh/east/tanks-cleaning';
import { override as ovriyadh_east_waterLeakDetection } from './pages/riyadh/east/water-leak-detection';
import { override as ovriyadh_north_cleaning } from './pages/riyadh/north/cleaning';
import { override as ovriyadh_north_furnitureMoving } from './pages/riyadh/north/furniture-moving';
import { override as ovriyadh_north_pestControl } from './pages/riyadh/north/pest-control';
import { override as ovriyadh_north_sewageSuction } from './pages/riyadh/north/sewage-suction';
import { override as ovriyadh_north_tankInsulation } from './pages/riyadh/north/tank-insulation';
import { override as ovriyadh_south_cleaning } from './pages/riyadh/south/cleaning';
import { override as ovriyadh_south_furnitureMoving } from './pages/riyadh/south/furniture-moving';
import { override as ovriyadh_south_waterLeakDetection } from './pages/riyadh/south/water-leak-detection';
import { override as ovriyadh_west_cleaning } from './pages/riyadh/west/cleaning';
import { override as ovriyadh_west_furnitureMoving } from './pages/riyadh/west/furniture-moving';
import { override as ovriyadh_west_pestControl } from './pages/riyadh/west/pest-control';

export const NEIGHBORHOOD_OVERRIDES: Record<string, PageOverride> = {
    'dammam/corniche::cleaning': ovdammam_corniche_cleaning,
    'dammam/corniche::pest-control': ovdammam_corniche_pestControl,
    'dammam/corniche::tank-insulation': ovdammam_corniche_tankInsulation,
    'dammam/north-dammam::cleaning': ovdammam_northDammam_cleaning,
    'dammam/north-dammam::furniture-moving': ovdammam_northDammam_furnitureMoving,
    'dammam/north-dammam::pest-control': ovdammam_northDammam_pestControl,
    'dammam/north-dammam::water-leak-detection': ovdammam_northDammam_waterLeakDetection,
    'dammam/south-dammam::furniture-moving': ovdammam_southDammam_furnitureMoving,
    'dammam/south-dammam::pest-control': ovdammam_southDammam_pestControl,
    'dammam/south-dammam::sewage-unblocking': ovdammam_southDammam_sewageUnblocking,
    'jeddah/al-hamdania::cleaning': ovjeddah_alHamdania_cleaning,
    'jeddah/al-hamdania::pest-control': ovjeddah_alHamdania_pestControl,
    'jeddah/al-hamdania::tanks-cleaning': ovjeddah_alHamdania_tanksCleaning,
    'jeddah/north-jeddah::cleaning': ovjeddah_northJeddah_cleaning,
    'jeddah/north-jeddah::furniture-moving': ovjeddah_northJeddah_furnitureMoving,
    'jeddah/north-jeddah::pest-control': ovjeddah_northJeddah_pestControl,
    'jeddah/north-jeddah::water-leak-detection': ovjeddah_northJeddah_waterLeakDetection,
    'jeddah/obhur::cleaning': ovjeddah_obhur_cleaning,
    'jeddah/obhur::pest-control': ovjeddah_obhur_pestControl,
    'jeddah/obhur::tank-insulation': ovjeddah_obhur_tankInsulation,
    'jeddah/south-jeddah::furniture-moving': ovjeddah_southJeddah_furnitureMoving,
    'jeddah/south-jeddah::pest-control': ovjeddah_southJeddah_pestControl,
    'jeddah/south-jeddah::sewage-unblocking': ovjeddah_southJeddah_sewageUnblocking,
    'makkah/awali::cleaning': ovmakkah_awali_cleaning,
    'makkah/awali::furniture-moving': ovmakkah_awali_furnitureMoving,
    'makkah/awali::water-leak-detection': ovmakkah_awali_waterLeakDetection,
    'makkah/aziziya::furniture-moving': ovmakkah_aziziya_furnitureMoving,
    'makkah/aziziya::pest-control': ovmakkah_aziziya_pestControl,
    'makkah/aziziya::sewage-unblocking': ovmakkah_aziziya_sewageUnblocking,
    'makkah/sharaia::cleaning': ovmakkah_sharaia_cleaning,
    'makkah/sharaia::movers': ovmakkah_sharaia_movers,
    'makkah/sharaia::pest-control': ovmakkah_sharaia_pestControl,
    'riyadh/east::furniture-moving': ovriyadh_east_furnitureMoving,
    'riyadh/east::pest-control': ovriyadh_east_pestControl,
    'riyadh/east::sewage-unblocking': ovriyadh_east_sewageUnblocking,
    'riyadh/east::tanks-cleaning': ovriyadh_east_tanksCleaning,
    'riyadh/east::water-leak-detection': ovriyadh_east_waterLeakDetection,
    'riyadh/north::cleaning': ovriyadh_north_cleaning,
    'riyadh/north::furniture-moving': ovriyadh_north_furnitureMoving,
    'riyadh/north::pest-control': ovriyadh_north_pestControl,
    'riyadh/north::sewage-suction': ovriyadh_north_sewageSuction,
    'riyadh/north::tank-insulation': ovriyadh_north_tankInsulation,
    'riyadh/south::cleaning': ovriyadh_south_cleaning,
    'riyadh/south::furniture-moving': ovriyadh_south_furnitureMoving,
    'riyadh/south::water-leak-detection': ovriyadh_south_waterLeakDetection,
    'riyadh/west::cleaning': ovriyadh_west_cleaning,
    'riyadh/west::furniture-moving': ovriyadh_west_furnitureMoving,
    'riyadh/west::pest-control': ovriyadh_west_pestControl,
};
