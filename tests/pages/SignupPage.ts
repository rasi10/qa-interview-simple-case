import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class SignupPage {
    readonly page: Page;
    readonly firstNameInput;
    readonly lastNameInput;    
    readonly emailInput;
    readonly passwordInput;
    readonly submitButton;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('button:has-text("Submit")');
    }

    async goto() {
        await this.page.goto('http://localhost:8080/signup'); 
    }

    async signup() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();

        return { firstName, lastName, email, password };
    }
}
