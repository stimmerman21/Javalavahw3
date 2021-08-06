var submit;
var confup;
var conflow;
var confspec;
var confnum;

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting password variable values
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "",];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let selections = []




function generatePassword(){

    submit = parseInt(prompt("How many characters would you like your password to be? Can be between 8 and 32 characters in length."));

    if ( submit < 8) {

   alert("Invalid response");
    alert("Password must be between 8 and 32 characters in length");


     }  else if ( submit > 32) {

    alert("Invalid response");
    submit = parseInt(prompt("Password must be between 8 and 32 characters in length"));


    } else  {

  confup = confirm("Click OK if you'd like your password to contain uppercase letters, CANCEL for no");
  conflow = confirm("Click OK if you'd like your password to contain lowercase letters, CANCEL for no");
  confspec = confirm("Click OK if you'd like your password to contain special characters, CANCEL for no");
  confnum = confirm("Click OK if you'd like your password to contain numbers, CANCEL for no");  
  
}

if (confup === true) {

  (selections.push(confup));

} 

if (conflow === true) {
  
  (selections.push(conflow));
}

if (confspec === true) {

  (selections.push(confspec));

}

if (confnum === true) {

  (selections.push(confnum));
}


var newpswd = selections.join("");

var truepassword = "";

for (var i = 0; i < submit ; i++) {
  var genpass = newpswd.charAt(Math.floor(Math.random() * newpswd.length));
  truepassword = truepassword.concat(genpass);

}

return "truepassword";
}


// Write password to the #password input
function writePassword(truepassword) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = truepassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

