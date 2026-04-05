const playwright = require('playwright');
(async () => {
    const browser = await playwright.chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/الرياض/نقل-عفش', { waitUntil: 'networkidle' });
    const ctas = await page.$$eval('.group .relative .bg-white a[data-cta-type]', els => els.map(el => ({
        type: el.getAttribute('data-cta-type'),
        className: el.className,
        text: el.innerText,
        style: el.getAttribute('style') || ''
    })));
    console.log(JSON.stringify(ctas, null, 2));
    await browser.close();
})();
