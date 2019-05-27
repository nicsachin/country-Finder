const express = require('express')
const app = express()

const myfetch = require('./myfetch')
const config = require('./config')


app.set('view engine','ejs')
app.use('/',express.static('public'))

app.get('/',(req,res)=>{


    let country = req.query.country


    myfetch(config.url,country,config.headers , (data)=>{
        console.log('>>>' , data)
        res.render('index' , {data})
    })



})

const port = process.env.PORT || 3000
app.listen(port,()=>console.log('server started'))
