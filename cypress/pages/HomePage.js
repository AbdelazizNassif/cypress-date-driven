/// <reference types="Cypress" />

/*importing classes to be used insdie this class */
import { PageBase } from "../cypressWrapper/PageBase";
import { LocatorBase } from "../cypressWrapper/LocatorBase";

/*taking Objects of the classes to be used insdie this class */
const pageBase = new PageBase();
const locator = new LocatorBase();

/*Web Elements locators to be used */
var regBtnLocator  = 'تسجيل حساب';
/*varaiables to be used as webelements themselves */
var registerButton;

/*this class will be used as test steps and asserions generator for the Test cases */
export class HomePage {
	/*function to navigate to the registration page */
	clickRegister()
	{
		registerButton = locator.locateByTxt(regBtnLocator);
		pageBase.clickButtonOrLink(registerButton);
	}


} 