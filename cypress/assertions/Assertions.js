/*This Class Contains Assertions to be used most probalby at the end of each test case*/ 
export class AssertResults {
    /*assert that certain element is visible */
    assertElmentVisible(WebElement)
	{
		WebElement.should('be.visible');
	}
	/*assert that certain element contains a certain attribute */
	assertElmentContainsAttribute(WebElement, attr)
	{
		WebElement.should('have.attr' , attr);
	}
	/*assert that the page title contains a certain text */
	assertPageTitleContains(partOfTitle)
	{
		cy.title().should('contain' , partOfTitle);
	}
	/*assert that the page url equal to cerain url */
	assertPageUrlEquals(url)
	{
		cy.url().should('equal' , url);
	}
	/*assert that certain element contains a certain text */
	assertElementTextEquals(WebElement, elemTxt)
	{
		WebElement.should('have.text', elemTxt);
	}
	assertLisIsEmpty(listElem)
	{
		listElem.should('not.have.descendants' , 'li');
	}
	assertLisIsNotEmpty(listElem)
	{
		listElem.should('have.descendants' , 'li');
	}
	assertElementContainsCss(WebElement, cssKey, cssValue)
	{
		WebElement.should('have.css', cssKey, cssValue);
	}


	


} 