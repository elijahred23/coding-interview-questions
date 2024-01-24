/*
 is unique
 Implement an algorithm to determine if a string has all unique characters. What if you 
 you cannot use additional data structures?
*/

//using additional data structures
const isUnique = (str) => {
    let hasMap = new Map(); // Initialize an empty map to keep track of character occurrences
    
    // Iterate through each character in the string
    for(let i = 0; i < str.length; i++){
        
        // Check if the current character is already in the map
        if(hasMap.has(str[i])){
            // If the character is already in the map, it's not unique
            // Return 'false' indicating that the string does not have all unique characters
            return false;
        }
        
        // If the character is not in the map, add it to the map
        hasMap.set(str[i], true); // The value 'true' is arbitrary. The important part is the key (str[i]).
    }
    
    // If the function has not returned 'false' after iterating through all characters,
    // it means all characters in the string are unique
    // Return 'true' indicating that the string has all unique characters
    return true;
};


//not using additional data structures
const isUnique2 = (str) => {
    // Iterate through each character in the string using index 'i'
    for(let i = 0; i < str.length; i++){
        
        // For each character at position 'i', iterate through the rest of the string using index 'j'
        // Note: 'j' starts from 'i + 1' to compare the current character only with the following characters
        for(let j = i + 1; j < str.length; j++){
            
            // Compare the character at position 'i' with the character at position 'j'
            if(str[i] === str[j]){
                // If a match is found, it means the character is not unique
                // Return 'false' indicating that the string does not have all unique characters
                return false;
            }
        }
    }
    
    // If the function has not returned 'false' after checking all character combinations,
    // it means all characters in the string are unique
    // Return 'true' indicating that the string has all unique characters
    return true;
};


const isUnique3 = (str) => {
    let checkerLower = 0; // Initialize a bit vector for lowercase letters ('a' to 'z')
    let checkerUpper = 0; // Initialize a bit vector for uppercase letters ('A' to 'Z')
    
    // Iterate over each character of the string
    for (let i = 0; i < str.length; i++) {
        // Get the ASCII value of the current character
        let val = str.charCodeAt(i);
        
        // Check if the character is a lowercase letter
        if (val >= 'a'.charCodeAt(0) && val <= 'z'.charCodeAt(0)) {
            // Adjust the value to be in the range 0-25 (for 'a' to 'z')
            val -= 'a'.charCodeAt(0);
            
            // Check if this lowercase letter has been seen before
            if ((checkerLower & (1 << val)) > 0) {
                // If the letter was seen before, it's not unique, return false
                return false;
            }
            
            // Mark this letter as seen by setting the corresponding bit in checkerLower
            checkerLower |= (1 << val);
        }
        // Check if the character is an uppercase letter
        else if (val >= 'A'.charCodeAt(0) && val <= 'Z'.charCodeAt(0)) {
            // Adjust the value to be in the range 0-25 (for 'A' to 'Z')
            val -= 'A'.charCodeAt(0);
            
            // Check if this uppercase letter has been seen before
            if ((checkerUpper & (1 << val)) > 0) {
                // If the letter was seen before, it's not unique, return false
                return false;
            }
            
            // Mark this letter as seen by setting the corresponding bit in checkerUpper
            checkerUpper |= (1 << val);
        }
    }
    
    // If no duplicate characters were found, return true
    return true;
};
