const express = require('express');
const app = express();
const port = 3000;

const songList = [
  { id: 1, title: "Not You",    artists: "Alan Walker",   duration: "2.34"},
  { id: 2, title: "Limbo",      artists: "Keshi",         duration: "3.30"},
  { id: 3, title: "Kill Bill",  artists: "SZA",           duration: "2.34"},
  { id: 4, title: "Recless",    artists: "Madinson Beer", duration: "3.23"},
];

app.get('/songs', (req, res) => {
  res.json(songList);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});