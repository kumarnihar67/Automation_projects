from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class Homepage():
    def __init__(self, driver):
        self.driver = driver

        self.menu_link_id = "react-burger-menu-btn"
        self.logout_link_id = "logout_sidebar_link"

    def click_menu(self):
        self.driver.find_element(By.ID,self.menu_link_id).click()

    def click_logout(self):

        WebDriverWait(self.driver, 20).until(EC.element_to_be_clickable((By.ID,self.logout_link_id))).click()
       # self.driver.find_element(By.ID,  self.logout_link_id).click()
