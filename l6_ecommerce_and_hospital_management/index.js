import express from 'express';
const app = express();
const port = 3000;

// app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send("hello jee");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
