const playwright = require('playwright');
(async () => {
    try {
        const browser = await playwright.chromium.launch({ headless: true });
        const page = await browser.newPage();
        
        // Listen to console
        page.on('console', msg => {
            if(msg.type() === 'error') console.error('BROWSER ERROR:', msg.text());
        });
        
        await page.goto('http://localhost:3000/الرياض/نقل-عفش', { waitUntil: 'load', timeout: 30000 });
        // Wait 3 seconds for React hydration to complete
        await new Promise(r => setTimeout(r, 3000));
        await browser.close();
    } catch(e) {
        console.error(e);
    }
})();
