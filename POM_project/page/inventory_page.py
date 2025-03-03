from selenium.webdriver.common.by import By


class Inventorypage():

    def __init__(self, driver):
        self.driver = driver

        self.product_list_id = 'inventory_container'
        self.add_product_id = 'add-to-cart-sauce-labs-backpack'

    def get_product_list(self):
        self.driver.find_elements(By.ID,self.product_list_id)

    def add_product_to_cart(self):
        self.driver.find_element(By.ID,self.add_product_id).click()