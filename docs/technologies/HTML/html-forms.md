HTML Forms Documentation: [https://developer.mozilla.org/en-US/docs/Learn/Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

| \<form\>\</form\> action=”url” method=”post/get” | Wraps all the elements of a form together. Submits form to a destination HTTP Method used to submit form |
| :---- | :---- |
| \<input\> type=”type” name=”name” id=”name  | Input element for a form. The type of input. Name of the input Allows it to be targeted by CSS or Javascript. |
| \<textarea\>\</textarea\> name=”name” id=”name   | Accepts multiple lines of input from the user. Name of the input Allows it to be targeted by CSS or Javascript. |
| \<button\>\</button\> type=”button/submit/reset” | A clickable button in HTML What type of button it is |
| \<label\>\</label\> for=”name” | A label for an input element. Corresponds with the id element of an input. Gives focus to the element. |
| \<fieldset\>\</fieldset\> | Groups input elements together. |
| \<legend\>\</legend\> | Labels a fieldset. |
| \<span\>\</span\> class=”class”  | Marks up text. Assigns a CSS style to it. |
| \<select\>\</select\> id=”name” name=”name” | Makes a select drop down menu Name of the input Allows it to be targeted by CSS or Javascript. |
| \<option\>\<option\> value=”value” | An option in a select drop down menu. Value that the variable takes on. |
| \<optgroup\>\</optgroup\> label=”Label” | Organizes options in a select drop down Names the optgroup |

Overview of Forms:

* A web form accepts data from users.  
* CSS will provide styling to the html form.

The Form Element:

* \<form\>\</form\> : wraps all of the elements of the form together.  
* Cannot nest forms inside one another.  
* A language could be used to send or process data in a form. (PHP, Python, Ruby, etc.)  
* Form Attributes:  
  * action=”url” : Web address of a program that processed data when the form is submitted.  
  * method=”post/get” : HTTP method that the browsers uses to submit the form  
    * Post: Is the HTTP POST Method. Data from the body is sent or posted to a server.  
      * Most popular.  
    * Get: Corresponds to the HTTP GET method. Data is sent inside of the URL and parameters are separated by a question mark.

The Input Element

* Most commonly used form element.  
* Headers make forms look nicer.  
* \<input\> : input element inside of a form  
  * Self closing tag  
* Input Attributes:  
  * type=”type” : What kind of input is requested.  
    * Possible Values: email, tel (telephone), password, checkbox, radio, etc.  
  * id=”name” : Helpful for targeting elements with CSS or Javascript. Can also be used to associate labels with specific form controls.  
  * name=”name” : When the form is submitted to a server, the name allows the server to understand data and process it accordingly.

The Textarea Element

* Textarea Element accepts multiple lines of text from the user.  
* Not a self closing tag.  
* \<textarea\>\</textarea\> : Allows for multiple lines of input for the user. It is scalable.  
* Textarea Attributes  
  * id=”name” : Helpful for targeting elements with CSS or Javascript. Can also be used to associate labels with specific form controls.  
  * name=”name” : When the form is submitted to a server, the name allows the server to understand data and process it accordingly.

The Button Element:

* Allows the user to submit a form. Send the data to the server.  
* \<button\>\</button\> : A clickable button in HTML.  
* Not a self closing element.  
* Button attributes:  
  * type=”submit/reset/button” : What the button does.  
    * Submit: Submit the form and send the data to the action destination.  
    * Reset : Clears all form data when clicked.  
    * Button : No default behavior. Used in combination with javascript

The Label Element:

* Lets users know what each input is for.  
* \<label\>\</label\> : Creates a label for an input element.  
* Does not surround the input element.  
* Label Attributes:  
  * for=”name” : corresponds with the id tag of the input element. Clicking on it focuses on the input.

Fieldsets and Legends

* Groups form controls together.  
* Grouped together using a fieldset element and labeled with a legend.  
* \<fieldset\>\</fieldset\> : Creates a fieldset. Encloses its contents.  
* Makes padding and margin adjustments based on fieldsets.  
* \<legend\>\</legend\> : Labels a fieldset.

Select Menus:

* Allows you to make a set of predefined options that the user can choose from.   
* \<select\>\</select\> : Makes a select menu. Needs elements inside of it to work.  
* Select attributes:  
  * id=”name” : Used for targeting.  
  * name=”name” : name of the data when submitted.  
* \<option\>\</option\> : Creates an option for a drop down menu.   
* Option Attributes:  
  * value=”value” : Value sent to the server when form is submitted.

Radio Buttons:

* Used when there are less than 5 options.  
* \<input type=”radio:\>\</input\> : Makes a radio button.  
* \<br\> : a line break element, separates things into two lines  
* As long as the name attribute is the same, only one option will be selected at a time.  
* Labels can be used instead of headers.

Checkboxes:

* Allows the user to select multiple predefined options.  
* \<input type=”checkbox”\> : Makes an input of type checkbox.