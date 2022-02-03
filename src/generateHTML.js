// A function to generate team member cards
function generateCards(employeeArr) {

    function managerCard(manager) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${manager.getName()}</h2>
            <h4>Manager<h4>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.getofficeNumber()}</p>
        </div>
        `
        return managerHtml
    };

    function engineerCard(engineer) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${engineer.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p> Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
        `
        return engineerHtml
    };

    function internCard(intern) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${intern.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p> School: ${intern.school}</p>
        </div>
        `
        return interHtml
    };
    const htmlArray = [];

    htmlArray.push(employeeArr.filter(employee=>employee.getRole()==='Manager')
    .map(manager=>managerCard(manager)).join(''));

    htmlArray.push(employeeArr.filter(employee=>employee.getRole()==='Engineer')
    .map(manager=>engineerCard(manager)).join(''));

    htmlArray.push(employeeArr.filter(employee=>employee.getRole()==='Intern')
    .map(manager=>internCard(manager)).join(''));

    return htmlArray.join('')
}

// A function to generate HTML content

module.exports = employeeArr => {
    return`
    <!DOCTYPE html>
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

