import test, { page, expect } from "@playwright/test";

test("DEMOQA_test", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await expect(page).toHaveURL(/demoqa.com/);
  await page.pause()

  //Element
  await expect(page.getByRole('heading', { name: 'Elements' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Elements' })).toBeEnabled()
  await page.getByRole('heading', { name: 'Elements' }).click();

  //Element--Textbox
  await page.getByText('Text Box').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abcde');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abcde@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('123qweasdzxc876');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('qwe123asd678');
  await page.getByRole('button', { name: 'Submit' }).click();

  //Element--Checkbox
  await page.getByText('Check Box').click();
  await page.locator('#tree-node').getByRole('img').nth(3).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.getByRole('button', { name: 'Collapse all' }).click();

  //Element--Radio button
  await page.getByRole('listitem').filter({ hasText: 'Radio Button' }).click();
  await page.getByText('Yes').click();
  await page.getByText('Impressive').click();
  
  //Element--Web tables
  await page.getByText('Web Tables').click()
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('cie');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('efg');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('55');
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('5555555');
  await page.getByRole('textbox', { name: 'Department' }).click();
  await page.getByRole('textbox', { name: 'Department' }).fill('it');
  await page.getByRole('button', { name: 'Submit' }).click();

  //Element--Buttons
  await page.getByText('Buttons').click()
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick()
  await page.getByRole('button', { name: 'Right Click Me' }).click()
  await page.getByRole('button', { name: 'Click Me', exact: true }).click()

  //Element--Links
  await page.getByText('Links', { exact: true }).click()
  await page.getByRole('link', { name: 'Home', exact: true }).click()

  //Element--Broken images
  await page.getByText('Broken Links - Images').click()
  await page.locator('img').nth(2).isVisible()

  //Element--upload & download
  //await page.getByText('Upload and Download').click()
 // await page.getByRole('link', { name: 'Download' }).click()

  //Element--Dynamic property
  await page.getByText('Dynamic Properties').click()
  await page.getByRole('button', { name: 'Will enable 5 seconds' }).click()
  await page.getByRole('button', { name: 'Color Change' }).click()
  await page.getByRole('button', { name: 'Visible After 5 Seconds' }).click()

  //Forms
  await page.getByText('Forms').click()
  await page.getByText('Practice Form').click()
  await page.getByRole('textbox', { name: 'First Name' }).click()
  await page.getByRole('textbox', { name: 'First Name' }).fill('ABCDEF')
  await page.getByRole('textbox', { name: 'Last Name' }).click()
  await page.getByRole('textbox', { name: 'Last Name' }).fill('GHIJKL')
  await page.getByRole('textbox', { name: 'name@example.com' }).click()
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abc@gmail.yahoo')
  await page.getByText('Male', { exact: true }).click()
  await page.getByRole('textbox', { name: 'Mobile Number' }).click()
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0123456789')
  await page.locator('#dateOfBirthInput').click()
  await page.locator('#dateOfBirthInput').fill('10 Mar 2025')

  await page.locator('.subjects-auto-complete__value-container').click()
  await page.locator('#subjectsInput').fill('e');
  await page.getByText('English', { exact: true }).click()
  await page.locator('.subjects-auto-complete__value-container').click()
  await page.getByText('Music').click()
  await page.getByRole('textbox', { name: 'Current Address' }).click()
  await page.getByRole('textbox', { name: 'Current Address' }).fill('asdzxcqwe')
  await page.getByRole('button', { name: 'Submit' }).click()
  //await page.getByRole('button', { name: 'Close' }).click()
  await page.getByRole('button', { name: 'Close' }).click({ force: true });

  //Alert,frame and window
  await page.getByText('Alerts, Frame & Windows').click()
  //windows
  await page.getByText('Browser Windows').click()
  await page.getByRole('button', { name: 'New Tab' }).click()
  await page.getByRole('button', { name: 'New Window', exact: true }).click()
  await page.getByRole('button', { name: 'New Window Message' }).click()
  //Alert
  await page.getByText('Alerts', { exact: true }).click()
  await page.locator('#alertButton').click()
  await page.locator('#confirmButton').click()
  await page.locator('#timerAlertButton').click()
  await page.locator('#confirmButton').click()
  await page.locator('#confirmButton').click()
  await page.locator('#confirmButton').click()
  await page.locator('#promtButton').click()
  await page.locator('#confirmButton').click()

  //frames
  await page.getByText('Frames', { exact: true }).click();
  await page.getByText('Nested Frames').click();
  await page.locator('#frame1').contentFrame().locator('iframe').contentFrame().locator('html').click();
  await page.locator('#frame1').contentFrame().locator('html').click();

  //Modal dailogue
  await page.getByRole('listitem').filter({ hasText: 'Modal Dialogs' }).click();
  await page.getByRole('button', { name: 'Small modal' }).click();
  await page.locator('#closeSmallModal').click();
  await page.getByRole('button', { name: 'Large modal' }).click();
  await page.locator('#closeLargeModal').click();

  //widgets
  await page.getByText('Widgets').click();
  //widgets--Accordian
  await page.getByText('Accordian').click();
  await page.getByText('What is Lorem Ipsum?').click();
  await page.getByText('Where does it come from?').click();
  await page.getByText('Why do we use it?').click();
  //widgets--Autocomplete
  await page.getByText('Auto Complete').click();
  await page.locator('.auto-complete__value-container').first().click();
  await page.locator('#autoCompleteMultipleInput').fill('re');
  await page.getByText('Red', { exact: true }).click();
  await page.locator('#autoCompleteMultipleInput').fill('g');
  await page.getByText('Green', { exact: true }).click();
  await page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
  await page.locator('div').filter({ hasText: /^Red$/ }).nth(2).click()
  
  //Date picker
  await page.getByText('Date Picker').click();
  await page.locator('#datePickerMonthYearInput').click();
  await page.getByRole('option', { name: 'Choose Monday, March 10th,' }).click();
  await page.locator('#dateAndTimePickerInput').click();
  await page.getByRole('option', { name: 'Choose Tuesday, March 11th,' }).click();

  //Progress bar
  await page.getByText('Progress Bar').click()
  await expect(page.locator('#progressBar')).toBeVisible()
  await page.getByRole('button', { name: 'Start' }).click()
  await page.getByRole('button', { name: 'Stop' }).click()
  //Tabs
  await page.getByText('Tabs').click()
  await page.getByRole('tab', { name: 'What' }).click()
  await page.getByRole('tab', { name: 'Origin' }).click()
  await page.getByRole('tab', { name: 'Use' }).click()
  
  //intraction
  await page.getByText('Interactions').click();
  await page.getByText('Sortable').click();
  await page.getByRole('tab', { name: 'List' }).click();
  await page.getByRole('tab', { name: 'Grid' }).click();
  await page.getByText('Selectable').click();
  await page.getByRole('tab', { name: 'List' }).click();
  await page.getByText('Cras justo odio').click();
  await page.getByText('Dapibus ac facilisis in').click();
  await page.getByText('Morbi leo risus').click();
  await page.getByText('Porta ac consectetur ac').click();
  await page.getByRole('tab', { name: 'Grid' }).click();
  await page.getByText('One').click();
  await page.getByText('Two').click();
  await page.getByText('Three').click();
  await page.getByText('Four').click();
  await page.getByText('Five').click();
  await page.getByText('Six').click();
  await page.getByText('Seven').click();
  await page.getByText('Eight').click();
  await page.getByText('Nine').click();
  await page.getByText('Dragabble').click();
  await page.getByRole('tab', { name: 'Simple' }).click();
  await page.getByText('Drag me').click();
  await page.getByRole('tab', { name: 'Axis Restricted' }).click();
  await page.getByText('Only X').click();
  await page.getByText('Only Y').click();
  await page.getByRole('tab', { name: 'Container Restricted' }).click();
  await page.getByText('I\'m contained within the box').click();
  await page.getByRole('tab', { name: 'Cursor Style' }).click();
  await page.getByText('I will always stick to the').click();
  await page.getByText('My cursor is at top left').click();
  await page.locator('#cursorBottom').click();
  //Book store
  await page.getByText('Book Store Application').click();
  await page.getByText('Login').click();
  await page.getByRole('heading', { name: 'Login', exact: true }).click();
  await page.getByRole('heading', { name: 'Welcome,' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('efg');
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('abcdefg');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('qwerty98765');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Back to Login' }).click();
  await page.close()


























  

























})
