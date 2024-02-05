import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import eBayPage from '../pageobjects/eBay.page.js';

Given(/^Ingresar a eBay$/, async () => {
    await eBayPage.navigateToeBay();
});

When(/^Ingresar en el campo Search la palabra (.+)$/, async (palabra) => {
    await eBayPage.enterYourSearch(palabra);
});

Then(/^Hacer tap sobre la lupa$/, async () => {
    await eBayPage.pressFindButton();
});

Then(/^Mostrar por consola la cantidad de items encontrados$/, async () => {
    await eBayPage.printItems();
});

