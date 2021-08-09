// Import Inquirer.js
const inquirer = require(`inquirer`);

const generatePage = require(`./src/page-template`);

// Import children of class Employee
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);

// Create object to store employee currently being entered
let employee = {};

// Prompt user for employee data
const promptUser = teamData => { // teamData is an array employee objects used to store responses from user

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
    // If the employee is an engineer, then prompt user for GitHub username
    // If the employee is an intern, then prompt user for school
    {
      type: `input`,
      name: `special`,
      message: `Enter the ${employee.getRole()}'s ${employee.getSpecial()}:`,
      validate: specialInput => {
        if (specialInput) {
          return true;
        } else {
          console.error(`\nPlease enter a(n) ${employee.getSpecial()}!`);
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
    .then(employeeData => {  // employeeData is equal to the teamData parameter from promptUser()
      // Add role to employeeData
      employeeData.role = employee.getRole();

      // Rename employeeData.special property based on employee type
      switch (employeeData.role) {
        case `Manager`:
          employeeData.officeNumber = employeeData.special;
          delete employeeData.special;
          break;
        case `Engineer`:
          employeeData.github = employeeData.special;
          delete employeeData.special;
          break;
        case `Intern`:
          employeeData.school = employeeData.special;
          delete employeeData.special;
          break;
        default:
      }

      // Push employeeData to teamData array
      teamData.push(employeeData);

      // If user wants to add a member to the team, then set employee to type and return promptUser()
      switch (employeeData.buildTeam) {
        case `Add engineer to the team`:
          employee = new Engineer();
          delete employeeData.buildTeam; // Delete property after it has served its purpose
          return promptUser(teamData);
        case `Add intern to the team`:
          employee = new Intern();
          delete employeeData.buildTeam; // Delete property after it has served its purpose
          return promptUser(teamData);
        case `Finish building the team`:
          delete employeeData.buildTeam; // Delete property after it has served its purpose
          return teamData;
        default:
      }
    });
};

promptUser()
  .then(teamData => {
    return generatePage(teamData); // see './src/page-template.js for details on generatePage()'
  })
  .then(pageHTML => {
    console.log(pageHTML);
    // return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });