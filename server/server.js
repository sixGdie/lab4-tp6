const express = require('express')
const cors = require('cors')

const mysql = require('mysql')
const app = express()
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'lab4-tp6',
}

app.use(cors())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

const handleDisconnect = () => {
  connection = mysql.createConnection(dbConfig) // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err)
      setTimeout(handleDisconnect, 1000) // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }) // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    console.log('db error', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // Connection to the MySQL server is usually
      handleDisconnect() // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err // server variable configures this)
    }
  })
}
handleDisconnect()

app.get('/', (req, res) => {
  connection.query('SELECT * FROM instrumentos', (err, rows, fields) => {
    const instrumentos = rows.map((el) => {
      return {
        id: el.id,
        instrumento: el.instrumento,
        marca: el.marca,
        modelo: el.modelo,
        imagen: el.imagen,
        precio: el.precio,
        costoEnvio: el.costo_envio,
        descripcion: el.descripcion,
      }
    })
    res.json(instrumentos)
  })
})
