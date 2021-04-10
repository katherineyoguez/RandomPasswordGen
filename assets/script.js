// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["~","`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ";", ":", "<", ">", ",", ".", "/", "?"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLenght = prompt("What is the length of the desired password? (8-128 characters only)");

  while(passwordLenght < 8 || passwordLenght > 128){
    passwordLenght = prompt("Please choose between 8-128 characters.")
  }

  var lowerCaseCheck = false
  var upperCaseCheck = false
  var numericCheck = false
  var specialCheck = false

  while(lowerCaseCheck == false && 
        upperCaseCheck == false &&
        numericCheck == false &&
        specialCheck == false){
          alert("We need you to have at least one of the following!")
          lowerCaseCheck = confirm("Do you want to include lowercase characters?")
          upperCaseCheck = confirm("Do you want to include uppercase characters?")
          numericCheck = confirm("Do you want to include numeric characters?")
          specialCheck = confirm("Do you want to include special characters?")
  }

  // var randomPass = ""
  var selectedTypes = [];

  if(lowerCaseCheck == true){
    selectedTypes = selectedTypes.concat(lowercaseChar)
  }
  if(upperCaseCheck == true){
    selectedTypes = selectedTypes.concat(uppercaseChar)
  }
  if(numericCheck == true){
    selectedTypes = selectedTypes.concat(numericChar)
  }
  if(specialCheck == true){
    selectedTypes = selectedTypes.concat(specialChar)
  }

  // console.log(selectedTypes)

  for(i=0; i<passwordLenght; i++){
    var randomIndex = Math.floor(Math.random() * selectedTypes.length)
    // console.log(randomIndex)
    var randomChar = selectedTypes[randomIndex];
    // console.log(randomChar)
  }
  
  return ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);