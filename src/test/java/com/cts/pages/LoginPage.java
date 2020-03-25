package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

	private  By userNameLoc = By.xpath("//input[@name='login']");
	private  By passWordLoc = By.xpath("//input[@name='password']");
	private  By loginButtonLoc = By.xpath("//input[@name='DoLogin']");

	public  void enterUserName(WebDriver driver, String username) {

		//sending userName credentials
		driver.findElement(userNameLoc).sendKeys(username);
	}

	public  void enterPassWord(WebDriver driver, String password) {

		//sending password credentials
		driver.findElement(passWordLoc).sendKeys(password);
	}

	public  void clickOnLogin(WebDriver driver) {

		//clicking on login button
		driver.findElement(loginButtonLoc).click();
	}

}
