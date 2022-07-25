const express = require('express');
const { Router } = express;
const { fork } = require('child_process');
const randomRoutes = Router();


randomRoutes.get('/', function(req, res) {
    const computo = fork('./utils/computo.js')
    computo.send('start');
    computo.on('message', sum => {
        res.end(`El resultado es ${sum}`)
    })

});

randomRoutes.get('/:cant', function (req, res) {
    const computo = fork('./utils/computo.js --cant ' + req.params.cant)
    computo.send('start');
    computo.on('message', sum => {
        res.end(`El resultado es ${sum}`)
    })

})

module.exports = { randomRoutes };