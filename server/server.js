const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());


const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "test",
    port: 3306
});


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

con.connect(function(err) {
    if (err) console.log(err);
    else console.log("Connected!");
});

app.get('/', (req, res) => {
    res.send('Well done Rida!')
})

app.get('/test', function (req, res) {
    con.query("SELECT * FROM todos", function (err, result, fields) {
        if (err) console.log(err);
        else
            res.send(result);
    });
});
