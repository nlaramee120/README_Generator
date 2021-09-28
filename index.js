// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give your project a brief description.',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Enter installation instructions for other users.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do users use your project?',
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What technologies were used in this project?',
    },
    {
        type: 'input',
        name: 'testInstruct',
        message: 'Provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Who all contributed to this project?",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the licensing for your project.',
        choices: ['MIT', 'GNU', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(responses)
        writeToFile("newREADME.md", generateMarkdown({...responses}))
    });
};

// Function call to initialize app
init();
