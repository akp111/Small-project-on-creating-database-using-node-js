const fs=require('fs');
const _=require('lodash');
const  yargs=require('yargs');

var name=yargs.argv['name'];

var father=yargs.argv['father'];

var mother=yargs.argv['mother'];

fs.appendFileSync('Database.txt','Name is :'+name+' Father\'s name is '+father+' Mother\'s name is'+mother);
