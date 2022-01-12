// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description. What was your motivation? What did you learn?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What steps or commands are required to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'BSD_3', 'None']
    },
    {
        type: 'input',
        message: 'Enter any contribution guidelines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide instructions on how to run tests for your application:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeToFile( filename, data, (err) =>
    
    err ? console.error(err) : console.log('Your README.md has been created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt( questions )
        .then( answers => {
            const userData = generateMarkdown( answers );
            writeToFile( 'README.md', userData )
            console.log( answers );
        })
}

// Function call to initialize app
init();
