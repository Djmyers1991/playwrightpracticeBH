import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('logintestnow', async ({ page }) => {
const LoginInstance = new LoginPage(page)

await LoginInstance.goToLoginPage()
await LoginInstance.login('tomsmith','SuperSecretPassword!')
});

