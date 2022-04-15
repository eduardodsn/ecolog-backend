require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));


app.listen(process.env.PORT || 3001)