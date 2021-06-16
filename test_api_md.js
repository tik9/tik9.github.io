
var Request = require("request");

// Start of markdown
var textToConvert = `Heading
=======
## Sub-heading
 
Two spaces at the end of a line  
produces a line break.
 
Text attributes _italic_, 'monospace'.
Horizontal rule:

***

`;

// End of markdown

Request.post({
    "headers": { "content-type": 'application/json' },
    "url": "http://localhost:5000/convertmd",
    "body": JSON.stringify({
        'content': textToConvert,
    })
}, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    console.dir('JSON.parse(body)',JSON.parse(body));
});