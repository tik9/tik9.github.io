
 const page = require("./page");
  
 // ...
  
 console.log("element:");
 console.log(page.window.document.getElementById("count").innerHTML);
  
 page.window.document.getElementById("count").innerHTML = 1337;
 console.log("Updated element:");
 console.log(page.window.document.getElementById("count").innerHTML);