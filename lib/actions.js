const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
const { spawn } = require('child_process');
const figlet = require('figlet');
const chalk = require('chalk');

const { copyFolderSync, rmdirRecursiveSync, colors } = require('./utils.js');

async function executeCommand(...command) {
  return new Promise((resolve, reject) => {
    const child = spawn(...command);

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
async function createProject(projectName, template) {
  const templatesDir = path.join(__dirname, '..', 'template');
  copyFolderSync(path.join(templatesDir, template), projectName, [
    path.join(templatesDir, template, 'node_modules'),
  ]);

  rmdirRecursiveSync(path.join(projectName, '.git'));
}

console.log(
  chalk.hex('#04be35')(
    figlet.textSync('Create Webdev App', {
      font: 'small',
      horizontalLayout: 'fitted',
    })
  )
);

async function main(projectName) {
  if (!projectName) {
    projectName = (
      await prompts({
        type: 'text',
        message: 'Enter name of your project',
        name: 'projectName',
        initial: 'my-app',
      })
    ).projectName;
  }

  projectName = projectName.toLowerCase().replace(/ |_/g, '-');
  const template = 'default';

  console.log(`\n${colors.green('>>')} Creating your HTML folder structure...`);
  console.log(
    `${colors.cyan('Directory:')} ${projectName}\n${colors.cyan(
      'Template:'
    )} ${template}\n`
  );

  if (fs.existsSync(path.join(process.cwd(), projectName))) {
    console.log('\x1b[31m', 'project with the same name already exist');
    process.exit(0);
  } else {
    await createProject(projectName, template);
  }

  console.log(`${colors.green('>')} Successfully created ${projectName}...`);
  console.log(
    `\n${colors.green(
      '>>'
    )} \`cd ${projectName}\` to get started! ✨\n\n${colors.cyan(
      'If you found this helpful, give this repository a ⭐ on Github:'
    )}\nhttps://github.com/pritudev/create-webdev-app`
  );
}

module.exports = { main, executeCommand };
