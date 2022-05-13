// TODO: Include packages needed for this application
// add the file system pacakge
const fs = require('fs');
// add inquirer
const inquirer = require('inquirer');
//Link generatemarkdown.js to index 
const generateMarkdown = require('./utils/generateMarkdown');

// takes the mark down code and writes it to README.md in the dist folder
const writeFile = (markDown) =>{
    return new Promise((resolve,reject) =>{
        fs.writeFile(`./dist/README.md`,markDown,err=>{
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

// TODO: Create a function to initialize app
const init = () => {
    // return inquirer prompts
    return inquirer.prompt([

        // prompts user for a title
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
        // prompts user to give a description of their project
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
        // prompts user to provide use examples
        { 
            type: 'input',
            name: 'usage',
            message: 'Please provide some examples for use.',
            validate: provideExample =>{
                if(provideExample){
                    return true;
                }
                else{
                    console.log('Please provide some examples for use.');
                    return false;
                }
            }
        },
        // prompts user to layout contributing guidelines
        {
            type: 'input',
            name: 'contributions',
            message: 'What are your guidelines for contributing?',
            validate: contributions =>{
                if(contributions){
                    return true;
                }
                else{
                    console.log('What are your guidelines for contributing?');
                    return false;
                }
            }
        },
        // prompts user to provide testing instructions
        {
            type: 'input',
            name: 'testInstruction',
            message: 'Please enter test instructions.',
            validate: test =>{
                if(test){
                    return true;
                }
                else{
                    console.log('Please enter test instructions.');
                    return false;
                }
            }
        },
        // prompts user to choose a license for their readme
        {
            type: 'list',
            name: 'license',
            choices: ['MIT','GPLv2', 'Apache','BSD3-clause','BSD 2-clause', 'LGPLv3','AGPLv3','none']
        },
        // prompts user to provide github info
        {
            type: 'input',
            name: 'name',
            message: 'What is your gitHub username?',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('What is your gitHub username?');
                    return false;
                }
            }
        },
        //prompts user for an email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput=>{
                if(emailInput){
                    return true;
                }
                else{
                    console.log('What is your email?');
                    return false;
                }
            }
        },
        
    ])
}

// takes current readme data and adds installation section info
const installationPrompt = readMeData =>{
    // if there is no installationSteps array create one
    if(!readMeData.installation){
        readMeData.installation = [];
    }
    return inquirer.prompt([
        // prompts the user for a step in their installation process
        {
            type:'input',
            name: 'installationStep',
            message: 'Please enter a step for installing your project',
            validate: installationStep =>{
                if(installationStep){
                    return true;
                }
                else{
                    console.log('Please enter a step for installing your project');
                    return false;
                }
            }
        },
        // asks the user if they need more steps in process
        {
            type: 'confirm',
            name: 'confirmAddStep',
            message: 'Would you like to add another step?',
            default: false
        }
    ])
    // takes installation data
    .then(installationData =>{
        // puts the installation data array in the readme installation section
        readMeData.installation.push(installationData);
        // if the user wants to add more steps
        if(installationData.confirmAddStep){
            // run installationPrompt again
            return installationPrompt(readMeData);
        }
        // return the readmedata 
        else{ return readMeData}
        });
    };
   


// Function call to initialize app
init()
// run the installation prompt function
.then(installationPrompt)
// take the readmedata and run the markdown function in generateMarkdown.js
.then(readMeData =>{
    return generateMarkdown(readMeData);
})
// if the markdown data is completed console log the response and return writeFile
.then(markDown => {
    
    return writeFile(markDown);
})
.then(writeFileResponse =>{
    console.log(writeFileResponse.message);
})
// catch any err
.catch(err => console.log(err));

