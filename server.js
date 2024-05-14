const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
process.env.TOKEN_SECRET;
const Ajv = require("ajv")
const app = express();

app.get("/", function (req, res) {
    res.send("hello")
})

app.listen(3000);