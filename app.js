const express = require ('express')
const app = express ()
const path = require ('path')


app.listen (3000, ()=>{
    console.log("servidor funcionando😎");
})

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
app.get('/registrer',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/registrer.html"))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.use(express.static('public'))

//            <i class="fa-solid fa-magnifying-glass">
//.header-bot{display: none;} para depsaparecer algo
// border:dotted 2px; para marcar en que estas trabajando