const express = require('express');
const app = express();
// because front end will be using port 3000, we need to use 5000 for backend
const port = process.env.PORT || 5000;

// this gonna go to the database and get the data
app.use('/ums', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

