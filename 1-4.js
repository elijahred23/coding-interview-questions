/*
Palindrome permutation: Given a string, write a function to check if it is a permutation of 
a palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

EXAMPLE
Input: Tact Coa
Output: True ( permutations: "taco cat", "atco cta", etc. ");
*/

// Define a function named isPalindromePermutation that takes a string s as input
function isPalindromePermutation(s) {
    // Step 1: Remove spaces and convert the string to lowercase
    s = s.replace(/ /g, '').toLowerCase();
  
    // Step 2: Initialize a Map to store character frequencies
    const charCount = new Map();
  
    // Iterate through each character in the modified string
    for (const char of s) {
      // Check if the character is a letter (a-zA-Z)
      if (char.match(/[a-zA-Z]/)) {
        // Get the current count of the character from the map (or default to 0 if not found)
        const currentCount = charCount.get(char) || 0;
  
        // Increment the count of the character in the map
        charCount.set(char, currentCount + 1);
      }
    }
  
    // Step 3: Check for palindrome permutation
    let oddCount = 0; // Initialize a counter for characters with odd frequencies
  
    // Iterate through the values (character frequencies) in the map
    for (const count of charCount.values()) {
      // Check if the character frequency is odd
      if (count % 2 !== 0) {
        // Increment the oddCount if it's odd
        oddCount++;
      }
  
      // If more than one character has an odd frequency, return false
      if (oddCount > 1) {
        return false;
      }
    }
  
    // If the loop completes without finding more than one character with an odd frequency, return true
    return true;
  }
  
  function isPalindromePermutation2(s) {
  // Step 1: Remove spaces and convert the string to lowercase
  s = s.replace(/ /g, '').toLowerCase();

  // Step 2: Initialize an array to store character frequencies (26 for English alphabet)
  const charCount = new Array(26).fill(0);

  // Step 3: Iterate through each character in the modified string
  for (const char of s) {
    // Check if the character is a letter (a-z)
    if (char.match(/[a-z]/)) {
      // Calculate the index for the character in the array
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

      // Increment the count of the character in the array
      charCount[index]++;
    }
  }

  // Step 4: Check for palindrome permutation
  let oddCount = 0; // Initialize a counter for characters with odd frequencies

  // Iterate through the character frequencies in the array
  for (const count of charCount) {
    // Check if the character frequency is odd
    if (count % 2 !== 0) {
      // Increment the oddCount if it's odd
      oddCount++;
    }

    // If more than one character has an odd frequency, return false
    if (oddCount > 1) {
      return false;
    }
  }

  // If the loop completes without finding more than one character with an odd frequency, return true
  return true;
}
  // Test cases
  console.log(isPalindromePermutation("Tact Coa")); // Output: true
  
  
  // Test cases
  console.log(isPalindromePermutation2("Tact Coa")); // Output: true
