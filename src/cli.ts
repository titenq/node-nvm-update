#!/usr/bin/env node
import process from 'node:process';
import { parseArgs } from 'node:util';

import { updateNodeLTS } from './index.js';

const main = async () => {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      version: { type: 'boolean', short: 'v' },
      help: { type: 'boolean', short: 'h' },
    },
    allowPositionals: true,
  });

  if (values.help) {
    showHelp();

    return;
  }

  if (values.version) {
    console.log('node-nvm-update v1.0.5');

    return;
  }

  try {
    await updateNodeLTS();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));

    process.exit(1);
  }
};

const showHelp = () => {
  console.log(`
Usage: node-nvm-update [options]

Updates Node.js to the latest LTS version using NVM

Options:
  -v, --version    Output the current version
  -h, --help       Display this help message
`);
};

main().catch(console.error);
