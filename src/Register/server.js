const express = require('express');
const fs = require('fs');

const app = express();

// Your local port number
const port = 3000;

app.use(express.json());

const filePath = 'users_data.json';

// Read the initial JSON file
let userData = require(`./${filePath}`);

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  userData.users.push(formData);

  // Write the updated data back to the JSON file
  fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  res.send('Form data received and stored.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});