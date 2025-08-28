export class ContactPage{


    constructor(page){

    this.page=page;
    this.Name_inputBox=page.locator('#evf-277-field_ys0GeZISRs-1');
    this.Email_inputBox=page.locator('#evf-277-field_LbH5NxasXM-2');
    this.Phone_inputBox=page.locator('#evf-277-field_66FR384cge-3');
    this.Message_inputBox=page.locator('#evf-277-field_yhGx3FOwr2-4');
    this.Button=page.locator('#evf-submit-277');

    }
    async enterPersonalInfo(name, email,phone,message){
        await this.Name_inputBox.fill(name);
        await this.Email_inputBox.fill(email);
        await this.Phone_inputBox.fill(phone);
        await this.Button.click();

    }

async navigate(){
await this.page.goto('https://practice.sdetunicorns.com/');
}
}