const inquirer = require("inquirer");

class Intern {
    constructor(name, id, email, role, school){
        this.name = getName(name),
        this.id = getId(id),
        this.email = getEmail(email),
        this.role = getRole(role),
        this.school = getSchool(school)
    }
}

// add functions
// function getSchool()
// function getRole() - returns 'Intern'

// function askIntern() {
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What school does the Intern attend?',
//             }
//         ]);
// };

module.exports = Intern;