// Import Inquirer.js
const inquirer = require(`inquirer`);

// Import children of class Employee
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

// Array to store Employee objects -- data captured from user input
const teamData = [];

// Prompt user for employee data
const promptUser = () => {
  // Create new object to store employee currently being entered
  const employee = {};

  // If this is the first employee being entered, then the employee is the manager
  if (teamData.length === 0) {
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
        if (emailInput.includes(`@`)) {
          return true;
        } else {
          console.error(`\nPlease enter a valid email address!`);
          return false;
        }
      }
    },
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
    {
      type: `list`,
      name: `buildTeam`,
      message: `Please select one of the following:`,
      choices: [`Add engineer to the team`, `Add intern to the team`, `Finish building the team`]
    }
  ])
  .then(employeeData => {
    // push employeeData to teamData array
    // if user wants to add a member to the team, then set employee to type and return promptUser()
    // else return teamData
  });
};

promptUser();