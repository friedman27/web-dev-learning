import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get('/', (req, res) => {
  console.log(req.rawHeaders);
  res.send('<h1>Hello world!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact me for stuff.</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is an about me page.</h1>');
});
