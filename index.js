const inquirer = require('inquirer');
const fs = require('fs');


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
        name: "license",
        message: "Select your license",
        choices: ["Apache Licence 2.0", "GNU General Public License family", "MIT Licence",  "None"]
    },
    {
        type:"input",
        name:"contributing",
        message:"List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type:"input",
        name:"tests",
        message:"Outline any tests that can be run on your project."
    },
    {
        type:"input",
        name:"questions",
        message:"add any frequently ask question and there answers here."
    }
  ])
  .then((answers) => {

  });