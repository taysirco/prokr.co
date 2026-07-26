import type { BlogArticle } from '../../blog-data';

// ────────────────────────────────────────────────
// Jeddah 90-day editorial series
// Three topical clusters (moving / cleaning / pest control), 30 articles each,
// scheduled one per day for 90 consecutive days with randomised publish times.
// ────────────────────────────────────────────────

import { BLOG_JEDDAH_MOVING_1 } from './moving-1';
import { BLOG_JEDDAH_MOVING_2 } from './moving-2';
import { BLOG_JEDDAH_MOVING_3 } from './moving-3';
import { BLOG_JEDDAH_MOVING_4 } from './moving-4';
import { BLOG_JEDDAH_MOVING_5 } from './moving-5';
import { BLOG_JEDDAH_MOVING_6 } from './moving-6';

import { BLOG_JEDDAH_CLEANING_1 } from './cleaning-1';
import { BLOG_JEDDAH_CLEANING_2 } from './cleaning-2';
import { BLOG_JEDDAH_CLEANING_3 } from './cleaning-3';
import { BLOG_JEDDAH_CLEANING_4 } from './cleaning-4';
import { BLOG_JEDDAH_CLEANING_5 } from './cleaning-5';
import { BLOG_JEDDAH_CLEANING_6 } from './cleaning-6';

import { BLOG_JEDDAH_PEST_1 } from './pest-1';
import { BLOG_JEDDAH_PEST_2 } from './pest-2';
import { BLOG_JEDDAH_PEST_3 } from './pest-3';
import { BLOG_JEDDAH_PEST_4 } from './pest-4';
import { BLOG_JEDDAH_PEST_5 } from './pest-5';
import { BLOG_JEDDAH_PEST_6 } from './pest-6';

/** Jeddah moving cluster — 30 articles */
export const BLOG_JEDDAH_MOVING: BlogArticle[] = [
    ...BLOG_JEDDAH_MOVING_1,
    ...BLOG_JEDDAH_MOVING_2,
    ...BLOG_JEDDAH_MOVING_3,
    ...BLOG_JEDDAH_MOVING_4,
    ...BLOG_JEDDAH_MOVING_5,
    ...BLOG_JEDDAH_MOVING_6,
];

/** Jeddah cleaning cluster — 30 articles */
export const BLOG_JEDDAH_CLEANING: BlogArticle[] = [
    ...BLOG_JEDDAH_CLEANING_1,
    ...BLOG_JEDDAH_CLEANING_2,
    ...BLOG_JEDDAH_CLEANING_3,
    ...BLOG_JEDDAH_CLEANING_4,
    ...BLOG_JEDDAH_CLEANING_5,
    ...BLOG_JEDDAH_CLEANING_6,
];

/** Jeddah pest-control cluster — 30 articles */
export const BLOG_JEDDAH_PEST: BlogArticle[] = [
    ...BLOG_JEDDAH_PEST_1,
    ...BLOG_JEDDAH_PEST_2,
    ...BLOG_JEDDAH_PEST_3,
    ...BLOG_JEDDAH_PEST_4,
    ...BLOG_JEDDAH_PEST_5,
    ...BLOG_JEDDAH_PEST_6,
];

/** All 90 Jeddah series articles */
export const BLOG_ARTICLES_JEDDAH: BlogArticle[] = [
    ...BLOG_JEDDAH_MOVING,
    ...BLOG_JEDDAH_CLEANING,
    ...BLOG_JEDDAH_PEST,
];
