const routes = require("express").Router();
const fs = require('fs');

// Criar ponto
routes.post('/api/point/create', (req, res) => {
    if (!req.body) {
        res.status(500).send('Erro - Requisição inválida!')
    } else {
        let points = require('../points.json');
        console.log(req.body.name)
        console.log(req.body.description)
        console.log(req.body.latitudePlus)

        points.push({
            name: req.body.name, 
            description: req.body.description, 
            latitudePlus: req.body.latitudePlus, 
            longitudePlus: req.body.longitudePlus, 
            type: req.body.type,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            activity: req.body.activity
        })

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