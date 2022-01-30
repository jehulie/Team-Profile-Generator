const inquirer = require("inquirer");

class Engineer {
    constructor(name, id, email, role, Github){
        this.name = getName(name),
        this.id = getId(id),
        this.email = getEmail(email),
        this.role = getRole(role),
        this.Github = getGithub(Github)
    }
}

// add functions
// function getGithub()
// function getRole() - returns 'Engineer'

// function askEngineer() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'Enter the GitHub Username of team member',
//             });
// }

module.exports = Engineer;