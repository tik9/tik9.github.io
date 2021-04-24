const path = require('path');
const showdown = require('showdown');

const express = require('express');
const app = express();

const dateUtils = require('./lib/date')


app.use('/public', express.static('public'))
app.use('/assets', express.static('assets'))

var fs = require('fs');
var dbFile = './guestbook.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

db.serialize(function () {
  if (!exists) {
    db.run('CREATE TABLE guestbook (name TEXT, mail TEXT, message TEXT)');
    console.log('table guestbook created!');
  }
  else {
    console.log('Database "guestbook" ready');

    db.each('SELECT * from guestbook', function (err, row) {
      console.log('record:', row);
    });
  }
})

// and endpoint to hit when submitting guestbook form data
app.post('/postToGuestbook', function (request, response) {

  db.serialize(function () {
    var values = `('${cleanInputs(request.body.name)}', '${cleanInputs(request.body.mail)}', '${cleanInputs(request.body.message)}')`;
    db.run('INSERT INTO guestbook (name, mail, message) VALUES ' + values);
  });
})

const cleanInputs = function (inputString) {
  return inputString.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const converter = new showdown.Converter()

app.get('', function (req, res, next) {
  res.sendFile(path.join(__dirname,  '/public', 'index.html'));
});
app.get("/guest", function (request, response) {
  response.sendFile(__dirname + '/public/guestbook.html');
});

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.toString() });
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
      res.json([html, text]);
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
  var dtype
  // var daDe,daObj

  if (/^\d+$/.test(input)) {
    // 1_000_000_000' =10^9 = 2001

    console.log('serv inp2', input)
    // dtype = 'sec'
    daDe = dateUtils.toDateFromSeconds(input)[0]
    // [daDe, daObj] = dateUtils.toDateFromSeconds(input)
  } else if (/^\d{4}-\d{2}-\d{2}T\d{2}/.test(input)) {
    [daDe, daObj] = dateUtils.toDateFromIso(input)
    dtype = 'iso'
  } else {
    next('serv: this is an error')
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
