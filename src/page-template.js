const generatePage = templateData => { // templateData is an array of employee objects
  const employeeCards = []; // Array to store strings of employee data to be used as cards in HTML file

  const generateManager = manager => {
    return `<div class="employee">
    <div class="employee-header">
      <h2>${manager.name}</h2>
      <h3>${manager.role}</h3>
    </div>
        <div class="employee-info">
            <div class="employee-id">
              <p>ID: ${manager.id}</p>
            </div>
            <div class="employee-email">
              <p>Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></p>
            </div>
            <div class="employee-special">
              <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
  </div>`
  };

  const generateEngineer = engineer => {
    return `<div class="employee">
    <div class="employee-header">
      <h2>${engineer.name}</h2>
      <h3>${engineer.role}</h3>
    </div>
    <div class="employee-info">
      <div class="employee-id">
        <p>ID: ${engineer.id}</p>
      </div>
      <div class="employee-email">
        <p>Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></p>
      </div>
      <div class="employee-special">
        <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
      </div>
    </div>
  </div>`
  };

  const generateIntern = intern => {
    return `<div class="employee">
    <div class="employee-header">
      <h2>${intern.name}</h2>
      <h3>${intern.role}</h3>
    </div>
    <div class="employee-info">
      <div class="employee-id">
        <p>ID: ${intern.id}</p>
      </div>
      <div class="employee-email">
        <p>Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></p>
      </div>
      <div class="employee-special">
        <p>School: ${intern.school}</p>
      </div>
    </div>
  </div>`
  };

  // Loop through templateData to create array of cards for HTML page
  templateData.forEach(employee => {
    switch (employee.role) {
      case `Manager`:
        employeeCards.push(generateManager(employee));
        break;
      case `Engineer`:
        employeeCards.push(generateEngineer(employee));
        break;
      case `Intern`:
        employeeCards.push(generateIntern(employee));
        break;
      default:
    }
  });

  return employeeCards.join(``); // Convert array into a single string
}

module.exports = templateData => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${generatePage(templateData)}
    </main>
  </body>
  </html>`
}