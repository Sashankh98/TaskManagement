package com.cts.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cts.pages.AdministrationPage;
import com.cts.pages.Homepage;
import com.cts.pages.LoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class PrintTaskListStepDefinition {
	public WebDriver driver;
	AdministrationPage administrationPageObject = new AdministrationPage();
	Homepage homePageObject = new Homepage();
	LoginPage loginPageObject = new LoginPage();

	@Given("I have the browser with Task Management website")
	public void i_have_the_browser_with_Task_Management_website()
	{

		// Launching Browser
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium components\\chromedriver.exe");

		driver = new ChromeDriver();

		// Opening URL
		driver.get("http://examples.codecharge.com/TaskManager/Default.php");

		// maximizing browser window
		driver.manage().window().maximize();

		// adding implicit wait
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		 
	}

	@When("I open the browser and click on the Task List Icon")
	public void i_open_the_browser_and_click_on_the_Task_List_Icon() {
		homePageObject.clickOnAdministrator(driver);
		loginPageObject.enterUserName(driver, "admin");
		loginPageObject.enterPassWord(driver, "admin");
		loginPageObject.clickOnLogin(driver);
		homePageObject.clicOnTaskList(driver);

	}

	@Then("I should get the details of the tasks")
	public void i_should_get_the_details_of_the_tasks() {

		System.out.println("Task List");
		administrationPageObject.screenshot(driver,"TaskLIst");
		administrationPageObject.printList(driver);
		driver.quit();
	}

	@When("I click on Administration icon and i enter username as {string} and password as {string}")
	public void i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(String username,
			String password) {

		homePageObject.clickOnAdministrator(driver);
		loginPageObject.enterUserName(driver, username);
		loginPageObject.enterPassWord(driver, password);
		loginPageObject.clickOnLogin(driver);

	}

	@Then("I should access the portal with title as {string}")
	public void i_should_access_the_portal_with_title_as(String title) {

		String actualTitle = driver.getTitle();
		Assert.assertEquals(title, actualTitle);
		System.out.println(title);
		driver.quit();
	}

	@When("I click on Employees")
	public void i_click_on_Employees() {

		administrationPageObject.clickOnEmployees(driver);

	}

	@Then("I should get the details of the all the Employees")
	public void i_should_get_the_details_of_the_all_the_Employees() {
		System.out.println("Employees List");
		administrationPageObject.screenshot(driver,"EmployeesList");
		administrationPageObject.printList(driver);
		driver.quit();
	}

	@When("I click on Priorities")
	public void i_click_on_Priorities() {
		administrationPageObject.clickOnPriorities(driver);

	}

	@Then("I should get the details of the all the Priorities")
	public void i_should_get_the_details_of_the_all_the_Priorities() {

		System.out.println("Priorities List");
		administrationPageObject.screenshot(driver,"PrioritiesList");
		administrationPageObject.printList(driver);
		driver.quit();

	}

	@When("I click on Projects")
	public void i_click_on_Projects() {

		administrationPageObject.clickOnProjects(driver);
	}

	@Then("I should get the details of the all the  Projects")
	public void i_should_get_the_details_of_the_all_the_Projects() {
		System.out.println("Project List");
		administrationPageObject.screenshot(driver,"ProjectList");
		administrationPageObject.printList(driver);
		driver.quit();
	}

	@When("I click on Statuses")
	public void i_click_on_Statuses() {
		administrationPageObject.clickOnStatuses(driver);
	}

	@Then("I should get the details of the all the Statuses")
	public void i_should_get_the_details_of_the_all_the_Statuses() {
		System.out.println("Status List");
		administrationPageObject.screenshot(driver,"StatusesList");
		administrationPageObject.printList(driver);
		driver.quit();
	}

	@When("I click on Types")
	public void i_click_on_Types() {
		administrationPageObject.clickOnTypes(driver);
	}

	@Then("I should get the details of the all the Types")
	public void i_should_get_the_details_of_the_all_the_Types() {
		System.out.println("Types List");
		administrationPageObject.screenshot(driver,"TypesList");
		administrationPageObject.printList(driver);
		driver.quit();
	}

}
