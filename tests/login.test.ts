import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { existingUsers } from '../test-setup/localstorage.setup'

test.describe.configure({ mode: 'serial' });

test.describe('login form tests', () => {
    test('logging in works with existing account', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        const existingUser = existingUsers[0];

        await loginPage.login(existingUser.email, existingUser.password);
        await expect(page.locator('text=Log out')).toBeVisible();
    });
});
