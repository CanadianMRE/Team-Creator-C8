let inquirer = require('inquirer');

let Manager = require('./Assets/js/Manager');
let Engineer = require('./Assets/js/Engineer');
let Intern = require('./Assets/js/Intern');
let fs = require('fs');

const prompt = inquirer.createPromptModule();

let teamData = [];
let promptInProgress = true;

function createCard(employee) {
    let listText = `
    <li class="list-group-item">Id: ${employee.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
    `

    switch (employee.getRole()) {
        case "Intern":
            listText += `<li class="list-group-item">School: ${employee.getSchool()}</li>`
            break;
        case "Team Manager":
            listText += `<li class="list-group-item">Office: ${employee.getOffice()}</li>`
            break;
        case "Engineer":
            listText += `<li class="list-group-item">Github: <a href="${employee.getGithub()}">${employee.getGithub()}</a></li>`
            break;
        default:
    }


    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${employee.getName()} - ${employee.getRole()}</div>
            <div class="card-body text-dark bg-white">
                <ul class="list-group">
                    ${listText}
                </ul>
            </div>
    </div>
        `
}

function makeHTML(filePath) {
    let cards = '';
    
    teamData.forEach(element => {
        cards += createCard(element);
    });


    let text = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <link rel="stylesheet" type="text/css" href="./Assets/css/reset.css" />
        <link rel="stylesheet" type="text/css" href="./Assets/css/style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <section id="cardSection">
            ${cards}
        </section>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
    </html>
    `;

    fs.writeFile(filePath, text, (err) => {console.log(err)});
}

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
                    makeHTML('index.html');
                    break;
                default:
                    promptInfo(response.teamchoice);
            }
          }
        );
    }
}, 100);