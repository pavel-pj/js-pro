import {  make } from './src/lesson11.js';

const company = make('Hexlet');
console.log(company);

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company2);


