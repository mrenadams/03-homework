// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "!@#$%^&*()-+<>";
  var lowerCase = “abcdefghijklmnopqrstuvwxyz”;
  var upperCase = “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;

  passwordText.value = password;

}

function generatePassword() {
  
  var confirmLength = prompt("How long will your password be?");
  var confirmSpecial = confirm("Will your password use special characters?");
  var confirmCaps = confirm("Will your password use capital letters?");
  var confirmLower = confirm("Will your password use lowercase letters?");

if (confirmLength){

}

if (confirmSpecial){

} 

if (confirmCaps){
  

} 
if (confirmLower){
  
} 
}
writePassword();



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);