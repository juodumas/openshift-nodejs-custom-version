#!/usr/bin/env node

var kexec = require('kexec'),
    node_path = process.env.N_NODE;

// Respawn main.js with our node version.
console.log('Starting "' + node_path + ' main.js"');
kexec(node_path, ['main.js']);
