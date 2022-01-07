// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
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
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
