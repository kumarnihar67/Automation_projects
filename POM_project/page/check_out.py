from selenium.webdriver.common.by import By


class Check_out_page():
    def __init__(self, driver):
        self.driver = driver
        self.cart_link_class = 'shopping_cart_link'
        self.check_out_id = 'checkout'
        self.firstname_id = 'first-name'
        self.lastname_id = 'last-name'
        self.postalcode_id = 'postal-code'
        self.continue_id = 'continue'
        self.finish_id = 'finish'

    def click_cart(self):
        self.driver.find_element(By.CLASS_NAME, self.cart_link_class).click()

    def click_check_out(self):
        self.driver.find_element(By.ID,  self.check_out_id).click()
    def enter_firstname(self,firstname):
        self.driver.find_element(By.ID,self.firstname_id).send_keys(firstname)
    def enter_lastname(self,lastname):
        self.driver.find_element(By.ID, self.lastname_id).send_keys(lastname)
    def enter_postalcode(self,postalcode):
        self.driver.find_element(By.ID,self.postalcode_id).send_keys(postalcode)
    def click_continue(self):
        self.driver.find_element(By.ID,self.continue_id).click()
    def click_finish(self):
        self.driver.find_element(By.ID,self.finish_id).click()