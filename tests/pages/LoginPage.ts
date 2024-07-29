import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput;
    readonly passwordInput;
    readonly loginButton;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button:has-text("Login")');
    }

    async goto() {
        await this.page.goto('http://localhost:8080/login'); // Added http:// for a valid URL
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
