import  {test, page, expect} from '@playwright/test'

test('assertion test 1', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    //messing with if block
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();
    //check attribute value

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/);
    // check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle("The Kitchen")
    //visual validation with screenshot
    await page.pause()

    await expect(page).toHaveScreenshot()







    


})

