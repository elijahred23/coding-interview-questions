/*
Check Permutation: Given two strings, write a  method to decide if one is a permutation
of the other
*/

// Define a function 'checkPermutation' that takes two strings 'str1' and 'str2' as arguments
// Define a function named checkPermutation that takes two string arguments, str1 and str2
const checkPermutation = (str1, str2) => {
    // Check if the lengths of str1 and str2 are different
    if (str1.length != str2.length) {
        // If the lengths are different, return false (they can't be permutations)
        return false;
    }

    // Sort the characters in str1 in ascending order
    str1.sort((a, b) => a - b);

    // Sort the characters in str2 in ascending order
    str2.sort((a, b) => a - b);

    // Iterate through each character in str1 and compare it to the corresponding character in str2
    for (let i = 0; i < str1.length; i++) {
        // If any pair of characters are different at the same position, return false (not a permutation)
        if (str1[i] !== str2[i]) {
            return false;
        }
    }

    // If all characters match in both strings and the lengths are the same, return true (they are permutations)
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
