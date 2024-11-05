import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

// This is just for testing you would not want to create the table every
// time you start up the app feel free to improve this code :)
db.run(`CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL)`)

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

// When a get request is called, get all the tasks from the database and send it to index
app.get('/', function (req, res) {

    const local = { tasks: [] }
    db.each('SELECT id, task FROM todo', function (err, row) {
      if (err) {
        console.log(err)
      } else {
        local.tasks.push({ id: row.id, task: row.task })
      }
    }, function (err, numrows) {
      if (!err) {
        res.render('index', local)
      } else {
        console.log(err)
      }
    })
    console.log('GET called')
})

// When a post request is made, adds the todo item to the database and send the database to index
app.post('/', function (req, res) {
    console.log('adding todo item')
    const stmt = db.prepare('INSERT INTO todo (task) VALUES (?)')
    stmt.run(req.body.todo)
    stmt.finalize()
    const local = { tasks: [] }
    db.each('SELECT id, task FROM todo', function (err, row) {
      if (err) {
        console.log(err)
      } else {
        local.tasks.push({ id: row.id, task: row.task })
      }
    }, function (err, numrows) {
      if (!err) {
        res.render('index', local)
      } else {
        console.log(err)
      }
    })
})

// When a delete request is made, deletes the todo item from the database and send the database to index
app.post('/delete', function (req, res) {
    console.log('deleting todo item')
    const stmt = db.prepare('DELETE FROM todo where id = (?)')
    stmt.run(req.body.id)
    stmt.finalize()
    const local = { tasks: [] }
    db.each('SELECT id, task FROM todo', function (err, row) {
      if (err) {
        console.log(err)
      } else {
        local.tasks.push({ id: row.id, task: row.task })
      }
    }, function (err, numrows) {
      if (!err) {
        res.render('index', local)
      } else {
        console.log(err)
      }
    })
})

// Start the web server
app.listen(3000, function () {
    console.log('Listening on port 3000...')
})
