import {test, expect} from '@playwright/test'

test('selectors demo', async({page}) => {
await page.goto('https://www.saucedemo.com/')
await page.pause()
//using any object property
await page.click('id=user-name')
await page.locator('[id="user-name"]').fill('Einstein')
await page.locator('#login-button').click()
//using Xpath//
await page.locator('//*[@id="password"]').fill('faraday')
// await page.locator('text=LOGIN').click()
await page.locator('id=user-name').fill('Edison')
await page.locator('input:has-text("LOGIN")').click()
await page.locator('id=user-name').fill('John')




})