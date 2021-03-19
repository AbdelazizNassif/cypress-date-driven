/// <reference types="Cypress" />

/* Designs used in this Framework is Page Object Model and Data Driven Test */
/*importing classes to be used insdie this class */
const { HomePage } = require("../pages/HomePage");
const { RegisterPage } = require("../pages/RegisterPage");

/*taking Objects of the classes to be used insdie this class */
const homeObj = new HomePage();
const regObj = new RegisterPage();

/*  Enum To determine which asssertions to be used at the end of the test case sequence
    Every Time the Tests of sequence is the same, 
    but the test data are not which will affect the assertion results 
*/
const testStates = {
    RobotVerifError: '1',
    PhoneFormatError: '2',
    NON_MATCHPASSWORDS: '3'
}

/*varaible to help the Enum Doing its goal */
var state = testStates.RobotVerifError;

/*importing the test data json file */
const testData = require("../fixtures/EndToEndTestData.json")

/*for Loop on the test data to ru the test sequence multiple times with different test data */
testData.forEach((testCase) => {
    /*function to run before each test case to set up the test case */
    describe('set up', () => {
     beforeEach(() => {
        /*navigating to the root of ta3limy application
        it will run three times according to the or loop and json file*/
        cy.visit('/');
        /*navigating to the register page ta3limy application*/
        homeObj.clickRegister();
        
    });
    /*test case includes the sequence of the registration as student with diffrent test data
    1 - selecting student
    2 - filling first name
    3 - filling last name
    4 - filling mobile number
    5 - select male as Gender
    6 - select student study year
    7 - fill password
    8 - confirm your password
    9 - accept terms and condition
    10 - submit the registration form
    */
    /*the tesct case will run three times:
    ------- first run: the user will fill the form with all valid data but will not confirm Robot ReCaptch.
    ------- second run: the user will fill the form with all valid data except the phone format
            and will not confirm Robot ReCaptch. 
    ------- third run: the user will fill the form with all valid data except the password confirmation
            and will not confirm Robot ReCaptch. 
     */
    it('Register ' + testCase.title, function () {
        regObj.clickStudentBtn();
        regObj.fillFirstName(testCase.firstName);
        regObj.fillLastName(testCase.lastName);     
        regObj.fillMobileNumber(testCase.mobPhone);
        regObj.clickMaleOption();
        regObj.selectStudyYear(testCase.studYear);
        regObj.setPassword(testCase.regPassword);
        regObj.setConfirmPassword(testCase.regCnfrmPassword);
        regObj.acceptTermsAndConditions();
        regObj.submitRegistrationForm();
        /*first run: Check the robot verification error message */
        if(state == testStates.RobotVerifError)
        {
            state = testStates.PhoneFormatError;
            regObj.checkRobotVerificationRequired();
        }
        /*second run: Check the robot verification error message + phone format error message */
        else if(state == testStates.PhoneFormatError)
        {
            state = testStates.NON_MATCHPASSWORDS;
            regObj.checkRobotVerificationRequired();
            regObj.checkWrongPhoneFormatError();
        }
        /*third run: Check the robot verification error message + non matched passwords error message */
        else if(state == testStates.NON_MATCHPASSWORDS)
        {
            regObj.checkRobotVerificationRequired();
            regObj.checkNonMatchPasswordsError();
        }
        });
    });
});
