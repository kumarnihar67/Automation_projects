from selenium.webdriver.common.by import By


class loginPage():

    def __init__(self, driver):
        self.driver = driver

        self.username_textbox_name = "user-name"
        self.password_textbox_name = "password"
        self.login_button_name     = "login-button"

    def enter_username(self, username):
        self.driver.find_element(By.NAME,self.username_textbox_name).clear()
        self.driver.find_element(By.NAME,self.username_textbox_name).send_keys(username)

    def enter_password(self, password):
        self.driver.find_element(By.NAME,self.password_textbox_name).clear()
        self.driver.find_element(By.NAME,self.password_textbox_name).send_keys(password)

    def click_login(self):
        self.driver.find_element(By.NAME,self.login_button_name).click()
