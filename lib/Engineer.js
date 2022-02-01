const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        // Calling Employee constructor
       super (name, id, email);

        // Adding github property    
        this.github = github;
    }

    // Return github from input
    getGithub() {
        return this.github;
    }

    // Override "Employee" role with "Engineer"
    getRole (){
        return "Engineer";
    }
}

module.exports = Engineer;

// const inquirer = require("inquirer");

// function askEngineer() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'Enter the GitHub Username of team member',
//             });
// }