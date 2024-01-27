/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the true length of the string.
 (NOTE: if implement in Java, please use a character array tso that you can perform this operation)
 EXAMPLE

 Input: "Mr John Smith    ", 13
 Output: "Mr%20John%20Smith"
*/


const urlify = (str) => {
    str = str.trim(); // Remove trailing spaces
    const trueLength = str.length;
    let spaceCount = 0;

    // Count the number of spaces in the string
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }

    // Calculate the new length of the string after replacing spaces with '%20'
    let newLength = trueLength + spaceCount * 2;

    // Create a new string to store the URLified result
    let urlified = '';

    // Traverse the original string and build the URLified string
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') {
            urlified += '%20';
        } else {
            urlified += str[i];
        }
    }

    return urlified;
};


const urlify2 = (str) => {
    let urlified = '';
    let spaceCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (i === 0 || str[i - 1] !== ' ') {
                // If the current space is not preceded by another space, add '%20'
                urlified += '%20';
                spaceCount++;
            }
        } else {
            urlified += str[i];
        }
    }

    // Trim the result string to remove any trailing spaces
    if (spaceCount > 0 && urlified.endsWith('%20')) {
        urlified = urlified.slice(0, -3 * spaceCount);
    }

    return urlified;
};

const input = "Mr John Smith    ";
console.log(urlify(input)); // Output: "Mr%20John%20Smith"


console.log(urlify("Mr John Smith    "))