#!/usr/bin/env node
import { Command } from 'commander';
import { updateNodeLTS } from './index';

const program = new Command();

program
  .name('node-nvm-update')
  .description('Updates Node.js to the latest LTS version using NVM')
  .version('1.0.0')
  .action(async () => {
    try {
      await updateNodeLTS();
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  });

program.parse(process.argv);
