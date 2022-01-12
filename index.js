// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description. What was your motivation? What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps or commands are required to install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'BSD_3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests for your application:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile( filename, data ) {
    fs.writeFileSync( filename, data, (err) =>
    
    err ? console.error(err) : console.log( 'Your README.md has been created successfully!' )
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt( questions )
        .then( answers => {
            const userData = generateMarkdown( answers );
            writeToFile( 'sample-README.md', userData )
            console.log( answers );
        })
}

// Function call to initialize app
init();
