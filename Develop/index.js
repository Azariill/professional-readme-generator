// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project-title',
            message: 'What is the title of your project?',
            validate: projectTitle =>{
                if(projectTitle){
                    return true;
                }
                else{
                    console.log('Please enter a title for your project');
                    return false;
                }
            }
        },
        {
            
        }
    ])
}

// Function call to initialize app
init();
