// Import Inquirer.js
const inquirer = require(`inquirer`);

// Import children of class Employee
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

// Create object to store employee currently being entered
let employee = {};

// Prompt user for employee data
const promptUser = teamData => {

  // If no team members have been entered, then create teamData array
  if (!teamData) {
    teamData = [];
    // The manager is always the first employee to be entered
    employee = new Manager();
  }
  
  // Capture user input in command line
  return inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `Enter the ${employee.getRole()}'s name:`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.error(`\nPlease enter the ${employee.getRole()}'s name!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `id`,
      message: `Enter the ${employee.getRole()}'s employee ID:`,
      validate: idInput => {
        // Validation could also include preventing the user from entering an ID already entered for another employee
        if (idInput) {
          return true;
        } else {
          console.error(`\nPlease enter the ${employee.getRole()}'s employee ID!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `email`,
      message: `Enter the ${employee.getRole()}'s email address:`,
      validate: emailInput => {
        // Validation could also include preventing the user from entering an email already entered for another employee
        if (emailInput.includes(`@`)) {
          return true;
        } else {
          console.error(`\nPlease enter a valid email address!`);
          return false;
        }
      }
    },
    // If the employee is a manager, then prompt user for office number
    {
      type: `input`,
      name: `officeNumber`,
      message: `Enter the ${employee.getRole()}'s office number:`,
      validate: officeNumberInput => {
        if (parseInt(officeNumberInput)) {
          return true;
        } else {
          console.error(`\nPlease enter a valid office number!`);
        }
      }
    },
    // If the employee is an engineer, then prompt user for GitHub username
    // If the employee is an intern, then prompt user for school
    {
      type: `list`,
      name: `buildTeam`,
      message: `Please select one of the following:`,
      choices: [`Add engineer to the team`, `Add intern to the team`, `Finish building the team`]
    }
  ])
  .then(employeeData => {
    // Push employeeData to teamData array
    teamData.push(employeeData);

    // If user wants to add a member to the team, then set employee to type and return promptUser()
    if (employeeData.buildTeam === `Add engineer to the team`) {
      employee = new Engineer();
      return promptUser(teamData);
    } else if (employeeData.buildTeam === `Add intern to the team`) {
      employee = new Intern();
      return promptUser(teamData);
    } else {
      return teamData;
    }
  });
};

promptUser()
  .then(teamData => {
    console.log(teamData);
    // return generatePage(teamData);
  })
  .then(pageHTML => {
    // return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });