import puppeteer from 'puppeteer';


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://secure.ulrichsw.cz/estrava/prihlaseni', { waitUntil: 'networkidle2' });

    // Fill out the login form
    await page.type('input[name="username"]', '1883');
    await page.type('input[name="pass"]', 'pavel');
    await page.type('input[name="kodzar"]', '0013');
    await page.type('input[name="deviceName"]', 'WEB');

    // Submit the form
    await page.click('button[type="submit"]'); // Adjust if needed

    // Wait for navigation
    await page.waitForNavigation();

    // Now you can make an authenticated request
    await page.goto('https://secure.ulrichsw.cz/estrava/api/?v=1&action=jidla&r=25&m=02&act=true');

    const content = await page.content();
    console.log(content);

    await browser.close();
})();
