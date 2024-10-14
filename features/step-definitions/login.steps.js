import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js'; // Pastikan path dan nama file benar

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I login with (.*) and (.*)$/, async (email, password) => {
    await LoginPage.login(email, password); 
});

Then(/^I should be redirected to (.*) page$/, async (page) => {
    await expect(browser).toHaveUrl(expect.stringContaining(page))
});
