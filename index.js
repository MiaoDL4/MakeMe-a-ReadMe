const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, github, email}) =>
`# ${data.title}

## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## licence
${data.license}

## Credits
${data.contributing}

## Tests
${data.tests}

## Questions for ${data.github}
if you have any question in regards to this project please email me at ${data.email}
`;

inquirer
    .prompt([
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
            choices: ["Apache Licence 2.0", "GNU General Public licence family", "MIT Licence", "None"]
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
    ])
    .then((data) => {
        const readMe = generateReadMe(data);

        fs.writeFile('README.md', readMe, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );

    });