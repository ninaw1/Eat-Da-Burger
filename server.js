const express = require('express')
const exphbs = require('express-handlebars')
const app = express() 

// static content for the app from public folder 

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(3000))
    .catch(e => console.log(e))