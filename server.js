const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

const rapper = {
  '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, UK'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, IL'
  },
  'dylan': {
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
    res.json(rapper['dylan']);
  }
})

app.listen(port,host, () => {
  console.log(`Server is running on port ${port}`);
})
