const express = require('express') //requerindo o express
const app = express() //botando o express dentro de uma variável

app.set('view engine', 'ejs') //renderizar como EJS
app.get('/', function (req, res) {
  const items = [
    { title: 'D', message: 'esenvolver aplicações e serviços de forma fácil' },
    { title: 'E', message: 'SJ usa Javascript para renderizar HTML' },
    { title: 'M', message: 'uito fácil de usar' },
    { title: 'A', message: 'morzinho' },
    { title: 'I', message: 'nstall EJS' },
    { title: 'S', message: 'intaxe simples' }
  ]

  const subtitle =
    'Uma linguagem de modelagem para criação de páginas HTML usando JavaScript'

  res.render('pages/index', {
    qualities: items,
    subtitle: subtitle
  })
}) //criando uma rota

app.get('/sobre', function (req, res) {
  res.render('pages/about')
}) //criando uma rota

app.listen(8080)
console.log('Servidor funcionando')
