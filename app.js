const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/view',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definir las Rutas - Para el cliente
app.get('/',(req, res)=>{
    res.render('login')
});
app.post('/dashboard',(req,res)=>{
    //Texto
    //    res.send('Aqui va el dash')
    //archivo - HTML
    //    res.sendFile('dashboard.html')
    res.render('dashboard',{
        nombre :"Yavé Vargas",
        correo : "yave.vargas16@gmail.com"
    }) //Vista Dinamica -  HTML Dinamico
});

app.get('*',(req, res)=>{
    res.render('404')
});

//Para el Desarrollador
app.listen(port,()=>{
    console.log('El servidor express esta corriendo en el puerto: ',port);
}) 
