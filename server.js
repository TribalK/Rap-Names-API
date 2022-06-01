const express = require('express');
const app = express();
const PORT = 8000;

const rapper = {
  '21Savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, UK'
  },
  'Chance The Rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, IL'
  },
  'Dylan': {
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
  },

};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

// /api/:rapperName - express functionality as a query parameter
app.get('/api/:rapperName', (req, res) => {
  const rapperName = req.params.rapperName.toLowerCase();

  if(rapper[rapperName]) {
    res.json(rapper[rapperName]);
  } else {
    res.json(rapper['Dylan']);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
