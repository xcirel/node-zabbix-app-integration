const express = require('express');
const app = express();
const port = 3000;
const zabbixSender = require('zabbix-nodejs');


// Middleware para o parsing do corpo das requisições
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req, res) => { 
  zabbixSender('user.test', 1)
  res.status(200).json({ message: 'Hello DevOps' })
});

app.get('/error', (_req, res) => res.status(400).send('Status: :('));
app.get('/server_error', (_req, res) => res.status(500).send('Status: :('));

app.get('/exception', (req, res) => {
  zabbixSender('user.login', 1)
  throw new Error('Parameter is not a number!');
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
