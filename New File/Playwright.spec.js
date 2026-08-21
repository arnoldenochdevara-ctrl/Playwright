import {test,chromium} from '@playwright/test'

test('create browser,context and page', async() =>{
    //brwoser launch
     const browser = await chromium.launch();
     //first context
     const context1 = await browser.newContext();
     const page1 = await context1.newpage ();
     const page2 = await context1.newpage ();

    await page1.goto('https://www.facebook.com/');
    await page2.goto('https://www.instagram.com/?h1=en');
//second context2
    const context2= await browser.newContext();
    const page3 = await context2.newpage();
    await page3.goto("https://www.flipkart.com/");
//third context 
    const context3= await browser.newcontext();
    const page4 = await context3.newpage();
    const page5 = await context3.newpage();
    await page4.goto("https://www.amazon.in/");
    await page5.goto("https://www,myntra.com/");

    console.log(await page1.title());
    console.log(await page2.title());
    console.log(await page3.title());
    console.log(await page4.title());
    console.log(await page5.title());
});