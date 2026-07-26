// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.
// Regenerate with: npx tsx scripts/gen-neighborhood-registry.ts
//
// Every neighbourhood page override, keyed '{city}/{subregion}::{service}' —
// the composite key shape the 3-segment route /{city}/{subregion}/{service}
// looks up. Derived from the directory layout under pages/{city}/{subregion}/,
// so adding a file in the right place is all that is needed to register it.
//
// 159 page(s) across 25 cities.

import type { PageOverride } from './types';

import { override as ovabha_alSoudah_cleaning } from './pages/abha/al-soudah/cleaning';
import { override as ovabha_alSoudah_pestControl } from './pages/abha/al-soudah/pest-control';
import { override as ovabha_alSoudah_tankInsulation } from './pages/abha/al-soudah/tank-insulation';
import { override as ovabha_center_cleaning } from './pages/abha/center/cleaning';
import { override as ovabha_center_furnitureMoving } from './pages/abha/center/furniture-moving';
import { override as ovabha_center_pestControl } from './pages/abha/center/pest-control';
import { override as ovabha_center_waterLeakDetection } from './pages/abha/center/water-leak-detection';
import { override as ovalAhsa_hofuf_cleaning } from './pages/al-ahsa/hofuf/cleaning';
import { override as ovalAhsa_hofuf_furnitureMoving } from './pages/al-ahsa/hofuf/furniture-moving';
import { override as ovalAhsa_hofuf_pestControl } from './pages/al-ahsa/hofuf/pest-control';
import { override as ovalAhsa_hofuf_waterLeakDetection } from './pages/al-ahsa/hofuf/water-leak-detection';
import { override as ovalAhsa_mubarraz_cleaning } from './pages/al-ahsa/mubarraz/cleaning';
import { override as ovalAhsa_mubarraz_furnitureMoving } from './pages/al-ahsa/mubarraz/furniture-moving';
import { override as ovalAhsa_mubarraz_pestControl } from './pages/al-ahsa/mubarraz/pest-control';
import { override as ovalBaha_center_cleaning } from './pages/al-baha/center/cleaning';
import { override as ovalBaha_center_furnitureMoving } from './pages/al-baha/center/furniture-moving';
import { override as ovalBaha_center_pestControl } from './pages/al-baha/center/pest-control';
import { override as ovalBaha_mikhwah_furnitureMoving } from './pages/al-baha/mikhwah/furniture-moving';
import { override as ovalBaha_mikhwah_pestControl } from './pages/al-baha/mikhwah/pest-control';
import { override as ovalKharj_cityCenter_cleaning } from './pages/al-kharj/city-center/cleaning';
import { override as ovalKharj_cityCenter_furnitureMoving } from './pages/al-kharj/city-center/furniture-moving';
import { override as ovalKharj_cityCenter_pestControl } from './pages/al-kharj/city-center/pest-control';
import { override as ovalKharj_industrial_pestControl } from './pages/al-kharj/industrial/pest-control';
import { override as ovalKharj_industrial_sewageUnblocking } from './pages/al-kharj/industrial/sewage-unblocking';
import { override as ovalKhobar_northKhobar_cleaning } from './pages/al-khobar/north-khobar/cleaning';
import { override as ovalKhobar_northKhobar_furnitureMoving } from './pages/al-khobar/north-khobar/furniture-moving';
import { override as ovalKhobar_northKhobar_pestControl } from './pages/al-khobar/north-khobar/pest-control';
import { override as ovalKhobar_southKhobar_furnitureMoving } from './pages/al-khobar/south-khobar/furniture-moving';
import { override as ovalKhobar_southKhobar_tankInsulation } from './pages/al-khobar/south-khobar/tank-insulation';
import { override as ovalKhobar_southKhobar_waterLeakDetection } from './pages/al-khobar/south-khobar/water-leak-detection';
import { override as ovarRass_alHazm_waterLeakDetection } from './pages/ar-rass/al-hazm/water-leak-detection';
import { override as ovarRass_alJawazat_waterLeakDetection } from './pages/ar-rass/al-jawazat/water-leak-detection';
import { override as ovarRass_alQadisiyah_waterLeakDetection } from './pages/ar-rass/al-qadisiyah/water-leak-detection';
import { override as ovarRass_alRawdhah_waterLeakDetection } from './pages/ar-rass/al-rawdhah/water-leak-detection';
import { override as ovarRass_alShifa_waterLeakDetection } from './pages/ar-rass/al-shifa/water-leak-detection';
import { override as ovarRass_alYarmouk_waterLeakDetection } from './pages/ar-rass/al-yarmouk/water-leak-detection';
import { override as ovarRass_kingKhalid_waterLeakDetection } from './pages/ar-rass/king-khalid/water-leak-detection';
import { override as ovburaidah_center_cleaning } from './pages/buraidah/center/cleaning';
import { override as ovburaidah_center_furnitureMoving } from './pages/buraidah/center/furniture-moving';
import { override as ovburaidah_center_pestControl } from './pages/buraidah/center/pest-control';
import { override as ovburaidah_center_tankInsulation } from './pages/buraidah/center/tank-insulation';
import { override as ovburaidah_northBuraidah_furnitureMoving } from './pages/buraidah/north-buraidah/furniture-moving';
import { override as ovburaidah_northBuraidah_pestControl } from './pages/buraidah/north-buraidah/pest-control';
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
import { override as ovdhahran_doha_cleaning } from './pages/dhahran/doha/cleaning';
import { override as ovdhahran_doha_furnitureMoving } from './pages/dhahran/doha/furniture-moving';
import { override as ovdhahran_doha_pestControl } from './pages/dhahran/doha/pest-control';
import { override as ovhafrAlbatin_center_cleaning } from './pages/hafr-albatin/center/cleaning';
import { override as ovhafrAlbatin_center_furnitureMoving } from './pages/hafr-albatin/center/furniture-moving';
import { override as ovhafrAlbatin_center_pestControl } from './pages/hafr-albatin/center/pest-control';
import { override as ovhail_barzan_cleaning } from './pages/hail/barzan/cleaning';
import { override as ovhail_barzan_furnitureMoving } from './pages/hail/barzan/furniture-moving';
import { override as ovhail_center_cleaning } from './pages/hail/center/cleaning';
import { override as ovhail_center_furnitureMoving } from './pages/hail/center/furniture-moving';
import { override as ovhail_center_pestControl } from './pages/hail/center/pest-control';
import { override as ovhail_center_tankInsulation } from './pages/hail/center/tank-insulation';
import { override as ovjazan_center_cleaning } from './pages/jazan/center/cleaning';
import { override as ovjazan_center_furnitureMoving } from './pages/jazan/center/furniture-moving';
import { override as ovjazan_center_pestControl } from './pages/jazan/center/pest-control';
import { override as ovjazan_port_cleaning } from './pages/jazan/port/cleaning';
import { override as ovjazan_port_pestControl } from './pages/jazan/port/pest-control';
import { override as ovjazan_port_sewageUnblocking } from './pages/jazan/port/sewage-unblocking';
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
import { override as ovjubail_industrialJubail_cleaning } from './pages/jubail/industrial-jubail/cleaning';
import { override as ovjubail_industrialJubail_pestControl } from './pages/jubail/industrial-jubail/pest-control';
import { override as ovjubail_industrialJubail_tankInsulation } from './pages/jubail/industrial-jubail/tank-insulation';
import { override as ovjubail_residentialJubail_cleaning } from './pages/jubail/residential-jubail/cleaning';
import { override as ovjubail_residentialJubail_furnitureMoving } from './pages/jubail/residential-jubail/furniture-moving';
import { override as ovjubail_residentialJubail_waterLeakDetection } from './pages/jubail/residential-jubail/water-leak-detection';
import { override as ovkhamisMushait_center_cleaning } from './pages/khamis-mushait/center/cleaning';
import { override as ovkhamisMushait_center_furnitureMoving } from './pages/khamis-mushait/center/furniture-moving';
import { override as ovkhamisMushait_center_pestControl } from './pages/khamis-mushait/center/pest-control';
import { override as ovkhamisMushait_northKhamis_furnitureMoving } from './pages/khamis-mushait/north-khamis/furniture-moving';
import { override as ovkhamisMushait_northKhamis_tankInsulation } from './pages/khamis-mushait/north-khamis/tank-insulation';
import { override as ovmadinah_alharam_cleaning } from './pages/madinah/alharam/cleaning';
import { override as ovmadinah_alharam_pestControl } from './pages/madinah/alharam/pest-control';
import { override as ovmadinah_quba_cleaning } from './pages/madinah/quba/cleaning';
import { override as ovmadinah_quba_furnitureMoving } from './pages/madinah/quba/furniture-moving';
import { override as ovmadinah_quba_pestControl } from './pages/madinah/quba/pest-control';
import { override as ovmakkah_awali_cleaning } from './pages/makkah/awali/cleaning';
import { override as ovmakkah_awali_furnitureMoving } from './pages/makkah/awali/furniture-moving';
import { override as ovmakkah_awali_waterLeakDetection } from './pages/makkah/awali/water-leak-detection';
import { override as ovmakkah_aziziya_furnitureMoving } from './pages/makkah/aziziya/furniture-moving';
import { override as ovmakkah_aziziya_pestControl } from './pages/makkah/aziziya/pest-control';
import { override as ovmakkah_aziziya_sewageUnblocking } from './pages/makkah/aziziya/sewage-unblocking';
import { override as ovmakkah_sharaia_cleaning } from './pages/makkah/sharaia/cleaning';
import { override as ovmakkah_sharaia_movers } from './pages/makkah/sharaia/movers';
import { override as ovmakkah_sharaia_pestControl } from './pages/makkah/sharaia/pest-control';
import { override as ovnajran_center_cleaning } from './pages/najran/center/cleaning';
import { override as ovnajran_center_furnitureMoving } from './pages/najran/center/furniture-moving';
import { override as ovnajran_center_pestControl } from './pages/najran/center/pest-control';
import { override as ovonizah_center_cleaning } from './pages/onizah/center/cleaning';
import { override as ovonizah_center_furnitureMoving } from './pages/onizah/center/furniture-moving';
import { override as ovonizah_center_pestControl } from './pages/onizah/center/pest-control';
import { override as ovqassim_arRass_furnitureMoving } from './pages/qassim/ar-rass/furniture-moving';
import { override as ovqassim_arRass_waterLeakDetection } from './pages/qassim/ar-rass/water-leak-detection';
import { override as ovqassim_buraidahCenter_cleaning } from './pages/qassim/buraidah-center/cleaning';
import { override as ovqassim_buraidahCenter_furnitureMoving } from './pages/qassim/buraidah-center/furniture-moving';
import { override as ovqassim_buraidahCenter_pestControl } from './pages/qassim/buraidah-center/pest-control';
import { override as ovqatif_center_cleaning } from './pages/qatif/center/cleaning';
import { override as ovqatif_center_furnitureMoving } from './pages/qatif/center/furniture-moving';
import { override as ovqatif_center_pestControl } from './pages/qatif/center/pest-control';
import { override as ovqatif_tarut_pestControl } from './pages/qatif/tarut/pest-control';
import { override as ovqatif_tarut_waterLeakDetection } from './pages/qatif/tarut/water-leak-detection';
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
import { override as ovtabuk_center_cleaning } from './pages/tabuk/center/cleaning';
import { override as ovtabuk_center_furnitureMoving } from './pages/tabuk/center/furniture-moving';
import { override as ovtabuk_center_pestControl } from './pages/tabuk/center/pest-control';
import { override as ovtabuk_center_tankInsulation } from './pages/tabuk/center/tank-insulation';
import { override as ovtabuk_northTabuk_furnitureMoving } from './pages/tabuk/north-tabuk/furniture-moving';
import { override as ovtabuk_northTabuk_waterLeakDetection } from './pages/tabuk/north-tabuk/water-leak-detection';
import { override as ovtaif_alHada_cleaning } from './pages/taif/al-hada/cleaning';
import { override as ovtaif_alHada_pestControl } from './pages/taif/al-hada/pest-control';
import { override as ovtaif_alHada_tankInsulation } from './pages/taif/al-hada/tank-insulation';
import { override as ovtaif_center_cleaning } from './pages/taif/center/cleaning';
import { override as ovtaif_center_furnitureMoving } from './pages/taif/center/furniture-moving';
import { override as ovtaif_center_pestControl } from './pages/taif/center/pest-control';
import { override as ovyanbu_bahar_cleaning } from './pages/yanbu/bahar/cleaning';
import { override as ovyanbu_bahar_furnitureMoving } from './pages/yanbu/bahar/furniture-moving';
import { override as ovyanbu_bahar_waterLeakDetection } from './pages/yanbu/bahar/water-leak-detection';
import { override as ovyanbu_industrial_cleaning } from './pages/yanbu/industrial/cleaning';
import { override as ovyanbu_industrial_pestControl } from './pages/yanbu/industrial/pest-control';
import { override as ovyanbu_industrial_tankInsulation } from './pages/yanbu/industrial/tank-insulation';

export const NEIGHBORHOOD_OVERRIDES: Record<string, PageOverride> = {
    'abha/al-soudah::cleaning': ovabha_alSoudah_cleaning,
    'abha/al-soudah::pest-control': ovabha_alSoudah_pestControl,
    'abha/al-soudah::tank-insulation': ovabha_alSoudah_tankInsulation,
    'abha/center::cleaning': ovabha_center_cleaning,
    'abha/center::furniture-moving': ovabha_center_furnitureMoving,
    'abha/center::pest-control': ovabha_center_pestControl,
    'abha/center::water-leak-detection': ovabha_center_waterLeakDetection,
    'al-ahsa/hofuf::cleaning': ovalAhsa_hofuf_cleaning,
    'al-ahsa/hofuf::furniture-moving': ovalAhsa_hofuf_furnitureMoving,
    'al-ahsa/hofuf::pest-control': ovalAhsa_hofuf_pestControl,
    'al-ahsa/hofuf::water-leak-detection': ovalAhsa_hofuf_waterLeakDetection,
    'al-ahsa/mubarraz::cleaning': ovalAhsa_mubarraz_cleaning,
    'al-ahsa/mubarraz::furniture-moving': ovalAhsa_mubarraz_furnitureMoving,
    'al-ahsa/mubarraz::pest-control': ovalAhsa_mubarraz_pestControl,
    'al-baha/center::cleaning': ovalBaha_center_cleaning,
    'al-baha/center::furniture-moving': ovalBaha_center_furnitureMoving,
    'al-baha/center::pest-control': ovalBaha_center_pestControl,
    'al-baha/mikhwah::furniture-moving': ovalBaha_mikhwah_furnitureMoving,
    'al-baha/mikhwah::pest-control': ovalBaha_mikhwah_pestControl,
    'al-kharj/city-center::cleaning': ovalKharj_cityCenter_cleaning,
    'al-kharj/city-center::furniture-moving': ovalKharj_cityCenter_furnitureMoving,
    'al-kharj/city-center::pest-control': ovalKharj_cityCenter_pestControl,
    'al-kharj/industrial::pest-control': ovalKharj_industrial_pestControl,
    'al-kharj/industrial::sewage-unblocking': ovalKharj_industrial_sewageUnblocking,
    'al-khobar/north-khobar::cleaning': ovalKhobar_northKhobar_cleaning,
    'al-khobar/north-khobar::furniture-moving': ovalKhobar_northKhobar_furnitureMoving,
    'al-khobar/north-khobar::pest-control': ovalKhobar_northKhobar_pestControl,
    'al-khobar/south-khobar::furniture-moving': ovalKhobar_southKhobar_furnitureMoving,
    'al-khobar/south-khobar::tank-insulation': ovalKhobar_southKhobar_tankInsulation,
    'al-khobar/south-khobar::water-leak-detection': ovalKhobar_southKhobar_waterLeakDetection,
    'ar-rass/al-hazm::water-leak-detection': ovarRass_alHazm_waterLeakDetection,
    'ar-rass/al-jawazat::water-leak-detection': ovarRass_alJawazat_waterLeakDetection,
    'ar-rass/al-qadisiyah::water-leak-detection': ovarRass_alQadisiyah_waterLeakDetection,
    'ar-rass/al-rawdhah::water-leak-detection': ovarRass_alRawdhah_waterLeakDetection,
    'ar-rass/al-shifa::water-leak-detection': ovarRass_alShifa_waterLeakDetection,
    'ar-rass/al-yarmouk::water-leak-detection': ovarRass_alYarmouk_waterLeakDetection,
    'ar-rass/king-khalid::water-leak-detection': ovarRass_kingKhalid_waterLeakDetection,
    'buraidah/center::cleaning': ovburaidah_center_cleaning,
    'buraidah/center::furniture-moving': ovburaidah_center_furnitureMoving,
    'buraidah/center::pest-control': ovburaidah_center_pestControl,
    'buraidah/center::tank-insulation': ovburaidah_center_tankInsulation,
    'buraidah/north-buraidah::furniture-moving': ovburaidah_northBuraidah_furnitureMoving,
    'buraidah/north-buraidah::pest-control': ovburaidah_northBuraidah_pestControl,
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
    'dhahran/doha::cleaning': ovdhahran_doha_cleaning,
    'dhahran/doha::furniture-moving': ovdhahran_doha_furnitureMoving,
    'dhahran/doha::pest-control': ovdhahran_doha_pestControl,
    'hafr-albatin/center::cleaning': ovhafrAlbatin_center_cleaning,
    'hafr-albatin/center::furniture-moving': ovhafrAlbatin_center_furnitureMoving,
    'hafr-albatin/center::pest-control': ovhafrAlbatin_center_pestControl,
    'hail/barzan::cleaning': ovhail_barzan_cleaning,
    'hail/barzan::furniture-moving': ovhail_barzan_furnitureMoving,
    'hail/center::cleaning': ovhail_center_cleaning,
    'hail/center::furniture-moving': ovhail_center_furnitureMoving,
    'hail/center::pest-control': ovhail_center_pestControl,
    'hail/center::tank-insulation': ovhail_center_tankInsulation,
    'jazan/center::cleaning': ovjazan_center_cleaning,
    'jazan/center::furniture-moving': ovjazan_center_furnitureMoving,
    'jazan/center::pest-control': ovjazan_center_pestControl,
    'jazan/port::cleaning': ovjazan_port_cleaning,
    'jazan/port::pest-control': ovjazan_port_pestControl,
    'jazan/port::sewage-unblocking': ovjazan_port_sewageUnblocking,
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
    'jubail/industrial-jubail::cleaning': ovjubail_industrialJubail_cleaning,
    'jubail/industrial-jubail::pest-control': ovjubail_industrialJubail_pestControl,
    'jubail/industrial-jubail::tank-insulation': ovjubail_industrialJubail_tankInsulation,
    'jubail/residential-jubail::cleaning': ovjubail_residentialJubail_cleaning,
    'jubail/residential-jubail::furniture-moving': ovjubail_residentialJubail_furnitureMoving,
    'jubail/residential-jubail::water-leak-detection': ovjubail_residentialJubail_waterLeakDetection,
    'khamis-mushait/center::cleaning': ovkhamisMushait_center_cleaning,
    'khamis-mushait/center::furniture-moving': ovkhamisMushait_center_furnitureMoving,
    'khamis-mushait/center::pest-control': ovkhamisMushait_center_pestControl,
    'khamis-mushait/north-khamis::furniture-moving': ovkhamisMushait_northKhamis_furnitureMoving,
    'khamis-mushait/north-khamis::tank-insulation': ovkhamisMushait_northKhamis_tankInsulation,
    'madinah/alharam::cleaning': ovmadinah_alharam_cleaning,
    'madinah/alharam::pest-control': ovmadinah_alharam_pestControl,
    'madinah/quba::cleaning': ovmadinah_quba_cleaning,
    'madinah/quba::furniture-moving': ovmadinah_quba_furnitureMoving,
    'madinah/quba::pest-control': ovmadinah_quba_pestControl,
    'makkah/awali::cleaning': ovmakkah_awali_cleaning,
    'makkah/awali::furniture-moving': ovmakkah_awali_furnitureMoving,
    'makkah/awali::water-leak-detection': ovmakkah_awali_waterLeakDetection,
    'makkah/aziziya::furniture-moving': ovmakkah_aziziya_furnitureMoving,
    'makkah/aziziya::pest-control': ovmakkah_aziziya_pestControl,
    'makkah/aziziya::sewage-unblocking': ovmakkah_aziziya_sewageUnblocking,
    'makkah/sharaia::cleaning': ovmakkah_sharaia_cleaning,
    'makkah/sharaia::movers': ovmakkah_sharaia_movers,
    'makkah/sharaia::pest-control': ovmakkah_sharaia_pestControl,
    'najran/center::cleaning': ovnajran_center_cleaning,
    'najran/center::furniture-moving': ovnajran_center_furnitureMoving,
    'najran/center::pest-control': ovnajran_center_pestControl,
    'onizah/center::cleaning': ovonizah_center_cleaning,
    'onizah/center::furniture-moving': ovonizah_center_furnitureMoving,
    'onizah/center::pest-control': ovonizah_center_pestControl,
    'qassim/ar-rass::furniture-moving': ovqassim_arRass_furnitureMoving,
    'qassim/ar-rass::water-leak-detection': ovqassim_arRass_waterLeakDetection,
    'qassim/buraidah-center::cleaning': ovqassim_buraidahCenter_cleaning,
    'qassim/buraidah-center::furniture-moving': ovqassim_buraidahCenter_furnitureMoving,
    'qassim/buraidah-center::pest-control': ovqassim_buraidahCenter_pestControl,
    'qatif/center::cleaning': ovqatif_center_cleaning,
    'qatif/center::furniture-moving': ovqatif_center_furnitureMoving,
    'qatif/center::pest-control': ovqatif_center_pestControl,
    'qatif/tarut::pest-control': ovqatif_tarut_pestControl,
    'qatif/tarut::water-leak-detection': ovqatif_tarut_waterLeakDetection,
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
    'tabuk/center::cleaning': ovtabuk_center_cleaning,
    'tabuk/center::furniture-moving': ovtabuk_center_furnitureMoving,
    'tabuk/center::pest-control': ovtabuk_center_pestControl,
    'tabuk/center::tank-insulation': ovtabuk_center_tankInsulation,
    'tabuk/north-tabuk::furniture-moving': ovtabuk_northTabuk_furnitureMoving,
    'tabuk/north-tabuk::water-leak-detection': ovtabuk_northTabuk_waterLeakDetection,
    'taif/al-hada::cleaning': ovtaif_alHada_cleaning,
    'taif/al-hada::pest-control': ovtaif_alHada_pestControl,
    'taif/al-hada::tank-insulation': ovtaif_alHada_tankInsulation,
    'taif/center::cleaning': ovtaif_center_cleaning,
    'taif/center::furniture-moving': ovtaif_center_furnitureMoving,
    'taif/center::pest-control': ovtaif_center_pestControl,
    'yanbu/bahar::cleaning': ovyanbu_bahar_cleaning,
    'yanbu/bahar::furniture-moving': ovyanbu_bahar_furnitureMoving,
    'yanbu/bahar::water-leak-detection': ovyanbu_bahar_waterLeakDetection,
    'yanbu/industrial::cleaning': ovyanbu_industrial_cleaning,
    'yanbu/industrial::pest-control': ovyanbu_industrial_pestControl,
    'yanbu/industrial::tank-insulation': ovyanbu_industrial_tankInsulation,
};
