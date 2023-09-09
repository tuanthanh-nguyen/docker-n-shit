const sqlite3 = require('sqlite3').verbose();
const dbLocation = '../sqlite-data/a5k42'
const dbName = 'a5k42'

const db = new sqlite3.Database(dbLocation, (err) => {
    if (err) console.error(`cannot connect to ${dbLocation}`)
    console.log(`${dbName} connected`)
});

db.serialize(() => {
    db.each("SELECT * FROM user", (err, row) => {
        if (err) console.error(err)
        console.log(row.name + ": " + row.age);
    });
});

db.close();
