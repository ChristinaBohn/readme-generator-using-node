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
        message: 'Enter a description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter content for your bio:',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter the url or file path for a preview image for your project here:',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
