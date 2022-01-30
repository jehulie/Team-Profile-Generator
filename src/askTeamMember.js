// All the inquirer helper functions: getName(), getId(), getEmail(), getRole(), getofficeNumber(), getGithub(), getSchool()
const inquirer = require('inquirer');

function askTeamMember() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team member?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID # of the team member?',
            },
            {
                type: 'email',
                name: 'email',
                message: 'Enter the email of the team member:',
            },
            {
                type: 'list',
                name: 'role',
                message: 'Choose the role of the team member:',
                choices: ['Employee', 'Manager', 'Engineer', 'Intern']
            },
        ]);
};

// Add the following questions to inquirer via conditional statements re: "role" question above...

// If employee - return data above
// Otherwise, if other roles add questions below:

// function getOfficeNumber() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'officeNumber',
//                 message: 'Enter the office number of the Manager:',
//             });
// };

// function getGithub() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'Enter the GitHub Username of team member',
//             });
// }

// function getSchool() {
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What school does the Intern attend?',
//             }
//         ]);
// };

// module.exports = getName(), getId(), getEmail(), getRole(), getofficeNumber(), getGithub(), getSchool()