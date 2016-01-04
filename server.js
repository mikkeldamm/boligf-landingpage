var express = require('express');
var app = express();

var options = {
    root: __dirname + '/dist/'
};

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.get('/produkt', function(req, res) {
    res.sendFile('product.html', options);
});

app.get('/priser', function(req, res) {
    res.sendFile('prices.html', options);
});

app.get('/om', function(req, res) {
    res.sendFile('about.html', options);
});

app.get('/vilkaar', function(req, res) {
    res.sendFile('terms.html', options);
})

app.use(function(req, res) {
    res.sendFile('404.html', options);
});



app.listen(process.env.PORT || 8080);

console.log('8080 is the magic port');