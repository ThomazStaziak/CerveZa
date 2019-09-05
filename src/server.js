// Importando dotenv (arquivo de variáveis de ambiente)
require('dotenv/config');

// Importando express
const express = require('express');

// Instanciando o express
const app = express();

// Importando o módulo http;
const http = require('http');

// Criando servidor
const server = http.createServer(app);

// Pondo servidor para ouvir na porta configurada no env
server.listen(process.env.PORT);
