import { $ } from '@wdio/globals'
import BasePage from './BasePage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class eBayPage extends BasePage {
    /**
     * define selectors using getter methods
     */

    private get inputSearch () {
        return $('#kw');
    }
    
    private get buttonSearch () {
        return $('//button[@aria-label="Buscar"]');
    }

    private get items(){
        return $$('//li[@class="s-item s-item__pl-on-bottom"]'); // //div[@id="srp-river-results"]/ul/li[@id]
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async navigateToeBay () {
        return super.navigateTo('http://www.ebay.com/');
    }

    public async enterYourSearch(search: string){
        await this.inputSearch.setValue(search);
    }

    public async pressFindButton(){
        await this.buttonSearch.click();
    }

    public async printItems(){
        console.log("La cantidad de elementos es", (await this.items.map((e) => e.getAttribute('class'))).length);
    }
}

export default new eBayPage();
