# 03 JavaScript: Password Generator


## Develope/Scripts.js

### function promptPassword()
```
function promptPassword() - This function generates a password via the alert prompt. It prompts the user asking them
how long they want their password to be, what types of characters they want in their password, and if the user
enters an invalid pasword length or does not chose a character type it spits out an error message and makes the user start over.
```

### function generatePassword()
```
function generatePassword() - This function is exactly like the promptPassword() function except for instead of using alert windows
to obtain the password constraints, it gets those constraints from a series of checkboxes on the HTML page. It also uses
the onClick feature in HTML instead of an event listener. Just like the promptPassword() function, this function
also displays an error if the user unchecked all the boxes or entered an invalid password length.
```

### function copyToClipboard()
```
function copyToClipboard() - This function copies the password text from the textarea with the id "password" to the users clipboard
so that they may later paste the password in the desired input field. This function also utilizes an if statement so that it
can still copy the password even if it is hidden by changing the password element class to passwordTextAreaShow
and then copies the text, then quickly changes the element class back to passwordTextAreaHide to keep the password hidden.
If it weren't for changing the class, the user would end up coping a bunch of "••••••••" characters. 
```

### function ReavealConcealPassword()
```
function ReavealConcealPassword() - This function reveals or conceals the password depending on if it is hidden or shown to the user.
This is done by changing the element class from passwordTextAreaHide to passwordTextAreaShow and visa versa. By changing the element class,
it also changes the CSS settings to include or not include -webkit-text-security: disc !important; which is a setting that hides
the characters in a element with "••••••••" characters. This feature can be important for security reasons. Alternatively, if you wanted
a input that the user enters a password, you would just change the type to password. But that method is not useful here since the input password
type does not allow the user to copy to the clipboard.
```

### User Location
```
As a bonus I also included a feature that gets the user location coordinates and displays on the web page if there are on the east or west side
of the US. I also included a feature that shows what operating system the user is on as mentioned in a class activity.
```










-------------------------------------------------------------------------------------------------------------------------------------------------
# Original Class Instructions

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
