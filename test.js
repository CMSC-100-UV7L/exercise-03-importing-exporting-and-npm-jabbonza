const {generateUniqueID, addAccount} = require('./function');

console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Tim", "Berners-Lee"));
console.log(generateUniqueID("Ted", "Nelson"));
console.log(generateUniqueID("John"));
console.log(generateUniqueID("Jane", " "));
console.log(generateUniqueID("Chandler", "Bing"));


console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
console.log(addAccount(["Ted", "Nelson", "nelsontedw3c.com", 58]));
console.log(addAccount(["John", "john@w3c.com", 27]));
console.log(addAccount(["Jane"," ","jane@w3c.com", 23]));
console.log(addAccount(["Chandler", "Bing", "bingc@w3c.com", 17]));

