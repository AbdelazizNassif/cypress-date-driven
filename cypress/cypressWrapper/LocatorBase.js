/*This class is wrapping cypress most common locating strategies */
export class LocatorBase {
    /*locate element by its id attribute*/
    locateById(id)
	{
		return cy.get('#' + id);
	}
	/*scroll then locate element by its id attribute*/
	scrollThenlocateById(id)
	{
		return cy.get('#' + id).scrollIntoView();
	}
	/*locate element by its class attribute */
	locateByClass(classAttr)
	{
		return cy.get('.' + classAttr);
	}
	/*locate element by its text */
	locateByTxt(txt)
	{
		return cy.contains(txt);
	}
	/*locate element by its name attribute */
	locateByName(nameAttr)
	{
		return cy.get( "[name=" + nameAttr + "]" );
	}
	/*locate element by its full CSS */
	locateByFullCss(full_css)
	{
		return cy.get(full_css);
	}
	
	locateFromListById(id, list_index)
	{
		return cy.get('#' + id).find('li').eq(list_index);
	}

	locateByAttr(attr, attrValue)
	{
		return cy.get( "[" + attr + "="  + nameAttr + "]" );
	}

	locatefromList(root, todoIndex, child)
	{
		return cy.get(root + " li:nth-child(${todoIndex + 1}) " + child );
    }
} 