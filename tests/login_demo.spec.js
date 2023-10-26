import {test, expect} from '@playwright/test'

test('demo login test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Daniel');
    await page.getByPlaceholder('Enter your password').fill('1234');
    await page.waitForSelector('id=log-in', {timeout: 50000})
    await page.pause()
    

})

test.only('demo login test 2', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Ivona Collings' }).locator('i').click();
    
    await page.getByRole('menuitem', { name: 'Logout' }).click();


  })

  test('demo login test 3', async({page}) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause() })