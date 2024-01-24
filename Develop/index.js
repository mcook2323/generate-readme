// These are the packages required to run the  Auto generate README
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')

// These are the array of questions to place in the automated README file
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your Application?',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your Application?',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}

  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your application?',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}

  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do I use your application??',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}

  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please list any contributors. (Use Github username)',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide walkthrough of required tests if applicable',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}
  },
  {
    type: 'email',
    name: 'email',
    message: 'What is your email address',
    validate: (value)=> {if(value){return true} else {return 'I need a value to continue, write N/A if not applicable'}}
  }
];


// This is the funnction to write the README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// This is the function to initialize the app
function init() {
  inquirer
  .prompt(questions).then((responses) => {
      console.log("Creating README file");
    writeToFile('README.md', generateMarkdown({...responses}))
  });}

// Function call to initialize app
init();
