/// <reference types="Cypress" />

/*importing classes to be used insdie this class */
import { PageBase } from "../cypressWrapper/PageBase";
import { LocatorBase } from "../cypressWrapper/LocatorBase";
const { AssertResults } = require("../assertions/Assertions");

/*taking Objects of the classes to be used insdie this class */
const pageBase = new PageBase();
const locator = new LocatorBase();
const assertTest = new AssertResults();
/*Web Elements locators to be used in the Registration page*/
var phoneFormatErrorLocator = "p[class='css-27004v e1r465g30']";
var nonMatchPasswordsErrorLocator = "p[class='css-27004v e1r465g30']";
var robotVerifErrorlocator = 'رمز التحقق مطلوب';
var termsRadioBtnLocator = "label[for='termsAndConditionsCheck']";
var submitBtnLocator = 'تسجيل حساب';
var termsRadioLocator = '.css-ubxa2z > :nth-child(1)';
var maleOptionLocator = 'ذكر';
var gradeLocator = 'grade';
var paswordLocator = 'password';
var confirmPasswordLocator = 'passwordConfirmation';
var lastNameLocator = 'lastName';
var mobileNumberLocator = 'mobileNumber';
var studentBtnLocator = 'طالب';
var firstNameLocator = 'firstName';
/*varaiables to be used as webelements themselves */
var click_student;
var firstNameBox;
var lastNameBox;
var mobileNumberBox;
var maleOption;
var studyYearList;
var passwordBox;
var confirmPasswordBox;
var termsRadioBtn;
var reCaptchaBox;
var submitBtn;
var robotVerifMsg;
var phneFormatError;
var nonMatchError;

/*this class will be used as test steps and asserions generator for the Test cases */
export class RegisterPage {
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
   /* function to locate the student option and select it as test step for the test case */
	clickStudentBtn()
	{
		click_student = locator.locateByTxt(studentBtnLocator);
		pageBase.clickButtonOrLink(click_student);
	}
	/* function to locate the first name  and fill it as test step for the test case */
	fillFirstName(firstNameInput)
	{
		firstNameBox = locator.locateById(firstNameLocator);
		pageBase.setTextElementText(firstNameBox, firstNameInput);
	}
	/* function to locate the last name  and fill it as test step for the test case */
	fillLastName(lastNameInput)
	{
		lastNameBox = locator.locateById(lastNameLocator);
		pageBase.setTextElementText(lastNameBox, lastNameInput);
	}
	/* function to scroll to and locate the mobile number and fill it as test step for the test case */
	fillMobileNumber(mobileNumberInput)
	{
		mobileNumberBox =  locator.locateById(mobileNumberLocator).scrollIntoView();
		cy.wait(500);
		mobileNumberBox =  locator.locateById(mobileNumberLocator);
		pageBase.setTextElementText(mobileNumberBox, mobileNumberInput);
	}
	/* function to locate the male option and select it as test step for the test case */
	clickMaleOption()
	{
		maleOption =  locator.locateByTxt(maleOptionLocator).click();	
	}
	/* function to locate the study year list and select form it it as test step for the test case */
	selectStudyYear(studYr)
	{
		studyYearList = locator.locateById(gradeLocator);
		pageBase.selectFrmDDListByValue(studyYearList, studYr);
	}
	/* function to locate the password  and fill it as test step for the test case */
	setPassword(passwordInput)
	{
		passwordBox = locator.locateById(paswordLocator);
		pageBase.setTextElementText(passwordBox, passwordInput);
	}
	/* function to locate the confirm password  and fill it as test step for the test case */
	setConfirmPassword(cnfrmpasswordInput)
	{
		confirmPasswordBox = locator.locateById(confirmPasswordLocator);
		pageBase.setTextElementText(confirmPasswordBox, cnfrmpasswordInput);
	}
	/* function to scroll to and locate the radio button and check it as test step for the test case */
	acceptTermsAndConditions()
	{
		termsRadioBtn =  locator.locateByFullCss(termsRadioBtnLocator).scrollIntoView();
		cy.wait(500);
		termsRadioBtn =  locator.locateByFullCss(termsRadioLocator).click('right');
	}
	/* function to scroll to and locate the submit button and click it as test step for the test case */
	submitRegistrationForm()
	{
		termsRadioBtn =  locator.locateByFullCss(termsRadioBtnLocator).scrollIntoView();
		cy.wait(500);
		submitBtn = locator.locateByTxt(submitBtnLocator);
		pageBase.clickButtonOrLink(submitBtn);
	}
	/* function to assert the first, second & third run: 
	the test will fail if the Robot verify Msg error is not displayed as part of test checks */
	checkRobotVerificationRequired()
	{
		robotVerifMsg =  locator.locateByTxt(robotVerifErrorlocator);
		assertTest.assertElmentVisible(robotVerifMsg);
	}
	/* function to assert the second run:
	the test will fail if the phone format error is not displayed as part of test checks */
	checkWrongPhoneFormatError()
	{
		phneFormatError =  locator.locateByFullCss(phoneFormatErrorLocator).scrollIntoView().should('be.visible');
		cy.wait(500);
	}
	/* function to assert the third run:
	the test will fail if the non match passwords error is not displayed as part of test checks */
	checkNonMatchPasswordsError()
	{
		nonMatchError =  locator.locateByFullCss(nonMatchPasswordsErrorLocator);
		assertTest.assertElmentVisible(nonMatchError);
	}
	


} 