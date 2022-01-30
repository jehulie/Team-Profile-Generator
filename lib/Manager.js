const inquirer = require("inquirer");

class Manager {
    constructor(name, id, email, role, officeNumber){
        this.name = getName(name),
        this.id = getId(id),
        this.email = getEmail(email),
        this.role = getRole(role),
        this.officeNumber = getofficeNumber(officeNumber)
    }
}

// add functions
// function getRole() - returns 'Manager'

// function askManager() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'officeNumber',
//                 message: 'Enter the office number of the Manager:',
//             });
// };

module.exports = Manager;