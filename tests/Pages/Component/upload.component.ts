import {Page,Locator} from '@playwright/test';

class UploadComponent{
private page: Page;
uploadInput:Locator;
submitBtn: Locator;
successUploadMesage: Locator;
constructor(page: Page){
this.page=page;
//this.uploadInput = page.locator('//*[@id="upfile_1" and @name="uploadedfile_1"]');
this.submitBtn=page.locator('#upload_1');
this.successUploadMesage=page.locator('#wfu_messageblock_header_1_label_1')

}
async uploadFile(filepath: string){
  //await this.uploadInput.waitFor({ state: 'visible' });  // Optional but helpful
  await this.page.setInputFiles('//*[@id="upfile_1" and @name="uploadedfile_1"]', filepath);
  await this.submitBtn.click();
 
}

}

export default UploadComponent;