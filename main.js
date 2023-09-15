const http = require('http')
const sqlite3 = require('sqlite3').verbose();

const dbLocation = './a5k42'
const dbName = 'a5k42'
const port = 3000

const db = new sqlite3.Database(dbLocation, (err) => {
    if (err) console.error(`cannot connect to ${dbLocation}`)
    console.log(`${dbName} connected`)
});

http.createServer((req, res) => {
  const { url } = req
  if (url === '/') {
    db.serialize(() => {
      db.all("select * from student", (err, rows) => {
          if (err) console.error(err)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(rows))
      })
    })
    return
  }
  if (url === '/teacher') {
    db.serialize(() => {
      db.all("select * from teacher", (err, rows) => {
        if (err) console.error(err)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(rows))
      })
    })
    return
  }
  return res.end('404 NOT FOUND')
}).listen(port)

process.on('exit', () => { db.close() })
