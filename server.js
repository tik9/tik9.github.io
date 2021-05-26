const path = require('path');
const showdown = require('showdown');

var fs = require('fs'); 
var parse = require('csv-parse');

const express = require('express');
const app = express();

const dateUtils = require('./lib/date')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'))
app.use('/assets', express.static('assets'))

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.toString() });
});

var dbFile = './guestbook.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

db.serialize(function () {
  if (!exists) {
    db.run('CREATE TABLE guestbook (name TEXT, mail TEXT, message TEXT)');
    console.log('guestbook created!');
  }
})

app.get('/parsecsv', function(req, res){
  var csvData=[];
  fs.createReadStream('config.csv')
      .pipe(parse({delimiter: ','}))
      .on('data', function(csvrow) {
          // console.log(csvrow);
          csvData.push(csvrow);        
      })
      .on('end',function() {
        res.json(csvData)
        console.log(csvData);
      });
})
app.get("/writecsv", function (request, response) {
  
  fs.writeFile('guest.csv', 'dataToW', 'utf8', function (err) {
    if (err) {
      console.log('error - file either not saved or corrupted.');
    } else{
      console.log('saved!');
    }
  });
  // response.sendFile(__dirname + '/public/guestbook.html');
});
app.get('/getGuestbook', function(request, response) {
  db.all('SELECT * from guestbook', function(err, rows) {
    response.send(JSON.stringify(rows));
    console.log('row',rows)
  });

});

app.post('/postGuestbook', function (request, response) {
  // console.log(' req name',request.body.name)
  const values = `('${cleanInputs(request.body.name)}', '${cleanInputs(request.body.mail)}', '${cleanInputs(request.body.message)}')`;
  // console.log('mes', values)

  db.serialize(function () {

    db.run('INSERT INTO guestbook (name, mail, message) VALUES ' + values);
    response.sendStatus(200)
  });
})

const cleanInputs = function (inputString) {
  return inputString.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const converter = new showdown.Converter()

app.get('', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.post('/convertmd',
  function (req, res, next) {
    const text = req.body.content

    if (typeof text == 'undefined' || text == null) {
      res.json(['error', 'No data']);
    } else if (/[a-zA-Z0-9\#\-\[\]\(\)]+/.test(text)) {
      converter.setOption('simplifiedAutoLink', 'true');
      const html = converter.makeHtml(text)
      // res.json(['mdown', html, text]);
      res.json([html]);
    }
    else {
      next('an error occurred')
    }
  },
  function (err, req, res, next) {
    return res.status(401).send({ success: false, message: err })
  });

app.post('/toseconds', (req, res, next) => {
  input = req.body.content
  // var daDe,daObj
  if (input.toString().length <= 3) {
    error = 'Eingabe korrigieren'
  }
  else if (/^\d+$/.test(input)) {
    daObj = new Date(input, 0, 1)
    // console.log('da',date)
  } else if (/^\d{4}-\d{2}-\d{2}T?/.test(input)) {
    [daDe, daObj] = dateUtils.toDateFromIso(input)
  } else {
    next('server err')
  }
  const seconds = daObj.getTime() / 1000

  res.json({
    // result: input
    result: seconds,
    error: error
    // error: 
  });
})

app.post('/todate', (req, res, next) => {
  const input = req.body.content
  // var dtype
  // var daDe,daObj

  if (/^\d+$/.test(input)) {
    // 1_000_000_000' =10^9 = 2001

    console.log('serv inp2', input)
    // dtype = 'sec'
    daDe = dateUtils.toDateFromSeconds(input)[0]
  } else if (/^\d{4}-\d{2}-\d{2}T\d{2}/.test(input)) {
    [daDe, daObj] = dateUtils.toDateFromIso(input)
    dtype = 'iso'
  } else {
    next('serv 3', '2nd', input)
  }

  res.json({
    // result: input ,
    result: daDe
    // dtype: dtype
  });
});

app.listen(4000, () => {
  console.log('tik9 on port 4000.');
});
