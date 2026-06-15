import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// /admin is a client-rendered, auth-gated panel — never index it.
// (page.tsx is "use client" so it can't export metadata itself.)
export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
    },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
