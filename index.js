const express = require ('express')
const app = express()
var bodyParser = require('express')
var cookieParser = require('express')
var path = require ('path') 

app.use(cookieParser())

app.use(bodyParser())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get ('/', function(req,res){
res.send ("Olá Ana")
})


app.listen(3000, function(){
    console.log ("Conexão inicializada")
})