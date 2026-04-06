'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });

/** Pages that should render without the site-wide navbar */
const STANDALONE_ROUTES = ['/advertise'];

export default function NavbarWrapper() {
    const pathname = usePathname();
    if (STANDALONE_ROUTES.some(r => pathname?.startsWith(r))) return null;
    return <Navbar />;
}
