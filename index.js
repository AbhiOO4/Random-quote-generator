
const express = require('express')

const app = express()

const path = require('path')

const quotes = require('./quotes.json')


app.set('view engine','ejs');

app.set('views', path.join(__dirname,'/views'))

app.get('/random',(req,res) => {
    const num = Math.floor(Math.random()*30)+1
    const quote = quotes[num]
    res.render('home.ejs', {quote})
})

app.listen('3000', ()=> {
    console.log("Server running on port 3000")
})