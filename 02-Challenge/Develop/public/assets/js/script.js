const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/notes', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error reading notes.' });
    } else {
      const notes = JSON.parse(data);
      res.json(notes);
    }
  });
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error reading notes.' });
    } else {
      const notes = JSON.parse(data);
      notes.push(newNote);

      fs.writeFile('db.json', JSON.stringify(notes), (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Error saving note.' });
        } else {
          res.json(newNote);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
