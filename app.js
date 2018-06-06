const express = require('express');
const app = express();

app.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data.json')
})

app.get ('/', function(req, res){
    res.sendFile(__dirname + '/liste.html')
})

app.get('/liste.js', function(req, res){
    res.sendFile(__dirname + '/liste.js')
})

app.listen(3007, function() { 
    console.log('Listening on port 3007')
})
