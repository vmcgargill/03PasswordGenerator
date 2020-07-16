var generateBtn = document.querySelector("#passwordprompt");

function promptPassword() {
  // First thing in this function we create a few empty strings which become important later down the line. 
  // The password string will be the actual password we generate and then dispaly on the HTML doc.
  var password = "";
  // The passwordChar string will be used to determine what types of characters the password will have. 
  passwordChar = "";

  // passwordlength is when we promt the user how long they want the password to be.
  var passwordlength = prompt("Please enter a password length.")
  // The text from the passwordlength prompt is then converted into a integer using parseInt
  var passwordlengthint = parseInt(passwordlength)


  // This series of if statements checks if the value that the user entered in passwordlength is actually a integer.
  if (Number.isInteger(passwordlengthint) == false) {
    alert("Please enter a numeric value only for the password length.")
    
    // If the user entered and number that is not between 8-128 then it will give the following error according.
  } else if (passwordlengthint < 8) {
    alert(passwordlengthint + " is too small! Password must be at least 8 characters long. Please try again.")
    promptPassword();
  } else if (passwordlengthint > 128) {
    alert(passwordlengthint + " is too big! Password cannot be longer than 128 characters. Please try again.")
    promptPassword();

    // If the user did enter an integer and it is between 8-128 then the user is able to confirm the types of characters the password will have.
  } else if (Number.isInteger(passwordlengthint) == true) {
    alert("Password length is: " + passwordlength)
    var lowerCharactersConfirm = confirm("Would you like to add lower case letters to your password?");

    // Confirm Lower Case
    if (lowerCharactersConfirm === true) {
      lowerCharacters = "abcdefghijklmnopqrstuvwsyx";
      passwordChar = passwordChar.concat(lowerCharacters);
    } else if (lowerCharactersConfirm === false) {
      lowerCharacters = "";
      passwordChar = passwordChar.concat(lowerCharacters);
    }

    // Confirm Upper Case
    var upperCharacterConfirm = confirm("Would you like to add upper case letters to your password?")
    if (upperCharacterConfirm === true) {
      upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      passwordChar = passwordChar.concat(upperCharacters);
    }

    // Confirm Numbers
    var pwnumberConfirm = confirm("Would you like to add numbers to your password?");
    if (pwnumberConfirm === true) {
      pwnumbers = "0123456789"
      passwordChar = passwordChar.concat(pwnumbers);
    }

    // Confirm Special Characters
    var specialCharactersConfirm = confirm("Would you like to add special characters to your password like '/' or '+' ?" )
    if (specialCharactersConfirm === true) {
      pwspecialCharacters = "!@#$%^&*()_+{}|:<>?-=[]\;'',./;"
      passwordChar = passwordChar.concat(pwspecialCharacters);
    }

    // This if statement prompts an error if the user did not say yes to any of the confirms and makes the user start over.
    if (
      lowerCharactersConfirm === false &&
      upperCharacterConfirm === false &&
      pwnumberConfirm === false &&
      specialCharactersConfirm === false
    ) {
      alert("Please select at least one character value for your password! Try again!")
      promptPassword();
    }

    // This for loop generates the password itself with the given passwordChar string and passwordlength integer.
    // passwordChar is the string of characters available for the password.
    // passwordlength is the number the user entered to represent the length of the password.
    for (var i = 0, n = passwordChar.length; i < passwordlength; ++i) {
      password += passwordChar.charAt(Math.floor(Math.random() * n));
    }

    // After the password is generated, it is then stored in the password element on the HTML doc.
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", promptPassword);

function generatePassword() {

  // passwordlength gets the desired length of the password from the number input.
  var passwordlength = parseInt(document.getElementById("passwordlength").value);

  // Here we are definin the password itself as an empty string. Later on this will be redefined to the random password generated.
  var password = "";

  // passwordChar is the string that includes all the characters available for the password, 
  // based on which check boxes are checked. This variable will be constantly redefined.
  var passwordChar = "";

  // lowerCharactersCheck checks weather or not the user wants to add in lower character letters based on the checkbox.
  var lowerCharactersCheck = document.getElementById("LowerCharacters");

  // upperCharacterCheck checks weather or not the user wants to add in upper character letters based on the checkbox.
  var upperCharacterCheck = document.getElementById("UpperCharacters");

  // pwNumbersCheck checks weather or not the user wants to add in numbers based on the checkbox.
  var pwNumbersCheck = document.getElementById("pwnumbers");

  // specialCharacters checks weather or not the user wants to add in special characters like punctuation based on the checkbox.
  var specialCharacters = document.getElementById("specialCharacters");

  // Here is an error message if user clicked on the button and did not check any boxes.
  if (
    lowerCharactersCheck.checked == false &&
    upperCharacterCheck.checked == false &&
    pwNumbersCheck.checked == false &&
    specialCharacters.checked == false
    ) {
      alert("No values were selected for your password! Please select either lower case, upper case, numbers, or special characters.")
      // After the error alert pops up, the lowerCharactersCheck and pwNumbersCheck are automatically checked to start over.
      lowerCharactersCheck.checked = true;
      pwNumbersCheck.checked = true;
    }

  // Lower Character Check
  if (lowerCharactersCheck.checked == true) {
    lowerCharacters = "abcdefghijklmnopqrstuvwsyx";
    // This concat function adds a string of lower letters to the passwordChar string.
    passwordChar = passwordChar.concat(lowerCharacters);
    // An else if statement is needed hear otherwise the app will think that its always checked even if it was unchecked later.
  } else if (lowerCharactersCheck.checked == false) {
    // This function removes lower case letters from the password as desired when the box is left unchecked.
    lowerCharacters = "";
    passwordChar = passwordChar.concat(lowerCharacters);
  }
  
  // Upper Character Check
  if (upperCharacterCheck.checked == true) {
    upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordChar = passwordChar.concat(upperCharacters);
  } else if (upperCharacterCheck.checked == false) {
    upperCharacters = "";
    passwordChar = passwordChar.concat(upperCharacters);
  }

  // Number Check
  if (pwNumbersCheck.checked == true) {
    pwnumbers = "0123456789"
    passwordChar = passwordChar.concat(pwnumbers);
  } else if (pwNumbersCheck.checked == false) {
    pwnumbers = ""
    passwordChar = passwordChar.concat(pwnumbers);
  }

  // Special Character Check
  if (specialCharacters.checked == true) {
    pwspecialCharacters = "!@#$%^&*()_+{}|:<>?-=[]\;'',./;"
    passwordChar = passwordChar.concat(pwspecialCharacters);
  } else if (specialCharacters.checked == false) {
    pwspecialCharacters = ""
    passwordChar = passwordChar.concat(pwspecialCharacters);
  } 

  // Error message if the password is too long or too short. 
  if (passwordlength < 8) {
    alert("Error: Password length is too short! Please select a password length longer than 8.")
    passwordChar = "";
  } else if (passwordlength > 128) {
    alert("Error: Password length is too long! Please select a password length shorter than 128.")
    passwordChar = "";
  }


  // This for loop generates the password using the updated passwordChar string and the passwordlength integer.
  for (var i = 0, n = passwordChar.length; i < passwordlength; ++i) {
    password += passwordChar.charAt(Math.floor(Math.random() * n));
  }

  // This function prints out the password itself on the HTML doc. 
  // Alternatively, you could also use the .innerHTML function after indentifying the element.
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function copyToClipboard() {
  var copyPassword = document.getElementById("password");
  if (copyPassword.className === "passwordTextAreaHide") {
    copyPassword.className = "passwordTextAreaShow"
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyPassword.className = "passwordTextAreaHide"
  } else {
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
}

function ReavealConcealPassword() {
  var passwordtext = document.getElementById("password")
  var ReavealConcealPasswordButton = document.getElementById("ReavealConcealPasswordButton")
  if (passwordtext.className === "passwordTextAreaHide") {
    passwordtext.className = "passwordTextAreaShow";
    ReavealConcealPasswordButton.innerHTML = "Hide Password";
  } else if (passwordtext.className === "passwordTextAreaShow") {
    passwordtext.className = "passwordTextAreaHide";
    ReavealConcealPasswordButton.innerHTML = "Show Password";
  }
}