// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Generate number for value
  for (var pc = 0; pc < 1; pc++) {
    var num = Math.random() * 10;
    var num2 = Math.floor(num);
    console.log(num2)
  }

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Changed this value to num2 for now.
  passwordText.value = num2;
}

// Add event listener to generate button
// Alternatively you can use the onClick method for accomplishing this.
// I prefer the onClick method just because I'm used to using it. 
// But I'm not really sure if one is better than the other.
generateBtn.addEventListener("click", writePassword);

// Determines User Operating system
// Something I found on stack overflow. It's the simplest method on there.
// This certainly works because it is able to figure out that I'm on Windows OS. I'm not sure if it works on anything else.
// This most certainly will not work on mobile devices as it only workes for Windows Mac or Lunix/Unix.
var UserOperatingSystem="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) UserOperatingSystem="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) UserOperatingSystem="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) UserOperatingSystem="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) UserOperatingSystem="Linux";
document.getElementById("UserOS").innerHTML = "Operating System: " + UserOperatingSystem;

// Copy to clipboard function
// This method demonstractes using the onClick feature I mentioned earlier.
// It copies the text from the password element to the clipboard. 
function copyToClipboard() {
  var copyPassword = document.getElementById("password");
  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Text has been copied!");
}

// Here are a series of functions that get the users longitude and lattitude coordinates.
// It also finds out if the user is on east or west side of US based on coordinates and prints the results on the document.
var UserLocation = document.getElementById("UserLocation");
var UserHemisphere = document.getElementById("UserHemisphere")
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showPosition);
} else {
  UserLocation.innerHTML = "Cannot obtain geolocation for some reason.";
}

// You can expand this function based on where there are in the world. But I based it off the users Longitude coordinates.
// You can even get there city state or even address. But that's just extra work.
// If the User's longitude is more the -100 then they are on the east side of US. 
// If it it less the -100 then they are westerners like Colorado.
function showPosition(position) {
  UserLocation.innerHTML = "User Location:" + "<br>Latitude is " + position.coords.latitude + " Longitude is " + position.coords.longitude;
  if (position.coords.longitude < -100) {
    UserHemisphere.innerHTML = "You are in the western half of the US."
  } else if (position.coords.longitude > -100) {
    UserHemisphere.innerHTML = "You are in the eastern half of the US."
  }
}