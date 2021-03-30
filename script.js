// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordNumber = prompt("Hi Pick from 1-10 please");

var speical = confirm("The password will include special characters");

var numbers = confirm("Do you like numbers in a password");

var upperCases = confirm("How many uppercase leters do you want");

var lowerCases = confirm("Did you want a lowercase letter");

var minimumCount = 0;

