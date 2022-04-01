// Assign a variable that points to the button element in our document
var generateBtn = document.querySelector("#generate");

// Add event listener to the button
generateBtn.addEventListener("click", writePassword);

// Global variables that are provided to the user as potential parameters
var lc = "abcdefghijklmnopqrstuvwxyz";
var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specChar = " \\!\"#$%&'()*+,-./:;<=>?@[]^_`{|}";

// Function that initiates upon button click, generates a password, and passes it to the text area in our document for the user to see
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Globally assigned functions that prompt the user with parameters for the password to be generated
// prompts user to select character length
function characterLength() {
    var userLength = prompt("Enter a character length value between 8 and 128");
    if (userLength === null) {
        return;
    } else if (userLength > 128 || userLength < 8) {
    alert("Please enter a value between 8 and 128")
    } else {
    var selectedLength = parseInt(userLength)
    return selectedLength;
    }
};

// prompts user to include lowercase letters
function lowerCaseConfirm() {
    if (confirm("Do you want to include lowercase letters?")) {
        return lc;
    } else {
        return "";
    }
};

// prompts user to include uppercase letters
function upperCaseConfirm() {
    if (confirm("Do you want to include uppercase letters?")) {
        return uc;
    } else {
        return "";
    }
};

// prompts user to include numbers
function numbersConfirm() {
    if (confirm("Do you want to include numbers?")) {
        return num;
    } else {
        return "";
    }
};

// prompts user to include special characters
function specialCharactersConfirm() {
    if (confirm("Do you want to include special characters?")) {
        return specChar;
    } else {
        return "";
    }
};


// The function that generates a password, by first assigning variables to the outputs of the parameter functions,
// creating a variable that is concatenation of the user's selected strings, and then running a loop to randomly
// pull characters from this new string to generate the password, adding the result of each iteration to the end
// of a string (the password) until the loop has run as many times as the user-submitted length. If there is no 
// parameters selected, and thereby no substantive string to pass through the loop, an empty password will be generated
// which triggers an alert and an empty text box upon completion. Otherwise, the generated password is 
// lifted up to the global scope.
function generatePassword() {

    var passwordLength = characterLength();
    console.log(passwordLength);

    var lowerCase = lowerCaseConfirm();
    console.log(lowerCase);

    var upperCase = upperCaseConfirm();
    console.log(upperCase);

    var numbers = numbersConfirm();
    console.log(numbers);

    var specialCharacters = specialCharactersConfirm();
    console.log(specialCharacters);

    var usableCharacters = lowerCase + upperCase + numbers + specialCharacters;

    var password = "";

    if (usableCharacters === "") {
        
    } else {
    for (var i = 0; i < passwordLength; i++) {
        var usableCharactersIndex = Math.floor(Math.random() * usableCharacters.length);
        var currentCharacter = usableCharacters[usableCharactersIndex];
        password = password.concat(currentCharacter);
    }
    }

    if (password === "" ) {
        alert("You did not select any groups of characters and so the password is empty. Try again and select at least one group.")
        return "";
    } else {
    return password;
    }
}