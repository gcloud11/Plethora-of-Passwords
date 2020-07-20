// // Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );
  

function generatePassword () {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "*&^%$#@!()";

  var passwordLength = prompt("How long do you want your password?");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please, choose a password between 8 and 128 characters!")
    }

    else {
      var upperCaseLength = confirm("Do you want upper-case?");
      var lowerCaseLength = confirm("Do you want lower-case?");
      var numbersLength = confirm("Do you want numbers?");
      var symbolsLength = confirm("Do you want symbols?");
      var generatedPassword =" ";
    }
    

  var characterArray = " ";
    if (lowerCaseLength) {
      characterArray = characterArray.concat(lowerCase);
  }

    if (upperCaseLength) {
     characterArray = characterArray.concat(upperCase);
  }

    if (numbersLength) {
     characterArray = characterArray.concat(numbers);
  }

    if (symbolsLength) {
      characterArray = characterArray.concat(symbols);
  } 


  for ( i = 0  ; i < passwordLength;   i++ ) {
    var character = characterArray.charAt(Math.floor(Math.random() * characterArray.length));
  generatedPassword = generatedPassword.concat(character);
  }

  return generatedPassword;

}


