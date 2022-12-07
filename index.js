function isPalindrome(word) {
  // Write your algorithm here
  //create an array for the reversed string
    let polishedString = word.replace();
    //reverse the array
    let reversedstring = polishedString.split("").reverse().join("")
    //create a string from the reversed array
    console.log(reversedstring, polishedString)
    if(polishedString != reversedstring){
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
