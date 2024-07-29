import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/SignupPage';

test.describe.configure({ mode: 'serial' });

test.describe('signup form tests', () => {
  test('signing up works with new account', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();

    const userDetails = await signupPage.signup();

    await expect(page.locator('text=' + userDetails.firstName)).toBeVisible();
  });
});