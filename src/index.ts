#!/usr/bin/env node
import dotenv from 'dotenv';
import program from 'commander';

// Check Node.js version
const SUPPORTED_VERSION = 'v12';
if (process.version.split('.')[0] !== SUPPORTED_VERSION) {
  console.warn(
    `WARNING: The Shopify CLI has only been tested with Node.js ` +
    `${SUPPORTED_VERSION} but you are running ${process.version}.`
  );
}

// Read.env file
dotenv.config();

// Parse command
program
  .command('products', 'Operate on products', { executableFile: 'commands/product' })
  .command('collections', 'Operate on collections', { executableFile: 'commands/collection' })
  .parse(process.argv);
