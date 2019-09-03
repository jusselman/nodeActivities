// Load express module //
const express = require('express');
const path = require('path');

// require our fake database //
const listDB = require('./data/fake-db');


// Create our express app
const app = express();

// Configure the app (app.set) //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use) //


// Mount routes //



// Define a "root" route //
// app.get('/', function(req, res) {
//     res.send('<h1>Hello World</h1><br><a href="/home">Home</a><br><a href="/new">New</a><br><a href="about">about</a>');
// });

app.get('/', function(req, res) {
    res.send('<h1>Hello Home</h1><br><a href="/home">Home</a><br><a href="/new">New</a>');
});

app.get('/about', function(req,res) {
    res.send('<h1>This is the About Page</h1><p>It only exists in server.js</p>');
})

app.get('/home', function(req, res) {
    res.render('home', {
        cohort: 'SEI Bitches',
        nohort: 'WTF is a nohort?'
    });
});

app.get('/new', function(req, res) {
    res.render('new', {
        title: 'New Page header',
        description: 'This page is all about objects'
    });
});

app.get('/activities', function(req, res) {
    res.render('activities/index', {
        activities: listDB.grabAll()
    });
})

// Tell the app to listen on port 3000 //
app.listen(3000, function() {
    console.log('Leveled up');
});