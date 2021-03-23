const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync('README2.md');
//  window.document.body.innerHTML = fs.readFileSync('../_site/README2.html');
  
 const { incrementCount, data } = require('./assets/count');
  
 describe('incrementCount', () => {
   test('incrementing count', () => {
     data.cheese = 0;  
          incrementCount(); 
     expect(data.cheese).toBe(1);
   });
 });