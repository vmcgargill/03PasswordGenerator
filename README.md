Link: https://vmcgargill.github.io/03PasswordGenerator/

//////////////////// ASSIGNMENT CODE ///////////////////Here is the querySelector given to us by the instructor that listens for the generate button click. There are other methods of doing this. I prefer the onClick method. But I demonstrate both on this assignment.

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

//////////////////////////////////////////////////////////// BONUS CONTENT ////////////////////////////////////////////////////////////

//////////////////// GENERATE PASSWORD FUNCTION ////////////////////
Here is a little something I did extra. This is a much better way of doing this assigment
Instead of using prompts I used a set of check boxes to determine what kinds of characters the user wants in their password.

//////////////////// COPY TO CLIPBOARD FUNCTION ////////////////////
This function copys the password from the text area to the clipboard, even if the password is hidden.
By clicking this button, this function copies the text from the password element to the user's clipboard. 
If the text area is under the passwordTextAreaHide class then it will just copy a bunch of "••••••••••••" characters.
To fix this the function briefly changes the class to passwordTextAreaShow, copies the text, 
then changes the class back to passwordTextAreaHide class. This happens fast enough that the password does not reveal itself when copied.
This alse method demonstractes using the onClick feature I mentioned earlier.

//////////////////// REVEAL CONCEAL PASSWORD FUNCTION ////////////////////
This function hides and reveals the password as needed.
To accomplish this, the function changes the class from passwordTextAreaHide to passwordTextAreaShow and visa versa.
passwordTextAreaHide hides the password and passwordTextAreaShow reveals the password to the user.
This can be important for security purposes. You don't want others behind you to see the password.