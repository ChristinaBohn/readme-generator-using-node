// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')

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
        message: 'What steps are required to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Choose a license:',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines:',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
