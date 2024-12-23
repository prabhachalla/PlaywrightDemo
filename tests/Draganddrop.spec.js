const {test,expect}=require('@playwright/test')

test('Drog and Drop the element',async ({page}) => {
await page.goto('https://letcode.in/dropable');
const source=await page.getByText('Drag me to my target');
const target=await page.locator('#droppable');
await source.dragTo(target);
await expect(target).toHaveText('Dropped!');
})