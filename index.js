const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of the team member?',
//     },
//     {
//       type: 'list',
//       name: 'role',
//       message: 'Choose the role of the team member:',
//       choices: ['Employee', 'Manager', 'Engineer', 'Intern']
//     },
//     {
//       type: 'email',
//       name: 'email',
//       message: 'Enter the email of the team member:',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter the GitHub Username of team member',
//     },
//   ])
//   .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });