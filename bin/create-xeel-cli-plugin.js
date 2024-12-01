#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const targetDir = args[0] || '.';
const packageName = path.basename(targetDir);

// Copy boilerplate files
execSync(`git clone https://github.com/xeel-dev/create-xeel-cli-plugin.git ${targetDir}`);

// Update package.json
const packageJsonPath = path.join(targetDir, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.name = packageName;
delete packageJson.repository;
delete packageJson.author;
delete packageJson.bugs;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Unset the git remote
execSync(`cd ${targetDir} && git remote remove origin`);

console.log(`Plugin scaffolded in ${targetDir}`);