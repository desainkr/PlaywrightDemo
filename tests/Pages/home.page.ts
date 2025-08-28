import {Page, Locator} from '@playwright/test';

class HomePage{
page:Page;
homeLink:Locator;
constructor(page: Page){

this.page=page;
this.homeLink = page.locator('#zak-primary-menu');

}
async navigate(){
    await this.page.goto('https://practice.sdetunicorns.com/');
}

}
export default HomePage;