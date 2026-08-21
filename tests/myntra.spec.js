import {test} from '@playwright/test';

test('Locator',async({page})=>{
     await page.goto('https://www.myntra.com/');
     await page.locator('input[placeholder*="Search"]').fill('T-shirt dress');
     await page.keyboard.press('Enter');
     await page.waitForTimeout(3000);
})   