const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('https://prokr.co/riyadh/cleaning', {waitUntil: 'networkidle2'});
  
  console.log("Clicking sign in");
  
  // Wait for the login button 
  // It's the standard button with text "Google" maybe
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const loginBtn = buttons.find(b => b.textContent && b.textContent.includes('Google'));
    if (loginBtn) {
      console.log("Found button, clicking...");
      loginBtn.click();
    } else {
      console.log("Button not found!");
    }
  });
  
  await page.waitForTimeout(3000);
  await browser.close();
})();
