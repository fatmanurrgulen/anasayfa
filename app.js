var _ = require('underscore');
const express= require('express');

const connection = require('./veritabani.js');

connection.execute('SELECT * FROM  product')
.then((result) =>{
    console.log(result[0]);
}).catch((err) => {
    console.log(err);
});
var ejs = require(ejs);
//ejs.open='*';
//ejs.close='**';
var app = express();