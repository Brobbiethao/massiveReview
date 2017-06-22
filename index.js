const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, port = 3000
 				, app = express()
        , massive = require('massive')
        , controller = require("./controller")

massive('postgres://SheaClose@localhost/postgres').then(massiveInstance => {
  app.set('db', massiveInstance);
})


app.use(cors())
app.use(bodyParser.json())
app.use("/", express.static(__dirname + '/public'));

app.get('/people', controller.getPeople);
app.get('/people/:id', controller.getPerson);
app.post('/people', controller.postPerson);
app.put('/people/:id', controller.editPerson);


app.listen(port, function() {
  console.log('Server listening on port', port)
})
