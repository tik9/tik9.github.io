const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync('README2.md');

const { incrementCount, data } = require('./count');

  test('incrementing count', () => {
    data.cheese = 0;
    incrementCount();
    expect(data.cheese).toBe(1);
  });