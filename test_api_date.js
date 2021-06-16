var Request = require("request");

var dateToConvert = '2021-03-28T11'
// dateToConvert = 1000000

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
    // console.dir(JSON.parse(body));
    // console.dir(JSON.stringify(body));
    var obj=JSON.parse(body)
    console.log('obj.result',obj.result);
    console.dir('body',body);
});
