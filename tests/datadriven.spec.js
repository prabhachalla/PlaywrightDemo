const{test,expect} =require('@playwright/test');
import { ModuletestData} from  '../test-data/qa/google.json'

// const path = require('path');
// const testDataPath = path.join(__dirname, '..', 'test-data', 'google.json');
// const ModuletestData = require(testDataPath);

for (const [key,value] of Object.entries(ModuletestData)) {
    
 test(`Data driven Testing using jsonfile in playwright ${value}`, async ({page}) => {
    await page.goto(process.env.URL);
    await page.locator('#APjFqb').click();
    
    await page.locator('#APjFqb').fill(value);
    await page.locator('#APjFqb').press('Enter');
   
  })
}