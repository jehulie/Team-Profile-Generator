const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, role){
        this.name = getName(name),
        this.id = getId(id),
        this.email = getEmail(email),
        this.role = getRole(role)
    }
}

// add functions
// function getName()
// function getID()
// function getEmail()
// function getRole() - returns 'Employee'

// askEmployee() {
// return inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of the team member?',
//     },
//     {
//         type: 'email',
//         name: 'email',
//         message: 'Enter the email of the team member:',
//       },
//     {
//       type: 'list',
//       name: 'role',
//       message: 'Choose the role of the team member:',
//       choices: ['Employee', 'Manager', 'Engineer', 'Intern']
//     },
//   ]);
// }

module.exports = Employee;

