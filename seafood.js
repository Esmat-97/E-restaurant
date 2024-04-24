const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'seafood'
});



app.get('/guests',(req,res)=>{
  const query = "SELECT * FROM  guests";
  con.query(query, (err, result) => {
    if (err) {
        // If an error occurs, send an error response
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
        // If successful, send the fetched data as a response
        res.json(result);
    }
});
    
});




app.post('/insertguests', (req, res) => {
  const { fname ,lname ,email , password ,phone } = req.body;
  
  // Insert data into MySQL
  const query = 'INSERT INTO guests (fname ,lname ,email , password ,phone ) VALUES (?,?,?,?,?)';
  con.query(query, [ fname ,lname ,email , password ,phone ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});






    
app.listen(1999,()=>{
console.log('the server listen at posrt http://localhost:1999');
});