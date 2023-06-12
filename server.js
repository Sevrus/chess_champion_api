const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(favicon(__dirname + '/img/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json());

sequelize.initDb();

//Points de terminaison
require('./src/routes/createChampion')(app);
require('./src/routes/findChampionByPk')(app);
require('./src/routes/findAllChampion')(app);
require('./src/routes/updateChampion')(app);
require('./src/routes/deleteChampion')(app);

//Gestion des erreurs 404
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée! Vous pouvez essayer une autre url.';
    res.status(404).json({ message });
});

app.listen(port, () => {
    console.log(`Notre application Express est démarrée sur: http://localhost:${port}`);
});