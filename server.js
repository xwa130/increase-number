import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';

const app = express();
const MONGODB_URI = "mongodb://localhost:27017/eis";

app.use(express.static('./frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

MongoClient.connect(MONGODB_URI, function(err, db) {
  if(err){
    console.error(`Failed to connect: ${ MONGODB_URI }`);
    throw err;
  }
  console.log("Connected successfully to Mongo server");

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
  });

  app.get('/user', (req, res) => {
    db.collection('eis').find({
      email: req.query.email
    })
    .toArray()
    .then(result => {
      if (bcrypt.compareSync(req.query.password, result[0].password))
        res.cookie(result[0].token, { httpOnly: false }).send();
    }).catch(e => {
      console.log('get user error is', e);
    });
  });

  app.post('/user', (req, res) => {
    const token = jwt.sign({ isLoggedIn: true }, 'secret');
    db.collection('eis').insert({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      crtnum: 0,
      token
    }).then(result => {
      if(result.result.ok === 1)
        res.cookie(token, { httpOnly: false }).send();
    }).catch(e => {
      console.log('post user error is', e);
    });
  });

  app.get('/crtnum', (req, res) => {
    const token = Object.keys(req.cookies)[0];
    jwt.verify(token, 'secret', (err, decoded) => {
      if (decoded.isLoggedIn) {
        db.collection('eis').find({ token })
        .toArray()
        .then(result => {
          res.json({
            crtnum: result[0].crtnum
          });
        }).catch(e => {
          console.log('get crtnum error is', e);
        });
      }
    });
  });

  app.post('/crtnum', (req, res) => {
    const token = Object.keys(req.cookies)[0];
    jwt.verify(token, 'secret', (err, decoded) => {
      if (decoded.isLoggedIn) {
        db.collection('eis').updateOne({ token }, {
          $set: {
            crtnum: req.body.crtnum
          }
        });
      }
    });
  });

  app.get('/nxtnum', (req, res) => {
    const token = Object.keys(req.cookies)[0];
    jwt.verify(token, 'secret', (err, decoded) => {
      if (decoded.isLoggedIn) {
        db.collection('eis').find({ token })
        .toArray()
        .then(result => {
          const nxtnum = Number(result[0].crtnum) + 1;
          db.collection('eis').updateOne({ token }, {
            $set: {
              crtnum: nxtnum
            }
          });
          res.json({ crtnum: nxtnum });
        }).catch(e => {
          console.log('get nxtnum error is', e);
        });
      }
    });
  });

  app.listen(3000, () => console.log('App listening on port 3000!'));
});