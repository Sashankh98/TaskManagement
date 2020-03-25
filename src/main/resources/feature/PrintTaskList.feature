Feature: open the browser
		In order to open to the website
		As a task manager
		I want to print the tasks list
		
Scenario: Printing TaskList
Given I have the browser with Task Management website
When I open the browser and click on the Task List Icon
Then I should get the details of the tasks	

Scenario: Logging the application with valid credentials
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
Then I should access the portal with title as 'Administration'

Scenario: printing Employees List
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
And  I click on Employees 
Then I should get the details of the all the Employees

Scenario: printing Priorities List
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
And  I click on Priorities
Then I should get the details of the all the Priorities

Scenario: printing Projects List
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
And  I click on Projects
Then I should get the details of the all the  Projects

Scenario: printing Statuses List
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
And  I click on Statuses
Then I should get the details of the all the Statuses

Scenario: printing Types List
Given I have the browser with Task Management website
When I click on Administration icon and i enter username as 'admin' and password as 'admin'
And  I click on Types
Then I should get the details of the all the Types