const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({'message': req.query.name});
})

app.get('/userdetails', (req, res) => {
    let userDetailsQuery = `Select * from users where userName = ?`;
    connection.query(userDetailsQuery, [req.query.name], (err, results, fields) => {
        if(err){
            console.log('error while fetching record from DB', err);
            res.send({"message":"error fetching results"});
        }else{
            console.log(`user details for ${req.query.name} is : `, results);
            res.send({"details": results});
        }
    });
})

app.listen(port, () => {
  console.log(`Sample app listening at http://localhost:${port}`)
});