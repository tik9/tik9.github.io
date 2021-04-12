const path = require('path');
const showdown = require('showdown');

const express = require('express');
const app = express();

const dateUtils = require('./lib/date')


app.use('/public', express.static('public'))
app.use('/assets', express.static('assets'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const converter = new showdown.Converter()

app.get('', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
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
  const input = req.body.content
  // var daDe,daObj
  if (/^\d+$/.test(input) && input.toString().length < 7) {
    daObj = new Date(input, 0, 1)
    // console.log('da',date)
  } else if (/^\d{4}-\d{2}-\d{2}T?/.test(input)) {
    [daDe, daObj] = dateUtils.toDateFromIso(input)
    console.log('dade', daDe)
  } else {
    next('server err')
  }
  const seconds = daObj.getTime() / 1000

  res.json({
    // result: input
    result: seconds,
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
  // dat = dd + "." + mm + "." + yyyy;

  res.json({
    // result: input ,
    result: daDe
    // dtype: dtype
  });
});

app.listen(4000, () => {
  console.log('tik9 on port 4000.');
});
