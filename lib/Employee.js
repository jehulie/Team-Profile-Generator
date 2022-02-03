// const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    // Returning data from Inquirer inputs
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

};

// to be exported
module.exports = Employee;

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