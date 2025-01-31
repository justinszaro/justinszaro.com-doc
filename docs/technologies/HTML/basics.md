# HTML Forms Documentation

Link to documentation: https://developer.mozilla.org/en-US/docs/Learn/Forms

## The Form Element

The `<form></form>` element wraps all of the elements of the form together. It cannot be nested inside another form. The `action` attribute specifies the web address of a program that processes data when the form is submitted. The `method` attribute specifies the HTTP method that the browser uses to submit the form. The most popular method is POST, which sends data from the body to a server. The GET method sends data inside the URL and parameters are separated by a question mark.

## The Input Element

The `<input>` element is the most commonly used form element. It is a self-closing tag. The `type` attribute specifies what kind of input is requested. The `id` attribute is helpful for targeting elements with CSS or Javascript. The `name` attribute allows the server to understand data and process it accordingly.

## The Textarea Element

The `<textarea></textarea>` element accepts multiple lines of text from the user. It is not a self-closing tag. The `id` attribute is helpful for targeting elements with CSS or Javascript. The `name` attribute allows the server to understand data and process it accordingly.

## The Button Element

The `<button></button>` element allows the user to submit a form and send the data to the server. It is not a self-closing element. The `type` attribute specifies what the button does. The Submit type submits the form and sends the data to the action destination. The Reset type clears all form data when clicked. The Button type has no default behavior and is used in combination with Javascript.

## The Label Element

The `<label></label>` element creates a label for an input element. It does not surround the input element. The `for` attribute corresponds with the `id` tag of the input element. Clicking on it focuses on the input.

## Fieldsets and Legends

The `<fieldset></fieldset>` element groups form controls together. It encloses its contents and makes padding and margin adjustments based on fieldsets. The `<legend></legend>` element labels a fieldset.

## The Select Element

The `<select></select>` element allows you to make a set of predefined options that the user can choose from. The `id` attribute is used for targeting. The `name` attribute is the name of the data when submitted. The `<option></option>` element creates an option for a drop-down menu. The `value` attribute is the value sent to the server when the form is submitted.

## Radio Buttons

The `<input type="radio">` element makes a radio button. The `<br>` element is a line break element that separates things into two lines. As long as the `name` attribute is the same, only one option will be selected at a time. Labels can be used instead of headers.

## Checkboxes

The `<input type="checkbox">` element allows the user to select multiple predefined options.