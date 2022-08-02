require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT

// Middleware funcion que se ejecuta antes de que se ejecute otra funcion

app.set('view engine', 'hbs')

app.use( express.static('public') )


console.clear();



app.get('/', (req, res)  => {
    res.render('home')
//   res.sendFile(__dirname + '/index.html')
});

app.get('/hola-mundo', (req, res)  => {
    res.send('Hola Mundo')
  })

app.get('/generic', (req, res)  => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('*', (req, res)  => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)
console.log(`Server running on port ${port}`)