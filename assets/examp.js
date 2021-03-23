
 const page = require("./page");
  
 // ...
  
 console.log("Initial contents of the count element:");
 console.log(page.window.document.getElementById("count").innerHTML);
  
 page.window.document.getElementById("count").innerHTML = 1337;
 console.log("Updated contents of the count element:");
 console.log(page.window.document.getElementById("count").innerHTML);