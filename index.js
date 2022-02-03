const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Prompt = require('./src/Prompt');

Prompt()
  .then((employeeArr) => {
    const htmlPageContent = generateHTML(employeeArr);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

//  Prompt()
    // .then(employeeArr => {
    //     return generateHTML(employeeArr)
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML)
    // })

    // .catch(err => {
    //     console.log(err);
    // });