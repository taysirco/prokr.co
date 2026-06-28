import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// /verify is the Firebase email-link sign-in completion page. It must never be
// indexed. The page itself is a client component (can't export metadata), and
// without this layout it inherits the root robots:{index:true}. Mirrors the
// admin/ and test-buttons/ layout pattern.
export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
    },
};

export default function VerifyLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
