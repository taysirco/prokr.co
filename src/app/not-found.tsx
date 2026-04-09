import { redirect } from 'next/navigation';

// ════════════════════════════════════════════════════════════════
// 404 → Homepage Redirect
// Any URL that doesn't match a valid route will be instantly
// redirected to the homepage via server-side 307 redirect.
// This prevents dead pages from hurting UX and SEO.
// ════════════════════════════════════════════════════════════════
export default function NotFound() {
    redirect('/');
}
