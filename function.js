const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');

function generateUniqueID(firstName, lastName) {
    if (!firstName || !lastName) {
        return('One or more fields are missing');
    }
    else if (firstName == " "|| lastName == " ") {
        return('One or more fields are empty strings');
    }
    else{
        const firstInitial = firstName[0].toLowerCase();
        const lastNameLower = lastName.toLowerCase();
        const uniqueString = uuidv4().slice(0, 8);
        return `${firstInitial}${lastNameLower}${uniqueString}`;
    }
}

function addAccount([firstName, lastName, email, age]) {
    if (!firstName || !lastName || !email || !age) {
        console.log('One or more fields are missing');
        return false;
    }
    else if (firstName === '' || lastName === '' || email === '') {
        console.log('One or more fields are empty strings');
        return false;
    }
    else if (!validator.isEmail(email)) {
        console.log('Email is in an invalid format');
        return false;
    }
    else if (age < 18) {
        console.log('Age is below 18');
        return false;
    }
    else {
        const uniqueID = generateUniqueID(firstName, lastName);
        const data = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
        fs.appendFileSync('users.txt', data);
        return true;
    }
}

module.exports = { generateUniqueID, addAccount };