var express = require('express');
var compression = require('compression')

var app = express();

var options = {
    root: __dirname + '/dist/'
};

var oneYear = new Date();
oneYear.setMonth(oneYear.getMonth() + 6);

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.get('/produktet', function(req, res) {
    res.sendFile('product.html', options);
});

app.get('/priser', function(req, res) {
    res.sendFile('prices.html', options);
});

app.get('/om-os', function(req, res) {
    res.sendFile('about.html', options);
});

app.get('/kontakt', function(req, res) {
    res.sendFile('contact.html', options);
});

app.get('/google24cbf0ed875ce5fa.html', function(req, res) {
    res.sendFile('google24cbf0ed875ce5fa.html', options);
});

app.use(function(req, res) {
    res.sendFile('404.html', options);
});

app.listen(process.env.PORT || 8080);

console.log('8080 is the magic port');