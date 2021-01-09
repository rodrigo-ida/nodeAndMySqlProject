const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const db = require('./util/database');
const session = require('express-session')


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const mysqlStore = require('express-mysql-session')(session)

const store = new mysqlStore({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    database: 'primeiro',
    password: 'politica@859'
})

app.use(session({
    secret: 'my secret', resave: false, saveUninitialized: false, store: store
}))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes)

app.use(errorController.get404);



app.listen(3000);
