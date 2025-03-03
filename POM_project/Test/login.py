import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import unittest
from Test.POM_project.page.loginPage import loginPage
from Test.POM_project.page.homepage import Homepage
from Test.POM_project.page.inventory_page import Inventorypage
from Test.POM_project.page.check_out import Check_out_page
service = Service(r"C:\Users\bikas\PycharmProjects\Firstselenium\drivers\chromedriver.exe")

class LoginTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(service=service)
        cls.driver.maximize_window()

    def test_login(self):
        driver = self.driver
        self.driver.get("https://www.saucedemo.com/")

        #user_login
        login = loginPage(driver)
        login.enter_username("standard_user")
        login.enter_password("secret_sauce")
        login.click_login()

        #contain_product_list
        inventory_page = Inventorypage(driver)
        inventory_page.add_product_to_cart()

        #checking_out_the_product
        check_out = Check_out_page(driver)
        check_out.click_cart()
        check_out.click_check_out()
        check_out.enter_firstname('abcd')
        check_out.enter_lastname('efgh')
        check_out.enter_postalcode('123456')
        check_out.click_continue()
        check_out.click_finish()

        #User_logout
        homepage = Homepage(driver)
        homepage.click_menu()
        homepage.click_logout()

        # self.driver.find_element(By.NAME, 'user-name').send_keys('standard_user')
        # self.driver.find_element(By.NAME, 'password').send_keys('secret_sauce')
        # self.driver.find_element(By.NAME, 'login-button').click()
        #self.driver.find_element(By.CLASS_NAME,'app_logo').click()
        #self.driver.find_element(By.ID,'react-burger-menu-btn').click()
        #self.driver.find_element(By.ID,'logout_sidebar_link').click()
        time.sleep(1)

    @classmethod
    def tearDown(cls):
        cls.driver.close()
        print("test completed")



