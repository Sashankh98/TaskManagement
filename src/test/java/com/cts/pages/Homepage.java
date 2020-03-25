package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Homepage {
	
	public WebDriver driver;	
	public  By taskLoc = By.xpath("//img[@src='images/task-list-button.gif']");
	public  By administratorLoc = By.xpath("//img[@src='images/administration-button.gif']");
	
	public void clicOnTaskList(WebDriver driver)
	{
		//clicking task icon
		driver.findElement(taskLoc).click();
				
	}
	
	public void clickOnAdministrator(WebDriver driver) 
	{
		//clicking administrator icon
		driver.findElement(administratorLoc).click();
	}
	

}

