const fs = require('fs');

const person = {
  id: 2,
  gender: 'mail'
};

const student = {
  name: "ravi",
  email: "ravi11@yopmail.com"
};

const mergedObject = { ...person, ...student };

const fileName = 'mergedObject.json';

// Convert the merged object to JSON string
const mergedObjectJSON = JSON.stringify(mergedObject);

// Save the JSON string to a file
fs.writeFile(fileName, mergedObjectJSON, (err) => {
  if (err) {
    console.error('Error saving the file:', err);
  } else {
    console.log('File saved successfully:', fileName);
  }
});
