/*
Check Permutation: Given two strings, write a  method to decide if one is a permutation
of the other
*/

// Define a function 'checkPermutation' that takes two strings 'str1' and 'str2' as arguments
const checkPermutation = (str1, str2) => {
    // Check if the lengths of the two strings are not equal
    if (str1.length !== str2.length) {
        // If they are not equal, return false because they can't be permutations of each other
        return false;
    }
    
    // Initialize an object to keep track of the character counts
    const charCount = {};
    
    // Iterate over the first string 'str1'
    for (let char of str1) {
        // If the character is already in the object, increment its count
        // Otherwise, add the character to the object with a count of 1
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate over the second string 'str2'
    for (let char of str2) {
        // If the character is not found in 'charCount' or its count is zero, return false
        if (!charCount[char]) {
            return false;
        }
        // Decrement the count of the character in 'charCount'
        charCount[char]--;
        // If the count goes below zero, it means 'str2' has more of that character than 'str1', return false
        if (charCount[char] < 0) {
            return false;
        }
    }
    
    // If the function hasn't returned false by this point, it means 'str1' is a permutation of 'str2'
    return true;
}


// Define a function 'checkPermutation' that takes two strings 'str1' and 'str2' as arguments
const checkPermutation2 = (str1, str2) => {
    // Check if the lengths of the two strings are not equal
    if (str1.length !== str2.length) {
        // If they are not equal, return false because they can't be permutations of each other
        return false;
    }
    
    // Convert the first string 'str1' into an array of characters, sort the array, then join the array back into a string
    const sortedStr1 = str1.split('').sort().join('');
    
    // Convert the second string 'str2' into an array of characters, sort the array, then join the array back into a string
    const sortedStr2 = str2.split('').sort().join('');
    
    // Compare the sorted strings and return true if they are identical, otherwise return false
    // This check determines if 'str1' is a permutation of 'str2'
    return sortedStr1 === sortedStr2;
}

// Define a function 'checkPermutation' that takes two strings 'str1' and 'str2' as arguments
const checkPermutation3 = (str1, str2) => {
    // Check if the lengths of the two strings are not equal
    if (str1.length !== str2.length) {
        // If they are not equal, return false because they can't be permutations of each other
        return false;
    }
    
    // Initialize an object to keep track of the character counts
    const charCount = {};
    
    // Iterate over the first string 'str1'
    for (let char of str1) {
        // If the character is already in the object, increment its count
        // Otherwise, add the character to the object with a count of 1
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate over the second string 'str2'
    for (let char of str2) {
        // If the character is not found in 'charCount' or its count is zero, return false
        if (!charCount[char]) {
            return false;
        }
        // Decrement the count of the character in 'charCount'
        charCount[char]--;
        // If the count goes below zero, it means 'str2' has more of that character than 'str1', return false
        if (charCount[char] < 0) {
            return false;
        }
    }
    
    // If the function hasn't returned false by this point, it means 'str1' is a permutation of 'str2'
    return true;
}
