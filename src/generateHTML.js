const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

// A function to generate team member cards
const generateCards = employeeArr => {
 
    const manager = employeeArr.manager.map(function(job) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHtml
    });

    const engineer = employeeArr.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    const intern = employeeArr.intern.map(function(job) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

// A function to generate HTML content

function generateHTML (employeeArr) {
    return
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-warning">
  <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateCards(employeeArr)}
</div>
</body>
</html>`
};

module.exports = generateHTML;