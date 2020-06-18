const express = require('express');
const app = express();
const join = require('path').join;
const bodyParser = require('body-parser');
const expressWs = require('express-ws')(app);

const port = 3000;

//middleware (?)
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
const lightsRoute = require(join(__dirname, 'routes', 'lights-router'));
const toggleRoute = require(join(__dirname, 'routes', 'toggle-router'));

app.use('/api/lights', lightsRoute);
app.use('/api/toggle', toggleRoute);


//index
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/views/index.html'));
});


app.listen(port, () => console.log(`Hosted on port ${port}`));

