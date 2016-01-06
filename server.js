var express = require('express');
var app = express();

var options = {
    root: __dirname + '/dist/'
};

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.get('/produktet', function(req, res) {
    res.sendFile('product.html', options);
});

app.get('/prisen', function(req, res) {
    res.sendFile('price.html', options);
});

app.get('/om-os', function(req, res) {
    res.sendFile('about.html', options);
});

app.get('/kontakt', function(req, res) {
    res.sendFile('contact.html', options);
})

app.use(function(req, res) {
    res.sendFile('404.html', options);
});



app.listen(process.env.PORT || 8080);

console.log('8080 is the magic port');