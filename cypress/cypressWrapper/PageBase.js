/*This class wraps cypress most common functions like clicking, scrolling, typing, etc.. */
export class PageBase {
    /*clicking function */
    clickButtonOrLink(WebElement)
	{
		WebElement.click();
	}
	/*typing function */
    setTextElementText(WebElement, textItself)
	{
		//WebElement.clear();
		WebElement.type(textItself);
	}
	/*scrolling function */
    scrollToElement(WebElement)
	{
		WebElement.scrollIntoView();
	}
	/*selecting from drop down list function */
    selectFrmDDListByValue(WebElement, value)
	{
		WebElement.select(value);
    }


} 