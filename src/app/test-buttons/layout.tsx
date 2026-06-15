import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// Developer test harness — never index. Ideally delete /test-buttons from
// production builds entirely; until then, keep it out of the index.
export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
    },
};

export default function TestButtonsLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
