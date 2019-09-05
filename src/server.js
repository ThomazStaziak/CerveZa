// Importando dotenv (arquivo de variáveis de ambiente)
require('dotenv/config');

// Importando express
const express = require('express');

// Instanciando o express
const app = express();

// Importando handlebars
const hbs = require('handlebars')

// Importando o módulo http;
const http = require('http');

// Criando servidor
const server = http.createServer(app);

// Pondo servidor para ouvir na porta configurada no env
server.listen(process.env.PORT);

// Importando rotas
const customers = require('./routes/customers');
const providers = require('./routes/providers');

app.use('/customers', customers);
app.use('/providers', providers);

app.engine('hbs',hbs({
	defaultLayout:'master.hbs',
	extname:'.hbs'
}));
