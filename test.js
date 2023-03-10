// imports the packages created
const {generateUniqueID, addAccount} = require('./function');

// test cases for generateUniqueID
console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Tim", "Berners-Lee"));
console.log(generateUniqueID("Ted", "Nelson"));
console.log(generateUniqueID("John"));              // missing field
console.log(generateUniqueID("Jane", " "));         // empty field
console.log(generateUniqueID("Chandler", "Bing"));

// test cases for addAccount
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
console.log(addAccount(["Ted", "Nelson", "nelsontedw3c.com", 58]));
console.log(addAccount(["John", "john@w3c.com", 27]));                  // missing field
console.log(addAccount(["Jane"," ","jane@w3c.com", 23]));               // empty field
console.log(addAccount(["Chandler", "Bing", "bingc@w3c.com", 17]));     // age below 18

