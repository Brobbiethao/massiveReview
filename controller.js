module.exports = {
  getPeople (req, res, next) {
    req.app.get('db')
      .run('select * from people')
      .then(response=> res.send(response))
      .catch(err => res.send(err))
  },
  getPerson (req, res, next) {
    req.app.get('db')
      .run('select * from people where id = $1', [req.params.id])
      .then(response=> res.send(response))
      .catch(err => res.send(err))
  },
  postPerson (req, res, next) {
    req.app.get('db')
      .postPeople([req.body.first_name,  req.body.last_name,  req.body.age, req.body.location])
      .then(response=> res.send(response))
      .catch(err => res.send(err))
  },
  editPerson (req, res, next) {
    req.app.get('db')
      .run('update people set first_name = $1 where id=$2', [req.body.first_name, req.params.id])
      .then(response=> res.send(response))
      .catch(err => res.send(err))
  },
}
