const express = require('express')
const app = express()
require('dotenv').config();
const port = 8000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const controller = require('./routes/routes.control')
const register = require('./routes/routes.register')
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// MongoDB Connection

app.use(cors({
  origin: 'https://chit-chat.tech',
  credentials: true 
}))
app.use(express.json())
app.use(fileUpload())


mongoose
  .connect(process.env.MONGOOSE_SECRET_KRY)
  .then(() => console.log("DB connection successful!"))
  .catch((error) => console.log(error));

app.use('/api/v1',controller)
app.use('/register',register)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})