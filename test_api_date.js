var Request = require("request");

var dateToConvert = '2-1-0T'
var dateToConvert = '2-1-0'


Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:5000/convertdate",
    "body": JSON.stringify({
        "content": dateToConvert,
    })
}, function (error, response, body) {
    if (error) {
        return console.log('Err in Client: ' + error);
    }
    console.dir(JSON.parse(body));
});