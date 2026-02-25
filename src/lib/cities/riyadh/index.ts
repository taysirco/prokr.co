import { riyadhContext } from './context';
import { riyadhCompanies } from './companies';
import { riyadhContent } from './content';

// 1. Export the main `riyadh` object using the base context (this powers `CITY_CONTEXT` in `city-context.ts`)
export const riyadh = riyadhContext;

// 2. Export companies and content directly for pages that need deeper details natively
export { riyadhCompanies, riyadhContent };
