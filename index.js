const express = require('express');
const path = require('path');
const  app = express();
const  mysql = require('mysql');
const port = 3000;
const { engine } = require('express-handlebars');

app.engine('hbs', engine({ extname: '.hbs'}))

app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname,'views'));


const  connect = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'test_nodejs_database',
});

connect.connect(function(err){
    if(!!err){
        console.log('error');
    }else{
        console.log('connected');
    }
});

// app.get('/',function(req, res){
    
//     res.render('home')
// })

app.get('/',function(req, res){
    connect.query("select * from user ", function(err , rows , fields){
        if(!!err){
            console.log('error ');
        }else{
            console.log('successful \n');
            console.log(rows);
        }
    })
    res.render('home');
});

// app.get('/',function(req, res){
//     res.render('home')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });