'use client';

import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

/** Pages that should render without the site-wide navbar */
const STANDALONE_ROUTES = ['/advertise', '/corporate'];

export default function NavbarWrapper() {
    const pathname = usePathname();
    if (STANDALONE_ROUTES.some(r => pathname?.startsWith(r))) return null;
    return <Navbar />;
}
