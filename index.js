import chalk from 'chalk';
import randomColor from 'randomColor';

const color = randomColor();
randomColor();

const messageblock = `  ###############################
  ###############################
  ###############################
  ###############################
  ####                       ####
  ####        ${color}        ####
  ####                       ####
  ###############################
  ###############################
  ###############################
  ###############################`;

console.log(chalk.hex(`${color}`).bold(`${messageblock}`));
