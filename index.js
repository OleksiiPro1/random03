import chalk from 'chalk';
import randomColor from 'randomColor';

const hue = process.argv[2];
const luminosity = process.argv[3];
const color = randomColor({ hue: hue, luminosity: luminosity });

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
