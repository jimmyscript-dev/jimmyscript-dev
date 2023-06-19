import chalk, { } from 'chalk';

const combineColor = chalk.blue('Hello') + chalk.red('world!');
console.log(combineColor);

const combined = chalk.bgRed.yellowBright.bold('Hello World');
console.log(combined);

const hardware = `
${chalk.magentaBright('RAM:')} ${chalk.green('90%')}
${chalk.magentaBright('CPU:')} ${chalk.magenta('40%')}
${chalk.magentaBright('DISK:')} ${chalk.yellowBright('70%')}
`
console.log(hardware);

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');
console.log(warning('WARNING!'))
console.log(error('ERROR'))

const inverse = chalk.inverse('Y.O.L.O');
console.log(inverse);