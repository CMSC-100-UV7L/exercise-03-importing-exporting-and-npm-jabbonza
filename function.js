// importing packages
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');             // v4 stands for version, reference: https://www.npmjs.com/package/uuid
const validator = require('validator');

// function for generating the unique id by concatenating the first letter of the first name, the last name, and a “unique” alphanumeric string of length 8
function generateUniqueID(firstName, lastName) {
    // checks if first name or last name exists
    if (!firstName || !lastName) {
        return('One or more fields are missing');
    }
    // checks if first name or last name contains an empty string
    else if (firstName == " "|| lastName == " ") {
        return('One or more fields are empty strings');
    }
    // performs the generation of unique id
    else{
        const firstInitial = firstName[0].toLowerCase();            // gets first letter of first name and converts it to lowercase
        const lastNameLower = lastName.toLowerCase();               // gets the last name and converts it to lowercase
        const uniqueString = uuidv4().slice(0, 8);                  // uses the uuid package to generate alphanumeric string length of 8, reference: https://www.geeksforgeeks.org/javascript-string-slice/
        return `${firstInitial}${lastNameLower}${uniqueString}`;    // returns the unique id
    }
}

// function for adding and saving an account
function addAccount([firstName, lastName, email, age]) {
    // checks if first name, last name, email, or age exists
    if (!firstName || !lastName || !email || !age) {
        console.log('One or more fields are missing');
        return false;
    }
    // checks if first name, last name, or email contains an empty string
    else if (firstName == " " || lastName == " " || email == " ") {
        console.log('One or more fields are empty strings');
        return false;
    }
    // checks if email format is valid using the validator package, reference: https://www.npmjs.com/package/validator
    else if (!validator.isEmail(email)) {
        console.log('Email is in an invalid format');
        return false;
    }
    // checks if age is below 18
    else if (age < 18) {
        console.log('Age is below 18');
        return false;
    } else {
    // adds the account
        const uniqueID = generateUniqueID(firstName, lastName);
        const data = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
        fs.appendFileSync('users.txt', data);
        return true;
    }
}

// exports the packages created
module.exports = { generateUniqueID, addAccount };