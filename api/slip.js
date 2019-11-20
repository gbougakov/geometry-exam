const questions = require('./_questions')

module.exports = (req, res) => {
  const {id} = req.query

  const t1 = parseInt(id.substring(0, 2)) - 10
  const t2 = parseInt(id.substring(2, 4)) - 10
  const t3 = parseInt(id.substring(4, 6)) - 10

  res.json({
    t1: questions.theory[t1],
    t2: questions.task1[t2],
    t3: questions.task2[t3]
  })
}