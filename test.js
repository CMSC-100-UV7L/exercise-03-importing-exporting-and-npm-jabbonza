const {generateUniqueID, addAccount} = require('./function');

console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Tim", "Berners-Lee"));

console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
