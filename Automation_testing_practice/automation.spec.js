import test, { page, expect } from "@playwright/test";

test("Automation_test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.pause()

  await page.getByRole('link', { name: 'GUI Elements' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('catapult');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('cat@yahoo.gmail');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('#123qwer road zxcv');
  //Gender
  await page.getByText('Gender:').click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  //Days
  await page.getByText('Days:').click();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  //Select a country
  await page.getByText('Country:').click();
  await page.getByLabel('Country:').selectOption('india');
  //Colours
  await page.getByText('Colors:').click();
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Colors:').selectOption(['red', 'blue']);
  await page.getByLabel('Colors:').selectOption(['red', 'blue', 'green']);
  await page.getByLabel('Colors:').selectOption(['red', 'blue', 'green', 'yellow']);
  await page.getByLabel('Colors:').selectOption(['red', 'blue', 'green', 'yellow', 'red']);
  await page.getByLabel('Colors:').selectOption(['red', 'blue', 'green', 'yellow', 'white']);
  //Sorted_list
  await page.getByText('Sorted List:').click();
  await page.getByLabel('Sorted List:').selectOption('cat');
  await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah']);
  await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah', 'deer']);
  await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah', 'deer', 'dog']);
  //Date picker
  await page.getByText('Date Picker 1:').click();
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '23' }).click();
  await page.getByText('Date Picker 2:').click();
  await page.locator('#txtDate').click();
  await page.getByLabel('Select month').selectOption('4');
  await page.getByRole('link', { name: '9', exact: true }).click()
  await page.getByText('Date Picker 3: (Select a Date').click();
  await page.getByPlaceholder('Start Date').fill('2024-01-10');
  await page.getByPlaceholder('End Date').fill('2027-05-10');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();

  //Dynamic_button
  await page.getByRole('heading', { name: 'Dynamic Button' }).click();
  await page.getByRole('button', { name: 'START' }).click();

  //Alerts & popup
  await page.getByRole('button', { name: 'Simple Alert' }).click()
  await page.getByRole('button', { name: 'Confirmation Alert' }).click()
  await page.getByRole('button', { name: 'Confirmation Alert' }).click()
  await page.getByRole('button', { name: 'New Tab' }).click()
  await page.getByRole('button', { name: 'Popup Windows' }).click()
  
  //Mouse hover
  await page.getByRole('button', { name: 'Point Me' }).click()
  await page.getByRole('link', { name: 'Mobiles' }).click()
  await page.getByRole('button', { name: 'Point Me' }).click()
  await page.getByRole('link', { name: 'Laptops' }).click()

  //Double click
  await page.locator('#field1').clear()
  await page.locator('#field1').fill('software testing')
  await page.getByRole('button', { name: 'Copy Text' }).dblclick()

  //drag and drop
  await page.locator('#draggable').dragTo(page.locator('#droppable'));

  //slider
  await page.locator('#slider-range span').first().dragTo(page.locator('#slider-range span').nth(1))

  //dropdown
  await page.getByRole('textbox', { name: 'Select an item' }).click()
  await page.getByText('Item 54').click()

  //webtable
  await page.getByRole('row', { name: '1 Smartphone $' }).getByRole('checkbox').click()
  await page.getByRole('row', { name: 'Laptop $19.99' }).getByRole('checkbox').click()
  await page.getByRole('row', { name: 'Tablet $5.99' }).getByRole('checkbox').click()
  await page.getByRole('row', { name: 'Smartwatch $7.99' }).getByRole('checkbox').click()
  await page.getByRole('row', { name: 'Wireless Earbuds $8.99' }).getByRole('checkbox').click()

  //Forms
  await page.locator('#input1').fill('Qazwsxedcrfv')
  await page.locator('#section1').getByRole('button', { name: 'Submit' }).click()
  await page.locator('#input2').fill('1234567890')
  await page.locator('#section2').getByRole('button', { name: 'Submit' }).click()
  await page.locator('#input3').fill('!@#$%^&*')
  await page.locator('#section3').getByRole('button', { name: 'Submit' }).click()

  //Hidden element
  await page.getByRole('link', { name: 'Hidden Elements & AJAX' }).click()
  await page.getByRole('textbox', { name: 'Input Box 1:' }).fill("123qweasdzxc")
  await page.getByRole('checkbox', { name: 'Checkbox' }).click()
  await page.getByRole('button', { name: 'Toggle Input Box' }).click()
  await page.getByRole('button', { name: 'Toggle Checkbox' }).click()
  await page.getByRole('button', { name: 'Load AJAX Content' }).click()


  await page.pause()

})