## BONZA, Jhorge Anne B.
## 2021-12950
## CMSC100 UV-7L

Lab Exercise 3 (10 pts)

Create a JavaScript file called functions.js that exports the following 2 functions:

Tips:
You may use any export style
Use the fs, uuid, and validator packages. 
You do not need to run “npm install fs”. It’s built into NodeJS.
To write files, use appendFileSync() -  https://nodejs.org/api/fs.html#fsappendfilesyncpath-data-options
UUID package: https://www.npmjs.com/package/uuid
Validator package: https://www.npmjs.com/package/validator

generateUniqueID()
Input parameters: first name (string), last name (string)
Create and return a unique id by concatenating the first letter of the first name (converted to lowercase), the last name (converted to lowercase), and a “unique” alphanumeric string of length 8
Use the uuid package to get a unique alphanumeric string. Trim as needed. 

e.g.
generateUniqueID(“Alan”, “Turing”)

returns: “aturing5133f34e”

addAccount()
Input parameter: An array with the following contents: first name (string), last name (string), email (string), age (number)

e.g addAccount([“Alan”, ”Turing”, “aturing@w3c.com”, 58]);

If the following conditions are true
all fields are present
the first name, last name, and email are non-empty strings
the email is in a valid format (use the validator package)
age is at least 18

save the data into a new line of file called users.txt in the following format:

first name,last name,email,age,uniqueID

e.g.
users.txt
Tim,Berners-Lee,tim@w3c.com,25,aturing5133f34e
Ted,Nelson,ted.n@w3c.com,43,tnelson0cfa6312


Use the function from Item #1 to generate the uniqueID for the user.
If the user was saved, return true. Else, return false


Test your files by calling them in a 2nd file called test.js

Call each function twice from test.js


Submission Guidelines:

Push your files in your Github repository (functions.js, test.js). Make sure to include the package.json file. DO NOT INCLUDE THE node_modules/ folder. Kindly put a .gitignore file so that the node_modules will not be pushed to your remote repository. Do not forget to document your code with comments.

After you are done with your exercise, click the mark as done button in the Google Classroom Assignment.
