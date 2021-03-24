let data = { count: 0 };

const incrementCount = () => {
  // console.log('da',data)
  data.cheese++;
  window.document.getElementById('count')
    .innerHTML = data.cheese;
};

const incrementButton = window.document.getElementById("increment-button");
incrementButton.addEventListener('click', incrementCount);

module.exports = { incrementCount, data };
