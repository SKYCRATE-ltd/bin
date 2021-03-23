#!/bin/env node

const $ = process.argv.slice(2);
const IP_INFO = JSON.parse($.shift());

console.log(IP_INFO.ip);
