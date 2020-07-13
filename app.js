const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin-routes');
const shopRoutes = require('./routes/shop-routes');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use('/', (req, res, next) => {
    console.log(req.path);
    res.send("Home");
});

app.listen(3000);