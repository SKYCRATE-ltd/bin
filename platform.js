#!/bin/env node

// const $ = process.argv.slice(2);

let platform = process.platform;
let architecture = process.arch;

if (platform === "win32")
	platform = "windows";

if (['x32', 'x64'].includes(architecture))
	architecture = architecture.replace('x', 'amd')

console.log(`${platform}-${architecture}`);
