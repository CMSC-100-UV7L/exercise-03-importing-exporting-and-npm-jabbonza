const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');

function generateUniqueID(firstName, lastName) {
    const firstInitial = firstName[0].toLowerCase();
    const lastNameLower = lastName.toLowerCase();
    const uniqueString = uuidv4().slice(0, 8);
    return `${firstInitial}${lastNameLower}${uniqueString}`;
}