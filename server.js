var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var adarray = require('./ads');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

//context variables:
//homepage: trending, an array of objects with members name and author; homechats, an array of objects with members name and author
//convo: chatName, a string; messages, an array of objects with members message, author.

app.get('/users/:id/', function(req,res){
  var collection = db.collection('chatterBoxRooms');
  collection.find({members:req.params.id}).toArray(function(err,coll){
    console.log(coll);
    if (err) {
      res.status(500).send({
        error: "Error getting rooms from database"
      });
    } else {
      res.status(200).render('homepage', {
        trending: adarray,
        homechats: coll
      });
    }
  });
});

app.post('/users/:id/addChat', function(req,res){
  var person = req.params.id.toLowerCase();
  if (req.body && req.body.url && req.body.caption) {
    var collection = db.collection('chatterBoxRooms');
    var chat = {
      name: req.body.name,
      author: req.body.author
    };
    collection.insertOne({
      id: req.body.name,
      messages: [{message: "Enjoy your new room!", author: "Chatterbot"}],
      members: [person, req.body.author]
    },
      function (err, result) {
        if (err) {
          res.status(500).send({
            error: "Error creating new room in DB"
          });
        }
      }
    );
  } else {
    res.status(400).send("Request needs a body with an author and a chat room name.");
  }
});

app.get('/users/:id/chat/:room', function(req,res){
  var collection = db.collection('chatterBoxRooms');
  collection.find({chatName: req.params.room}).toArray(function(err,coll){
    console.log(coll);
    if (err) {
      res.status(500).send({
        error: "Error getting rooms from database"
      });
    } else if(coll.length === 0){
      res.status(404).send({
        error: "Was not able to find any rooms!"
      })
    } else if(!coll[0].members.includes(req.params.id)){
      res.status(200).send({
        error: "Unable to access that room: User isn't allowed!"
      });
    } else {
      res.status(200).render('convo', {
        chatName: req.params.room,
        messages: coll[0].messages
      });
    }
  });
});

app.post('/users/:id/chat/:room/addChat', function(req,res){
  var person = req.params.id.toLowerCase();
  var room = req.params.room.toLowerCase();
  if (req.body && req.body.url && req.body.caption) {
    var collection = db.collection('chatterBoxRooms');
    var photo = {
      message: req.body.url,
      author: person
    };
    collection.updateOne(
      { id: room },
      { $push: { messages: {message: req.body.content, author: person} } },
      function (err, result) {
        if (err) {
          res.status(500).send({
            error: "Error inserting photo into the DB"
          });
        } else {
          console.log("== update result:", result);
          if (result.matchedCount > 0) {
            res.status(200).send("Success");
          } else {
            next();
          }
        }
      }
    );
  } else {
    res.status(400).send("Request needs a body with a URL and caption");
  }
});

app.get('*', function(req,res){
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl, function (err, client) {
  if (err) {
    console.log(mongoUrl);
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});
