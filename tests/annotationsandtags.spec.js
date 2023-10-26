import {test, expect} from '@playwright/test'

test.skip('Test One',async({page}) => {

})

test('not yet ready', async({page})=> {
    test.fail()
})

test.fixme('needs a fixing', async({page})=> {

})

test('slow test', async({page}) => {
    test.slow()
})

test('Test login page @smoke', async({page}) => {
    test.slow()
})

