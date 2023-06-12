const express = require('express');
const { success, getUniqueId } = require('./helper');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
let champions = require('./mock-champion');

const app = express();
const port = 3000;

app
    .use(favicon(__dirname + '/img/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json());

app.get('/api/champions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const champion = champions.find(champion => champion.id === id);
    const message = 'Un champion à bien été trouvé';
    res.json(success(message, champion));
});

app.get('/api/champions', (req, res) => {
    const message = 'La liste des champions a bien été récupérée';
    res.json(success(message, champions));
});

app.post('/api/champions', (req, res) => {
    const id = getUniqueId(champions);
    const championCreated = {...req.body, ...{id: id, created: new Date()}};
    champions.push(championCreated);
    const message = `Le champion ${championCreated.name} a bien été créé`;
    res.json(success(message, championCreated));
});

app.put('/api/champions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const championUpdated =  {...req.body, id: id};
    champions = champions.map(champion => champion.id === id ? championUpdated : champion);
    const message = `Le champion ${championUpdated.name} a bien été mis à jour`;
    res.json(success(message, championUpdated));
});

app.delete('/api/champions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const championDeleted = champions.find(champion => champion.id === id);
    champions = champions.filter(champion => champion.id !== id);
    const message = `Le champion ${championDeleted.name} a bien été supprimé.`;
    res.json(success(message, championDeleted));
});

app.listen(port, () => {
    console.log(`Notre application Express est démarrée sur: http://localhost:${port}`);
});