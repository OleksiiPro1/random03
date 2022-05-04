1st try:
const color1 = '#4c56aa';

console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('#### ####'));
console.log(chalk.hex(`${color1}`).bold(`#### ${color1} ####`));
console.log(chalk.hex(`${color1}`).bold('#### ####'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));

2st try:
import chalk from 'chalk';
import randomColor from 'randomColor';

const color = randomColor();
randomColor();

const messageblock = ` ###############################
###############################
###############################
###############################

####

#### ${color}

####

###############################
###############################
###############################
###############################`;

console.log(chalk.hex(`${color}`).bold(`${messageblock}`));

const color1 = '#4c56aa';

console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('#### ####'));
console.log(chalk.hex(`${color1}`).bold(`#### ${color1} ####`));
console.log(chalk.hex(`${color1}`).bold('#### ####'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
console.log(chalk.hex(`${color1}`).bold('###############################'));
