/* importar o módulo do framework express */
const express = require("express");

/* importar o modulo do consign */
const consign = require("consign");

/* importar o modulo do body-parser */
const bodyParser = require("body-parser");

/* importar o modulo do express-validator */
const expressValidator = require("express-validator");

/* iniciar objeto do express */
const application = express();

/* setar as variaveis 'view engine' e 'views' do express */ 
application.set("view engine", "ejs");
application.set("views", "./app/views");

/* configurar o middleware express.static */
application.use(express.static("./app/public"));

/* configurar o middleware body-parser */
application.use(bodyParser.urlencoded({extends: true}));

/* configurar o middleware express-validator */ 
application.use(expressValidator());

/* configura o auto-load das rotas, models, controllers com consign */
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(application);
/* exportar o objeto app */
module.exports = application;