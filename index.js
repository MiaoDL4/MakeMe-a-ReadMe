// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a Description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps needed to to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and/or examples on your projects usage?"
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Select your licence",
        choices: ["Apache Licence 2.0", "GNU General Public licence V3", "MIT Licence", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "input",
        name: "tests",
        message: "Outline any tests that can be run on your project."
    },
    {
        type: "input",
        name: "github",
        message: "what is your github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(readme, data) {
    let markdown = generateMarkdown(data);
    fs.writeFile(readme, markdown, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            var readMeMake = 'README.md';
            writeToFile(readMeMake, data);
        });
}

// Func1tion call to initialize app
init();
