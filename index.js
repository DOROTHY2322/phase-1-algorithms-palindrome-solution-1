function isPalindrome(word) {
  // Write your algorithm here
  //create an array for the reversed string
  let polishedString = word.replace();
  //reverse the array
  let reversedstring = polishedString.split("").reverse().join("")
  //create a string from the reversed array
  console.log(reversedstring, polishedString)
  if (polishedString != reversedstring) {
    return false;
  }
  return true;
}
let result = isPalindrome("abba")
console.log(result)
/* 
  Add your pseudocode here
*/
//create a variable
//reverse the input string
/*
  Add written explanation of your solution here
*/
//in our algorithm, the reverseString
//Split the string
// That takes up more memory to store the new array, as well as the time it takes JavaScript to iterate over each character of the string to produce a new array
// Reverse the array
// That takes up more memory to store the reversed array, as well as the time it takes JavaScript to iterate over the array to produce a reversed array
// Join the string
// That takes up more memory to store the new string, as well as the time it takes JavaScript to iterate over the array to produce a string


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
