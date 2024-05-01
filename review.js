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





app.get('/', (req, res) => {
    const query = "SELECT * FROM  review  INNER JOIN guests on review.guest_id = guests.guest_id ";
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


app.delete('/del', (req, res) => {
    const {id }= req.query;
    const query = 'DELETE from review where review_id=? ';
    con.query(query, [id], (error, results) => {
        if (error) throw error;
        console.log('Data deleted from MySQL');
    });
});



app.put('/accept', (req, res) => {
    console.log('Incoming request body:', req.body);

    const { id } = req.body; 
    console.log('Extracted ID:', id);

    const query = 'UPDATE review SET status="accepted" WHERE review_id = ?';
    con.query(query, [id] , (error, results) => {
      if (error) {
        console.error('Error updating review:', error);
        return res.status(500).send('Error updating review');
      }
      console.log('Review updated in MySQL');
      res.status(200).send('Review updated in MySQL');
    });
});




module.exports = app;
