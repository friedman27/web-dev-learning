import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let dayType = 'a weekday';
  let advice = 'time to work hard';
  if (day == 0 || day == 6) {
    dayType = 'the weekend';
    advice = 'time to relax';
  }

  res.render('index.ejs', {
    dayType,
    advice,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
