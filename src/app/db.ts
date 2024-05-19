import { sqlite3 } from "sqlite3"

export async function callProducts(query: string) {
  try {
    const db = new sqlite3.Database(
      "../../jobs.db",
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) return console.log(err.message);
        console.log("Successfully connected SQLite to database.")
      }
    )
    return await new Promise((resolve, reject) => {
      db.all(query, (err: Error, row) => {
        if (err) {
          console.error(err.message);
          return reject(err);
        }
        return resolve(row);
      })
    })
  } catch (error) {
    console.log(error)
    return error
  }
}

// Make sure the.env file is configured as follows:
//
// MYSQL_HOST = “192.168.xx.xx” // remote access or localhost
//
// MYSQL_PORT = “port”
//
// MYSQL_DATABASE = “name_of_table”
//
// MYSQL_USER = “username”
//
// MYSQL_PASSWORD = “passwd”
//
// Send a query using the above configuration to return a result in data.ts.
