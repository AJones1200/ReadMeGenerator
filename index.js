// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')

  );
}

// TODO: Create a function to initialize app
function init() {

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Please enter title.',
        name: 'title',
      },
    {
      type: 'input',
      message: 'Please describe project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide usage information.',
      name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose license.',
        name: 'license',
        choices: ["Apache License", "Boost", "MIT License", "none"]
      },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions.',
        name: 'instructions',
    },
    
  ])
  .then((response) => {
    console.log(response.title);
    console.log(response.installation);
    console.log(response.usage);
    console.log(response.license);
    console.log(response.description);
    console.log(response.contribution);
    console.log(response.instructions);

    writeToFile(generateMarkdown(response))
  });
}

// Function call to initialize app
init();

