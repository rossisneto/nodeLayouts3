const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

//Arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

//Template engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout','./layouts/layout')
app.set('views',__dirname+'/views')


//Rotas
app.get('/',(req,res)=>{
    //res.send('Servidor iniciado')
    res.render('index',{title: 'Pagina Inicial', section:'Pagina incial',body:'teste '})
})
app.get('/produtos',(req,res)=>{
    //res.send('Servidor iniciado')
    let grid = "Conteudo da pagina de produtos"

    res.render('produtos/index',{title: 'Pagina de Produtos', section:'Produtos',body: grid})    
})

app.listen(3000,console.log('servidor iniciado'))

