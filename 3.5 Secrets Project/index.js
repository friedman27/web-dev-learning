//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

let correctPassword = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  console.log('Get called');
  res.sendFile(__dirname + '/public/index.html');
});

app.use(checkPassword);

app.post('/check', function (req, res) {
  console.log('Password is correct: ' + correctPassword);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT ${PORT}`);
});

function checkPassword(req, res, next) {
  console.log(req.body);
  if (req.body['password'] === 'ILoveProgramming') {
    res.sendFile(__dirname + '/public/secret.html');
    correctPassword = true;
  } else {
    res.redirect(__dirname + '/public/index.html');
    correctPassword = false;
  }
  next();
}
