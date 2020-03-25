package com.cts.pages;

import java.io.File;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AdministrationPage {
	
	
public  By employeeLoc =By.linkText("Employees");
public  By prioritiesLoc = By.linkText("Priorities");
public By projectLoc = By.linkText("Projects");
public  By statusesLoc = By.linkText("Statuses");
public  By typesLoc= By.linkText("Types");
public  By tableLoc = By.xpath(" //table[@class='Grid']//tbody//tr");
	
WebDriver driver;
	public  void clickOnEmployees(WebDriver driver)
	{
		//clicking on employee 
		driver.findElement(employeeLoc).click();
	
	}
	public  void clickOnPriorities(WebDriver driver)
	{
		//clicking on priorities 
		driver.findElement(prioritiesLoc).click();
	
	}
	public  void clickOnProjects(WebDriver driver)
	{
		//clicking on project 
		driver.findElement(projectLoc).click();
	
	}
	public  void clickOnStatuses(WebDriver driver)
	{
		//clicking on statuses 
		driver.findElement(statusesLoc).click();
	
	}
	public void clickOnTypes(WebDriver driver)
	{
		//clicking on types 
		driver.findElement(typesLoc).click();
	
	}
	
	public void screenshot(WebDriver driver, String name)
	{
		
		Date date = new Date();
		String dateStr = date.toString().replace(":", "-");

		TakesScreenshot ts = (TakesScreenshot) driver;
		File file = ts.getScreenshotAs(OutputType.FILE);

		file.renameTo(new File("src/test/resources/screenshot" + dateStr + name + ".png"));
	}
	
	
	
	public void printList(WebDriver driver)
	{
		List<WebElement> allRows = driver.findElements(tableLoc);

		for (WebElement row : allRows) {
			List<WebElement> cells = row.findElements(By.tagName("td"));

			for (WebElement cellData : cells) {
				//printing cell data
				System.out.print(cellData.getText() + "  ");

			}
			System.out.println();
			System.out.println();
		}
		
	}

}
