// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            type: 'input',
            name: 'description',
            message: 'Please write a short description about your project.(eg. Motivation, Why, What does it solve, what did you learn)',
            validate: shortDescription =>{
                if(shortDescription){
                    return true;
                }
                else{
                    console.log('Please enter a short description about your project.');
                    return false;
                }
            }
        },
     
        {
            type: 'input',
            name: 'installation',
            message: 'Please write a short description about your project.(eg. Motivation, Why, What does it solve, what did you learn)',
            validate: shortDescription =>{
                if(shortDescription){
                    return true;
                }
                else{
                    console.log('Please enter a short description about your project.');
                    return false;
                }
            }
        },

 
    ])
}

const writeFile = markDown =>{
    return new Promise((resolve,reject) =>{
        fs.writeFile('./dist/README.md',markDown,err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created!'
            });

        });
    });

};

// Function call to initialize app
init()
.then(data =>{
    return generateMarkdown(data)}
)
.then(markDown => {
    return writeFile(markDown);
})
