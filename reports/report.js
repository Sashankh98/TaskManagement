$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/PrintTaskList.feature");
formatter.feature({
  "name": "open the browser",
  "description": "\t\tIn order to open to the website\n\t\tAs a task manager\n\t\tI want to print the tasks list",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Printing TaskList",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the browser and click on the Task List Icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_open_the_browser_and_click_on_the_Task_List_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the tasks",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_tasks()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logging the application with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access the portal with title as \u0027Administration\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_access_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "printing Employees List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Employees",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Employees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the all the Employees",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_all_the_Employees()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "printing Priorities List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Priorities",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Priorities()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the all the Priorities",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_all_the_Priorities()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "printing Projects List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Projects",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Projects()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the all the  Projects",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_all_the_Projects()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "printing Statuses List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Statuses",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Statuses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the all the Statuses",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_all_the_Statuses()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "printing Types List",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_have_the_browser_with_Task_Management_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Administration icon and i enter username as \u0027admin\u0027 and password as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Administration_icon_and_i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Types",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_click_on_Types()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the details of the all the Types",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.PrintTaskListStepDefinition.i_should_get_the_details_of_the_all_the_Types()"
});
formatter.result({
  "status": "passed"
});
});