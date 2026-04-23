// ════════════════════════════════════════════════════════════════
// 🔒 Corporate Layout — ISOLATED from main site navigation
// 
// §4 (Phase 4: PageRank Drip-Feed):
// The /corporate/acquisition page must NOT leak PageRank through
// navbar/footer links. This layout strips ALL site-wide navigation
// so the only dofollow links on the page are the 3 strategic
// "distribution arteries" defined in the page itself:
//   1. /locations (city directory)
//   2. /services-page (service directory)  
//   3. /research/pricing-index (pricing benchmark)
//
// This ensures PageRank flows: acquisition → hubs → 30 cities → 53 services
// instead of leaking directly to individual city/service pages.
// ════════════════════════════════════════════════════════════════

export default function CorporateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Hide WhatsApp popup + any site-wide floating elements on corporate pages */}
            <style dangerouslySetInnerHTML={{ __html: `
                /* Kill WhatsApp anti-bounce popup on corporate pages */
                [class*="whatsapp"], [data-popup="whatsapp"] { display: none !important; }
                /* Kill any floating action buttons */
                [class*="fixed"][class*="bottom-"] { display: none !important; }
            `}} />
            {children}
        </>
    );
}
