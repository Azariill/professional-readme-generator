// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
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
        {
            type: 'list',
            name: 'license',
            choices: ['MIT','GPLv2', 'Apache','BSD3-clause','BSD 2-clause', 'LGPLv3','AGPLv3','none']
        }


    ])
}

const installationPrompt = readMeData =>{
    // if there is no installationSteps array create one
    if(!readMeData.installation){
        readMeData.installation = [];
    }
    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'confirmAddStep',
            message: 'Would you like to add another step?',
            default: false
        }
    ])
    .then(installationData =>{
        readMeData.installation.push(installationData);
        if(installationData.confirmAddStep){
            return installationPrompt(readMeData);
        }
        else{ return readMeData}
        });
    };
   


// Function call to initialize app
init()
.then(installationPrompt)
.then(readMeData =>{
    console.log(readMeData);
    return generateMarkdown(readMeData);
})
.then(markDown => {
    return writeFile(markDown);
})
