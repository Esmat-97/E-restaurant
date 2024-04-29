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



app.delete('/del', (req, res) => {
    const {id }= req.query;
    const query = 'DELETE from products where product_id=? ';
    con.query(query, [id], (error, results) => {
        if (error) throw error;
        console.log('Data deleted from MySQL');
    });
});



app.put('/update', (req, res) => {
    const {  price ,id } = req.body; 
    
    console.log(price);
    console.log(id);

    const query = 'UPDATE products SET price = ? WHERE  product_id= ?';
    con.query(query, [ price ,id ] , (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        return res.status(500).send('Error updating user');
      }
      console.log('User updated in MySQL');
      res.status(200).send('User updated in MySQL');
    });
  });

module.exports = app;
