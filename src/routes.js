const routes = require("express").Router();
const fs = require('fs');

// Criar ponto
routes.post('/api/point/create', (req, res) => {
    if (!req.body) {
        res.status(500).send('Erro - Requisição inválida!')
    } else {
        let points = require('../points.json');
        points.push({name: 'ere', description: 'reaa', latitudePlus: 0.003, longitudePlus: 0.4})

        fs.writeFile('./points.json', JSON.stringify(points), (error) => {
            if (error) {
                res.send({ status: false })
            } else {
                res.send({ status: true })
            }
        });
    }
});

// Ler pontos
routes.get('/api/point', (req, res) => {
    let points = require('../points.json');

    if (points !== []) {
        res.send({ points: points , status: true})
    } else {
        res.send({ status: false })
    }
});

module.exports = routes;