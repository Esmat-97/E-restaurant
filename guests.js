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
    const { fname, lname, email, password, phone } = req.body;
    const query = 'INSERT INTO guests (fname, lname, email, password, phone) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [fname, lname, email, password, phone], (error, results) => {
        if (error) throw error;
        console.log('Data inserted into MySQL');
        res.send('Data inserted into MySQL');
    });
});


app.delete('/del', (req, res) => {
    const {id }= req.query;
    const query = 'DELETE from guests where guest_id=? ';
    con.query(query, [id], (error, results) => {
        if (error) throw error;
        console.log('Data deleted from MySQL');
    });
});



app.put('/update', (req, res) => {
    const {  email ,id } = req.body; 
    console.log(email);
    console.log(id);
    const query = 'UPDATE guests SET email = ? WHERE guest_id = ?';
    con.query(query, [ email ,id] , (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Error updating user');
      }
      console.log('User updated in MySQL');
      res.status(200).send('User updated in MySQL');
    });
  });
module.exports = app;
