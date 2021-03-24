const fs = require('fs');
 const { JSDOM } = require('jsdom');
  
 const html = fs.readFileSync('../README.md');
 const page = new JSDOM(html);
  
 module.exports = page;