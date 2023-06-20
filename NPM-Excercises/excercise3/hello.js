import { Command } from 'commander';

const program = new Command();

program
    .option('-n, --name <value>', 'Hello monkey')

program.parse();

const options = program.opts();
console.log(`Hello ${options.name}`);