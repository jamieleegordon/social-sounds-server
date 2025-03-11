const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

console.log("hello")

// This will log every request to the root route
app.get('/', (req, res) => {
  console.log('Received request on / route');  // Log to console when this route is hit
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
