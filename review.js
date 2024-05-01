const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seafood'
});


app.get('/select', (req, res) => {
    const { email, password } = req.query;
    const query = 'SELECT * FROM guests where email=? AND password=?';
    con.query(query, [email, password], (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'Internal server error' });
            return; // Exit the function to prevent further execution
        }
        // console.log('Data selected from MySQL:', results);
        res.json(results); // Sending the selected data back as a JSON response
    });
    
});


app.get('/', (req, res) => {
    const query = "SELECT * FROM guests";
    con.query(query, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: "Failed to fetch data" });
        } else {
            res.json(result);
        }
    });
});


app.post('/insert', (req, res) => {
    const { id ,text } = req.body;
    const query = 'INSERT INTO review (content , guest_id) VALUES (?, ?)';
    con.query(query, [text , id], (error, results) => {
        if (error) throw error;
        console.log('Data inserted into MySQL');
        res.send('Data inserted into MySQL');
    });
});


module.exports = app;
