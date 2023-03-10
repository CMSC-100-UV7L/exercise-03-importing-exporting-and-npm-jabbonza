const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const validator = require('validator');

function generateUniqueID(firstName, lastName) {
    const firstInitial = firstName[0].toLowerCase();
    const lastNameLower = lastName.toLowerCase();
    const uniqueString = uuidv4().slice(0, 8);
    return `${firstInitial}${lastNameLower}${uniqueString}`;
}

function addAccount([firstName, lastName, email, age]) {
    if (firstName && lastName && email && age >= 18 && validator.isEmail(email)){
        const uniqueID = generateUniqueID(firstName, lastName);
        const data = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
        fs.appendFileSync('users.txt', data);
        return true;
    } else return false;
}

module.exports = {generateUniqueID, addAccount};