// Importando dotenv (arquivo de variáveis de ambiente)
require('dotenv/config');

// Importando express
const express = require('express');

// Instanciando o express
const app = express();

// Importando handlebars
const hbs = require('express-handlebars');

// Importando o módulo path
const path = require('path');

// Importando o módulo http
const http = require('http');

// Criando servidor
const server = http.createServer(app);

// Pondo servidor para ouvir na porta configurada no env
server.listen(process.env.PORT);

// Importando rotas
const customers = require('./routes/customers');
const providers = require('./routes/providers');
const products = require('./routes/products');

// Criando as rotas da aplicação
app.use('/customers', customers);
app.use('/providers', providers);
app.use('/products', products);

// Habilitando arquivos estáticos
app.use('/public', express.static(path.join(__dirname, '/public')));

// Configurando a template engine
app.engine(
  'hbs',
  hbs({
    defaultLayout: 'master.hbs',
    extname: '.hbs',
  }),
);

// Especificando o caminho para as views
app.set('views', path.join(__dirname, './views'));

// Especificando qual será a template engine
app.set('view engine', 'hbs');
