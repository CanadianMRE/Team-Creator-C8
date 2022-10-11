let inquirer = require('inquirer');

let Manager = require('./Assets/js/Manager');
let Engineer = require('./Assets/js/Engineer');
let Intern = require('./Assets/js/Intern');
const HTML = require('./Assets/js/html');

const prompt = inquirer.createPromptModule();

let teamData = [];
let promptInProgress = true;

function promptInfo(jobType) {
    promptInProgress = true;
    let questions = [
        {
          type: 'input',
          message: `What is the ${jobType}'s name?`,
          name: 'name',
        },
        {
          type: 'input',
          message: `What is the ${jobType}'s employee ID?`,
          name: 'id',
        },
        {
          type: 'input',
          message: `What is the ${jobType}'s email address?`,
          name: 'email',
        }
    ]

    switch (jobType) {
        case "Team Manager":
            questions.push({
                type: 'input',
                message: `What is the Team Manager's office number?`,
                name: 'office',
            })
            break;
        case "Engineer":
            questions.push({
                type: 'input',
                message: `What is the Engineer's github username?`,
                name: 'git',
            })
            break;
        case "Intern":
            questions.push({
                type: 'input',
                message: `What is the Intern's school name?`,
                name: 'school',
            })
            break;
        default:
    }

    inquirer
        .prompt(questions)
        .then(response => {
            switch (jobType) {
                case "Team Manager":
                    teamData.push(new Manager(response.name, response.id, response.email, response.office))
                    break;
                case "Engineer":
                    teamData.push(new Engineer(response.name, response.id, response.email, response.git))
                    break;
                case "Intern":
                    teamData.push(new Intern(response.name, response.id, response.email, response.school))
                    break;
                default:
            }

            promptInProgress = false;
        })
}

promptInfo('Team Manager');

let buildInterval;
buildInterval = setInterval(() => {
    if (!promptInProgress) {
        promptInProgress = true;
        inquirer
          .prompt([
            {
              type: 'list',
              message: 'What team member would you like to add?',
              name: 'teamchoice',
              choices: [
                'Engineer',
                'Intern',
                `I'm Finished`
              ]
            }
          ])
          .then((response) => {
            switch (response.teamchoice) {
                case `I'm Finished`:
                    clearInterval(buildInterval);
                    new HTML(teamData, 'index.html').writeFile();
                    break;
                default:
                    promptInfo(response.teamchoice);
            }
          }
        );
    }
}, 100);