module.exports = (req, res) => {
  const { name = 'Tik World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}