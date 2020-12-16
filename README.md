# Password Generator

## Develope/Scripts.js

### function promptPassword()
```
function promptPassword() - This function generates a password via the alert prompt. 
It prompts the user asking them how long they want their password to be, what types 
of characters they want in their password, and if the user enters an invalid pasword 
length or does not chose a character type it spits out an error message and makes 
the user start over.
```

### function generatePassword()
```
function generatePassword() - This function is exactly like the promptPassword() 
function except for instead of using alert windows to obtain the password constraints, 
it gets those constraints from a series of checkboxes on the HTML page. It also uses 
the onClick feature in HTML instead of an event listener. Just like the promptPassword() 
function, this function also displays an error if the user unchecked all the boxes or 
entered an invalid password length.
```

### function copyToClipboard()
```
function copyToClipboard() - This function copies the password text from the 
textarea with the id "password" to the users clipboard so that they may later 
paste the password in the desired input field. This function also utilizes an 
if statement so that it can still copy the password even if it is hidden by 
changing the password element class to passwordTextAreaShow and then copies 
the text, then quickly changes the element class back to passwordTextAreaHide 
to keep the password hidden. If it weren't for changing the class, the user 
would end up coping a bunch of "••••••••" characters. 
```

### function ReavealConcealPassword()
```
function ReavealConcealPassword() - This function reveals or conceals the password 
depending on if it is hidden or shown to the user. This is done by changing the 
element class from passwordTextAreaHide to passwordTextAreaShow and visa versa. 
By changing the element class, it also changes the CSS settings to include or not 
include -webkit-text-security: disc !important; which is a setting that hides
the characters in a element with "••••••••" characters. This feature can be important 
for security reasons. Alternatively, if you wanted a input that the user enters a 
password, you would just change the type to password. But that method is not useful 
here since the input password type does not allow the user to copy to the clipboard.
```


# ASSIGNMENT CODE 
Here is the querySelector given to us by the instructor that listens for the generate button click. There are other methods of doing this. I prefer the onClick method. But I demonstrate both on this assignment.

Write password to the #password input
I did this project while using inputs such as checkboxs for constraints on the password. Instead of pop window pronmps.
I was not sure id I would get marked dow for that. So I just did both the alerts and inputs.
The method using the prompts was faster and easier anyways.
The promptPassword() function fullfills the minimum requirements for this assignment.

Add event listener to generate button
Alternatively you can use the onClick method for accomplishing this.
I prefer the onClick method over the addEventListener method just because I'm used to using it. 
It helps me see what the button does on the HTML doc.
But I'm not really sure if one is better than the other. They both work.

# BONUS CONTENT

## GENERATE PASSWORD FUNCTION
Here is a little something I did extra. This is a much better way of doing this assigment
Instead of using prompts I used a set of check boxes to determine what kinds of characters the user wants in their password.

## COPY TO CLIPBOARD FUNCTION
This function copys the password from the text area to the clipboard, even if the password is hidden.
By clicking this button, this function copies the text from the password element to the user's clipboard. 
If the text area is under the passwordTextAreaHide class then it will just copy a bunch of "••••••••••••" characters.
To fix this the function briefly changes the class to passwordTextAreaShow, copies the text, 
then changes the class back to passwordTextAreaHide class. This happens fast enough that the password does not reveal itself when copied.
This alse method demonstractes using the onClick feature I mentioned earlier.

## REVEAL CONCEAL PASSWORD FUNCTION
This function hides and reveals the password as needed.
To accomplish this, the function changes the class from passwordTextAreaHide to passwordTextAreaShow and visa versa.
passwordTextAreaHide hides the password and passwordTextAreaShow reveals the password to the user.
This can be important for security purposes. You don't want others behind you to see the password.
