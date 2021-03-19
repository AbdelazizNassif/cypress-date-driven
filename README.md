# (UI Testing)

### Tools Used For UI testing:
```bash
JavaScript + Cypress (UI automation) + Mochawsome (custom report generation) 
```
### Design Patterns Used in this framework:
```bash
Page Object Model (POM) Design and Data Driven Test (DDT) from Json file in cypress/fixtures folder.
```

### Scenarios For UI Testing 
Scenarios: Registration
```bash
1 - User try to register with valid data without robot verification.
    - user register validly in al fields.
    - user agree terms.
    - user does not verify robot check.
    - user check error message.
2 - User try to register with invalid phone format (mobile number less than 11 numbers) & without robot verification.
    - user register entering valid data in all the fields but phone number (mobile number less than 11 numbers).
    - user agree terms.
    - user does not verify robot check.
    - user check error message.
3 - User try to register with non matching passwords & without robot verification.
    - user register entering valid data in all the fields but non matching passwords.
    - user agree terms.
    - user does not verify robot check.
    - user check error message.
```

### Features:
```bash
1 - Data Driven: the test case sequence will run multiple times with different test data.
2 - As a result of using DDT model the assertion are assigned to a certain test sequence using JavaScript Enums.
3 - Custom report generation for all the test cases.
```
### Components Used For This Testing Framework:
```bash
1 - cypress/cypressWrapper:

contains (PageBase.js, LocatorBase.js) classes:
- PageBase acts as service provider for the web pages. provide cypress common services (clicking, scrolling, typing , etc.) for the pages.
- LocatorBase acts as wrapper for cypress locating strategy.

2 - cypress/pages:

contains( HomePage.js & RegisterPage.js) classes:
- HomePage & RegisterPage act as hub for certain page web elements (the page locators) and also some functions to manipluale these elements to be used as test steps inside test cases.

3 - cypress/fixtures:
contains( EndToEndTestData.json ) file.
- saving the test data to be used externally to the test cases.

4 - cypress/integration:

contains(B_RegisterTest.spec.js) class.
- use objects from the page classes to construct test cases and also use some assertions to check the test cases status.

5 - cypress/assertions:

contains(Assertions.js) class.
- wrapping the assertions provided by chai assertions to be used in test cases to determine whether pass or fail.

6 - cypress.json:
- contains the configurations used for this framework like App root url and reporter etc. .

7 - package.json:
- contains the packages used for this framework like cypress and mochawsome etc. .

```

#### Reports
```bash
an html report in cypress/reports contains the status of the test cases as a whole.
```

### Limitations:
```bash
1 - The test execution is experienced only on google chrome.
2 - Not all the invalid registration scenarios are tested just three cases (ignore robot verification + Error Phone Format + Non Matched Passwords).
```
