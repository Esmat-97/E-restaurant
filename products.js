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
    const query = "SELECT * FROM products";
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
    const { product_name, description, image, price, stock, guest_id } = req.body;
    const query = 'INSERT INTO products (product_name, description, image, price, stock, guest_id) VALUES (?, ?, ?, ?, ?, ?)';
    con.query(query, [product_name, description, image, price, stock, guest_id], (error, results) => {
        if (error) throw error;
        console.log('Data inserted into MySQL');
        res.send('Data inserted into MySQL');
    });
});

module.exports = app;
