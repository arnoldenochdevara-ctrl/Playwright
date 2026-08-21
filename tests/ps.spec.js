import {test} from '@playwright/test';

test('locate the elements', async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName'),fill('Arnold');
    await page.locator('#userEmail'),fill('arnoldenochdevara@gmail.com');
    await page.locator('#CurrentAddress'),fill('Hostel,Porur,Chennai');
    await page.locator('#PermanentAddress'),fill('Hostel,Porur,Chennai');
    await page.waitforTimeout(4000);

})